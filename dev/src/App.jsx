/*  
  MAIN FILE

  CENTRALIZED COMPONENT MANAGEMENT
*/

// Main Imports

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Components

import MainPageDesktop from "./components/desktop-view/MainPageDesktop";

// Style sheets
import "./styles/desktop-view/main-page-1.css";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>

      {/* 
          Route Configuration
      */}

      <Routes>

        {/* ########################################## */}
        
        <Route path="/" element={
            <>
              <MainPageDesktop />
            </>
          } 
        />

        {/* ########################################## */}

        <Route path="/app" element={
            <>
              <MainPageDesktop />
            </>
          } 
        />

        {/* ########################################## */}

      </Routes>

      {/* ########################################### DESKTOP CONFIGURATION  ########################################### */}


      {/* {isMobile ? (Why 
        <>
          <MobileNav />
          <MobileComp1 />
          <Nav />
        </>
      ) : (
        <>
          <DesktopNav />
          <Comp1 />
        </>
      )} */}

    </Router>
  );
}

export default App;