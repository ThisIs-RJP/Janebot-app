/* 
  Main Page - Desktop View
*/

// Main Imports
import { useState, useEffect } from 'react';

// Style Imports
import './../../styles/desktop-view/main-page-1.css';

// Image imports
import ChibiRobin from "./../../images/chibi_robin.jpeg"

/* 
  ################## Main Configuration ################## 
*/

function MainPageDesktop() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="main-page-desktop-container">
      <div className="left-box-container">
        <button 
          className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
          onClick={toggleTheme}
          aria-label="Toggle dark/light mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        <div className="left-box-top-image-container">
          <div className="left-box-top-image">
            <img src={ChibiRobin} />
          </div>
        </div>

        <div className="left-box-title-block">
          <div className='devlog-title-block'>DevLog Contents</div>
          <div className='devlog-title-underline-container'>
            <div className='devlog-title-underline' />
          </div>
        </div>

      </div>

      <div className="full-page-divider" />

      <div className="right-box-container">
      </div>
    </div>
  )
}

export default MainPageDesktop;
