import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "../styles/darkmodetoggle.css"


const Spacer = ({
  height,
  width,
  isDarkMode,
  showHomeButton,
}) => {
  const spacerStyle = {
    height: height || "20px",
    width: width || "100%",
    backgroundColor: isDarkMode ? "#2a3a57" : "#ADD8E6", // Dark blue for dark mode, light blue for light mode
    margin: "0 auto",
    position: "relative",
  };

  const buttonContainerStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  };

  return (
    <div style={spacerStyle}>
      <div style={{ ...buttonContainerStyle, left: "20px" }}>
        {showHomeButton && (
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: isDarkMode ? "#fff" : "#000",
            }}
            onClick={() => window.scrollTo(0, 0)}
          >
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Spacer;