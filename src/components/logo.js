import React from 'react';
import logoImage from '../assets/char1.png'; 
import '../styles/logo.css'

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Alec Martens" class="mobile-hide" className="logo-img" />
    </div>
  );
}

export default Logo;
