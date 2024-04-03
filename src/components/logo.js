import React from 'react';
import logoImage from '../assets/professional-modified.png'; 

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Alec Martens" className="logo-img" />
    </div>
  );
}

export default Logo;
