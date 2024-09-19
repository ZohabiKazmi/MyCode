import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollingVideo.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollingVideo = () => {
  const canvasRef = useRef(null);
  const [frames] = useState({
    currentIndex: 0,
    maxIndex: 556,
  });
  const images = useRef([]);
  const imagesLoaded = useRef(0);

  useEffect(() => {
    preloadImages();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const preloadImages = () => {
    for (let i = 1; i <= frames.maxIndex; i++) {
      const imageUrl = `/assets/frame_${i.toString().padStart(4, "0")}.jpeg`;
      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        imagesLoaded.current++;
        if (imagesLoaded.current === frames.maxIndex) {
          loadImage(frames.currentIndex);
          startAnimation();
        }
      };
      images.current.push(img);
    }
  };

  const loadImage = (index) => {
    if (index >= 0 && index <= frames.maxIndex) {
      const img = images.current[index];
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const scaleX = canvas.width / img.width;
      const scaleY = canvas.height / img.height;
      const scale = Math.max(scaleX, scaleY);

      const newWidth = img.width * scale;
      const newHeight = img.height * scale;

      const offsetX = (canvas.width - newWidth) / 2;
      const offsetY = (canvas.height - newHeight) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(img, offsetX, offsetY, newWidth, newHeight);

      frames.currentIndex = index;
    }
  };

  const startAnimation = () => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".parent",
        start: "top top",
        scrub: 2,
        end: "bottom bottom",
      },
    }).to(frames, {
      currentIndex: frames.maxIndex,
      onUpdate: () => {
        loadImage(Math.floor(frames.currentIndex));
      },
    });
  };

  const resizeCanvas = () => {
    loadImage(Math.floor(frames.currentIndex));
  };

  return (
    <div className="video-container">
      <div className="parent">
        <div className="sticky-canvas">
          <canvas ref={canvasRef} />
        </div>
      </div>
    </div>
  );
};

export default ScrollingVideo;
