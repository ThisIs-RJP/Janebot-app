import { useState, useEffect } from 'react';

// Components
import DesktopNav              from "./components/desktopNavbar";
// import Comp1                   from "./components/comp_1";

// Style sheets
import "./styles/main-page-1.css";

// import MobileNav from "./components/mobile/navbar_mobile";
// import MobileComp1 from "./components/mobile/comp_1_mobile";

import Jane from "/public/janebot.png" 

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
    <div>

      {/* ########################################### DESKTOP CONFIGURATION  ########################################### */}

      <div className="main-page-full-box">
        <div>
          <img src={Jane} />
          <br />
          We'll see you guys very soon!
          <br />

          -- The Developers
        </div>
      </div>

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

    </div>
  );
}

export default App;