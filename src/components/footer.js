// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="text">
          &copy; Alec Martens 2024
        </div>
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
    </footer>
  );
};

export default Footer;
