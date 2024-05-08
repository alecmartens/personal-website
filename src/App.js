import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Spacer from "./components/spacer";
import Footer from "./components/footer";
import HomePage from "./components/homepage";
import NotFoundPage from "./components/notfoundpage"

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
            <Route path="*" element={<NotFoundPage />} />
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
