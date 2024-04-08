import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import DownloadResume from "./resume/downloadresume";
import "../styles/darkmodetoggle.css"


const Spacer = ({
  height,
  width,
  isDarkMode,
  showHomeButton,
  showDownloadButton,
  showResumeButton,
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
      <div style={{ ...buttonContainerStyle, right: "20px" }}>
        {showDownloadButton && <DownloadResume />}
        {showResumeButton && (
          <Link
            to="/resume"
            style={{
              textDecoration: "none",
              color: isDarkMode ? "#fff" : "#000",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faFileAlt} size="lg" />
            <span style={{ marginLeft: "7px", marginRight: "35px" }}>Resume</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Spacer;