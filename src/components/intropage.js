import React from "react";
import Logo from "./logo";
import "../styles/intropage.css"

const IntroPage = () => {
  return (
    <div className="intro-page">
      <div className="intro-container">
        <div className="text">
          <p1>👋 Hello! My name is</p1>
          <h1>Alec Martens.</h1>
          <p>I am a software developer from Ohio.</p>
          <p>
            I enjoy solving problems and making efficient solutions through
            coding and collaboration. I also enjoy testing and automating these solutions.
          </p>
          <br></br>
          <div className="social-links">
            <a
              href="https://github.com/alecmartens"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/alecmartens"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/alecmartens"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>
        <div className="logo-container">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
