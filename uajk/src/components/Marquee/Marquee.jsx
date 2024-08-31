import React from 'react';
import './Marquee.css'; 

const text1 = "AJK Bar Council Leaders Applaud AJK Efforts in Legal Education"
const text2 = "Convocation 2024 Highlights"
const text3 = "UAJK Launches Dynamic New Website with Advanced Features"
const text4 = "Admission Details"

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {/* Repeat marquee-content twice to create a seamless effect */}
        <div className="marquee-content">
          <span>{text1}</span>
          <span>{text2}</span>
          <span>{text3}</span>
          <span>{text4}</span>
        </div>
        <div className="marquee-content">
          <span>{text1}</span>
          <span>{text2}</span>
          <span>{text3}</span>
          <span>{text4}</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
