import React from "react";
import attackCatImage from "../assets/attackCat_1.png";
import ohioUniversityFormalGreen from "../assets/Ohio University-formal-green.png";
import huntington from "../assets/huntington.svg";
import "../styles/aboutme.css";
import { Link } from "react-router-dom";

const AboutMePage = () => {
  return (
    <div className="aboutme-page">
      <div className="aboutme-container">
        <div className="text">
          <h1>About Me 🤵</h1>
          <p>
            I graduated with a B.S. in Computer Science and a Minor in
            Mathematics from Ohio University in 2022
          </p>
          <a href="https://ohio.edu">
            <img
              src={ohioUniversityFormalGreen}
              alt="Ohio University"
              className="university-image"
            />
          </a>
          <br></br>
          <p>
            I am currently working as a Mobile Automation Developer for
            Huntington Bank.
          </p>
          <p>
            You can find my&nbsp;
            <Link
              to="/resume"
              className="App-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              resume here.
            </Link>
          </p>
          <a href="https://www.huntington.com/">
          <img
            src={huntington}
            alt="Huntington Bank"
            className="company-image"
          />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
