import React, { useState, useRef, useEffect } from 'react';
import './HeroSlider2.css';

import hero1 from '../../assets/kac.jpg'
import hero2 from '../../assets/admission.jpg'
import hero3 from '../../assets/scholarship.jpg'
import hero4 from '../../assets/independance.jpg'
import hero5 from '../../assets/Field-Trip.jpg'
import hero6 from '../../assets/convocation.jpg'

const HeroSlider2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const slideIntervalRef = useRef(null);
    const startXRef = useRef(0);

    const slides = [
        {
            id: 1,
            title: 'Welcome to the University of Azad Jammu and Kashmir',
            description: 'Empowering Leaders of Tomorrow with Knowledge, Innovation, and Community.',
            bgImage: hero1
        },
        {
            id: 2,
            title: 'Admissions for Fall 2024 Are Open Now!',
            description: 'Seize Your Opportunity to Learn, Grow, and Succeed at the University of Azad Jammu and Kashmir.',
            bgImage: hero2
        },
        {
            id: 3,
            title: 'Scholarships Awarded to Deserving Students',
            description: 'Recognizing Excellence and Supporting Dreams through Education.',
            bgImage: hero3
        },
        {
            id: 4,
            title: "Pakistan's Independance Day",
            description: 'A Message of Freedom for Kashmir.',
            bgImage: hero4
        },

        {
            id: 5,
            title: 'Field Trip to Lahore',
            description: 'Exploring the Rich Heritage and Vibrant Culture of Different Cities.',
            bgImage: hero5
        },
        {
            id: 6,
            title: 'Convocation 2024',
            description: 'Celebrating Achievement, Honoring Excellence, and Embracing New Beginnings.',
            bgImage: hero6
        },
    ];

    useEffect(() => {
        slideIntervalRef.current = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(slideIntervalRef.current);
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

    // Drag functionality
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
        <div className="hero-slider">
            
            <div
                className="slider"
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.bgImage})` }}
                    >
                        <div className="text-container">
                            <h2 className="slide-title">{slide.title}</h2>
                            <p className="slide-description">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <button className="arrow left-arrow" onClick={previousSlide}>&#10094;</button>
            <button className="arrow right-arrow" onClick={nextSlide}>&#10095;</button>

            {/* Dots for navigation */}
            <div className="dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default HeroSlider2;
