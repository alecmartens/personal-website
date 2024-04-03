import React, { useState } from "react";
import DownloadResume from "./downloadresume";
import Spacer from "../spacer";
import DarkModeToggle from "../darkmodetoggle";

const Resume = ({ isDarkMode, setIsDarkMode }) => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="resume">
      <Spacer
        height="50px"
        isDarkMode={isDarkMode}
        showHomeButton
        showDownloadButton
      />
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Education />
      <WorkExperience />
      <ProjectExperience />
      <Qualifications />
    </div>
  );
};

const Education = () => {
  return (
    <div className="text">
      <h2>Education</h2>
      <p>
        Ohio University, Athens, OH
        <br />
        B.S. Computer Science w/ Minor in Mathematics
        <br />
        Graduation May 2022
      </p>
    </div>
  );
};

const WorkExperience = () => {
  return (
    <div className="text">
      <h2>Work Experience</h2>
      <Experience
        company="Huntington Bank (Contractor), Easton OH"
        title="Mobile QA"
        duration="January 2023-Current"
        description={[
          "Work on a scrum team to write manual test cases, condition user data, and perform functional testing.",
          "Utilize tools like Appium and TestNG in a Java framework to fully automate regression scenarios and new features in the mobile app.",
          "Led the development and research for API testing with Postman and the conversion to ReadyAPI",
        ]}
      />
      <Experience
        company="Dev10, Remote"
        title="Software Developer"
        duration="June 2022-Current"
        description={[
          "Participated in Dev10’s 3 month bootcamp focusing on building full-stack applications using Java, SQL, React, and more",
          "Worked on a team of 3 to create a College Commerce Full-Stack application",
        ]}
      />
      <Experience
        company="Ohio University Avionics Engineering Center"
        title="Research Assistant"
        duration="May 2021-August 2021"
        description={[
          "Assisted professor with getting records from the Ohio University Airport, and digitized the graphs contained within them.",
          "Created an SQL database of the records and their graphs for organization and access.",
        ]}
      />
    </div>
  );
};

const ProjectExperience = () => {
  return (
    <div className="text">
      <h2>Project Experience</h2>
      <Project
        title="College Commerce Full-Stack Application"
        year="August 2022"
        description="Created a full stack application designed for college students to easily buy/sell goods and services."
        technologies={["React JS", "mySQL", "NodeJS", "Spring Boot"]}
      />
      <Project
        title="Senior Design Project"
        year="2021-2022"
        description="Team Leader of a 4-person team creating a Room Availability mobile/web application that allows users to easily check if a study room at Ohio University is occupied."
        technologies={["React JS", "mySQL", "NodeJS"]}
      />
      {/* Add other projects here */}
    </div>
  );
};

const Qualifications = () => {
  return (
    <div className="text">
      <h2>Qualifications</h2>
      <ul>
        <li>Computer and Technical:</li>
        <li>C/C#/C++/Java/Python/Rust Programming</li>
        <li>Android Studio and Flutter</li>
        <li>SQL and Firebase Databases</li>
        <li>Selenium, Appium, Cucumber, TestNG</li>
      </ul>
    </div>
  );
};

const Experience = ({ company, title, duration, description }) => {
  return (
    <div className="text">
      <h3>{company}</h3>
      <p>{title}</p>
      <p>{duration}</p>
      <ul>
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

const Project = ({ title, year, description, technologies }) => {
  return (
    <div className="text">
      <h3>{title}</h3>
      <p>{year}</p>
      <p>{description}</p>
      <p>Technologies used: {technologies.join(", ")}</p>
    </div>
  );
};

export default Resume;
