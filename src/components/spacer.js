import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import DownloadResume from "./resume/downloadresume";
import DarkModeToggle from "./darkmodetoggle";
import "../styles/darkmodetoggle.css"


const Spacer = ({
  height,
  width,
  isDarkMode,
  setIsDarkMode,
  showHomeButton,
  showDownloadButton,
  showResumeButton,
  showDarkModeButton,
}) => {
  const spacerStyle = {
    height: height || "20px",
    width: width || "100%",
    // maxWidth: "2800px",
    backgroundColor: isDarkMode ? "#2a3a57" : "#ADD8E6", // Dark blue for dark mode, light blue for light mode
    margin: "0 auto",
    position: "relative", // Set position to relative
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "space-between",
    // padding: "0px",
    // paddingLeft: "20px",
    // paddingRight: "20px",
  };

  const buttonContainerStyle = {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center", // Center the content horizontally
    // height: "100%", // Ensure the container takes full height
    position: "absolute", // Set position to absolute
    top: "50%", // Center vertically
    transform: "translateY(-50%)", // Adjust vertical position
  };

  return (
    <div style={spacerStyle}>
      {/* <div style={buttonContainerStyle}> */}
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
      {/* <div style={buttonContainerStyle}> */}
      {/* <div style={{ justifyContent: "center" }}> */}
        {showDarkModeButton && (
          <div style={{ buttonContainerStyle, justifyContent: "center" }}>
            <DarkModeToggle
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
          </div>
        )}
      {/* </div> */}
      {/* <div style={buttonContainerStyle}> */}
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