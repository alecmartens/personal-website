import React from "react";
import Spacer from "./spacer";
import ProjectsPage from "./projectspage";
import IntroPage from "./intropage";
import AboutMePage from "./aboutmepage";
import NalaCowboy from "./nalacowboy";
import DarkModeToggle from "./darkmodetoggle";

const HomePage = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div>
      <Spacer
        height="50px"
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        showHomeButton
        showResumeButton
      />
      <DarkModeToggle
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
      <IntroPage />
      <Spacer height="50px" isDarkMode={isDarkMode} /> <ProjectsPage />
      <Spacer height="50px" isDarkMode={isDarkMode} /> <AboutMePage />
      <Spacer height="50px" isDarkMode={isDarkMode} /> <NalaCowboy />
    </div>
  );
};

export default HomePage;
