import React, { useState } from 'react';
import './NavBar.css'; 

import logo from '../../assets/uajk-logo.png'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
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
            <li>About</li>
            <li>Services</li>
            <li>Tour</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={handleMenuToggle}>
          ☰
        </div>

        {/* Slide-in Menu */}
        {menuOpen && (
          <div className="side-menu">
            <div className="close-icon" onClick={handleMenuToggle}>
              &times;
            </div>
            <ul className="side-menu-list">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Tour</li>
              <li>Contact</li>
            </ul>
          </div>
        )}

        {/* Screen Blur */}
        {menuOpen && <div className="screen-blur" onClick={handleMenuToggle}></div>}
      </div>
    </div>
  );
};

export default NavBar;
