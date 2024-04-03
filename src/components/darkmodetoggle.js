import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = ({ isDarkMode, setIsDarkMode }) => {
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="toggle">
      <br></br>
      <input
        type="checkbox"
        id="modeToggle"
        checked={isDarkMode}
        onChange={toggleMode}
      />
      <label htmlFor="modeToggle" className="toggle-slider">
        {isDarkMode ? <FaMoon /> : <FaSun />}
      </label>
    </div>
  );
};

export default DarkModeToggle;
