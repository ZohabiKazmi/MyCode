// StatsCounter.js
import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './StatsCounter.css'; 

const statsData = [
  { number: 5, suffix: '', label: 'Campuses' },
  { number: 29, suffix: '', label: 'Faculties' },
  { number: 42, suffix: '', label: 'Programs' },
  { number: 7692, suffix: '', label: 'Students' },
];

const StatsCounter = () => {
  // Intersection Observer hook to detect if the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Animation triggers when 20% of the component is visible
  });

  return (
    <div className="stats-counter-container">
    <div ref={ref} className="stats-counter">
      {statsData.map((stat, index) => (
        <div key={index} className="counter-card">
          <h2 className="counter-number">
            {inView ? (
              <CountUp start={0} end={stat.number} duration={2.5} />
            ) : (
              0
            )}
            {stat.suffix}
          </h2>
          <p className="counter-label">{stat.label}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default StatsCounter;
