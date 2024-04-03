import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import DownloadResume from "./resume/downloadresume";

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
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px",
  };

  return (
    <div style={spacerStyle}>
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
      {showDownloadButton && <DownloadResume />}{" "}
      {showResumeButton && ( // Render the resume button if showResumeButton is true
        <Link
          to="/resume"
          style={{
            textDecoration: "none",
            color: isDarkMode ? "#fff" : "#000",
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
          }}
        >
          <FontAwesomeIcon icon={faFileAlt} size="lg" /> {/* Icon */}
          <span style={{ marginLeft: "5px" }}>Resume</span> {/* Text */}
        </Link>
      )}
    </div>
  );
};

export default Spacer;
