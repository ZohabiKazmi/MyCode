import React, { useEffect, useState, useRef } from 'react';
import './HeroSlider.css'; 
//images imported
import hero1 from '../../assets/islrealf.jpg'
import hero2 from '../../assets/pide1-3.jpg'
import hero3 from '../../assets/see1.jpg'

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const slideIntervalRef = useRef(null);
  const startXRef = useRef(0);
  const customCursorRef = useRef(null);


  //Change below array to update, add or delete content of slides
  const slides = [
    {
      title: 'Bold & Beautiful',
      description: 'Embrace the sun-kissed season with our collection of breezy',
      image: hero2,
    },
    {
      title: 'Multi-faceted Beauty',
      description: 'Embrace the sun-kissed season with our collection of breezy',
      image: hero1,
    },
    {
      title: 'Effortless Elegance',
      description: 'Embrace the sun-kissed season with our collection of breezy',
      image: hero3,
    },
  ];

  useEffect(() => {
    slideIntervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(slideIntervalRef.current);
    };
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const updateSliderPosition = () => {
    sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  useEffect(() => {
    updateSliderPosition();
  }, [currentIndex]);

  const handleDotClick = (index) => {
    clearInterval(slideIntervalRef.current);
    setCurrentIndex(index);
    slideIntervalRef.current = setInterval(nextSlide, 5000);
  };

  const handleMouseMove = (e) => {
    const customCursor = customCursorRef.current;
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
  };

  const handleMouseEnter = () => {
    const customCursor = customCursorRef.current;
    customCursor.style.display = 'flex';
  };

  const handleMouseLeave = () => {
    const customCursor = customCursorRef.current;
    customCursor.style.display = 'none';
  };

  // Add custom cursor change on hover
  const handleCursorHoverEnter = () => {
    const customCursor = customCursorRef.current;
    customCursor.textContent = "click";
    customCursor.classList.add('cursor-link-hover');
  };

  const handleCursorHoverLeave = () => {
    const customCursor = customCursorRef.current;
    customCursor.textContent = "drag";
    customCursor.classList.remove('cursor-link-hover');
  };

  // Add drag functionality
  const handleMouseDown = (e) => {
    startXRef.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    const endX = e.clientX;
    const threshold = 50; // Minimum pixels to consider a valid swipe

    if (startXRef.current > endX + threshold) {
      nextSlide();
    } else if (endX > startXRef.current + threshold) {
      previousSlide();
    }
  };

  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const threshold = 50; // Minimum pixels to consider a valid swipe

    if (startXRef.current > endX + threshold) {
      nextSlide();
    } else if (endX > startXRef.current + threshold) {
      previousSlide();
    }
  };

  return (
    <div
      className="hero"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="custom-cursor" ref={customCursorRef}>drag</div>
      <div
        className="slider"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div className={`slide ${index === currentIndex ? 'active' : ''}`} key={index}>
            <div className="content">
              <h1 className="z_title">{slide.title}</h1>
              <p className="z_description">{slide.description}</p>
              <button
                onMouseEnter={handleCursorHoverEnter}
                onMouseLeave={handleCursorHoverLeave}
              >
                Virtual Tour &#10095;
              </button>
            </div>
            <div className="image-container">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            onMouseEnter={handleCursorHoverEnter}
            onMouseLeave={handleCursorHoverLeave}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
