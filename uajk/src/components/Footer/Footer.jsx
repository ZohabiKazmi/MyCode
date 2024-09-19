import React from 'react';
import './Footer.css';
import logo from '../../assets/uajk-monogram.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo and description section */}
        <div className="footer-section logo-section">
          <div className="logo_align">
            <img src={logo} alt="Logo" className="footer-logo" />
          </div>
          <p>
            We are a leading educational institution providing excellence in learning
            and a vibrant community.
          </p>
        </div>

        {/* Quick Links section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Pages section */}
        <div className="footer-section">
          <h3>Pages</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>123 University Road, City, Country</p>
          <p>Email: info@university.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2024 Your University Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
