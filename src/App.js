import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroPage from "./components/intropage";
import AboutMePage from "./components/aboutmepage";
import ProjectsPage from "./components/projectspage";
import DarkModeToggle from "./components/darkmodetoggle";
import Spacer from "./components/spacer";
import NalaCowboy from "./components/nalacowboy";
import Footer from "./components/footer";
import ResumePage from "./components/resume/resumepage";
import HomePage from "./components/homepage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Router>
      <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                />
              }
            />
            <Route
              path="/resume"
              element={
                <ResumePage
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                />
              }
            />
          </Routes>
        </div>
        <Spacer height="50px" isDarkMode={isDarkMode} /> <Footer />
        <br></br>
        <Spacer height="50px" isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
}

export default App;
