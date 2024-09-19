import React, { useState } from 'react';
import './NavBar.css'; 
import { FaFacebook, FaSquareXTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa6';

import logo from '../../assets/uajk-logo.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false); // Track the closing state

  const handleMenuToggle = () => {
    if (menuOpen) {
      setClosing(true); // Set closing state to true when closing the menu
      setTimeout(() => {
        setMenuOpen(false); // Actually close the menu after animation ends
        setClosing(false); // Reset closing state
      }, 500); // Match the duration of the slide-out animation
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <div className="nav_container">
      <div className="navbar">
        {/* Left Logo */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Center Menu */}
        <div className="center-menu">
          <ul>
            <li>University</li>
            <li>Academic</li>
            <li>Admission</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={handleMenuToggle}>
          ☰
        </div>

        {/* Secondary Menu */}
        {(menuOpen || closing) && (
          <div className={`side-menu ${closing ? 'slide-out' : 'slide-in'}`}>
            <div className="close-icon" onClick={handleMenuToggle}>
              &times;
            </div>
            <ul className="side-menu-list">
              <li>Administrative Offices</li><hr />
              <li>Examintation</li><hr />
              <li>Life At University</li><hr />
              <li>Q.E.C</li><hr />
              <li>Online Admission</li><hr />
              <li>Online Portal</li><hr />
              <li>Affiliated Colleges</li><hr />
              <li>Policies and Guidelines</li><hr />
              <li>University Organogram</li><hr />
              <li>ORIC Office</li><hr />
              <li>Journals</li><hr />
              <li>Almuni</li><hr />
              <li><div className='header_social_icon'>
                <FaFacebook/>
                <FaSquareXTwitter/>
                <FaYoutube/>
                <FaEnvelope/>
                </div></li>
            </ul>
          </div>
        )}

        {/* Screen Blur */}
        {menuOpen && !closing && <div className="screen-blur" onClick={handleMenuToggle}></div>}
      </div>
    </div>
  );
};

export default NavBar;
