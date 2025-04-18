/* 
  Main Page - Desktop View
*/

// Main Imports
import { useState, useEffect } from 'react';

// Style Imports
import './../../styles/desktop-view/main-page-1.css';

// Image imports
import ChibiRobin from "./../../images/chibi_robin.jpeg"
import RJIcon from "./../../images/ashleybop.gif"

/* 
  ################## Main Configuration ################## 
*/

function MainPageDesktop() {
  const [darkMode, setDarkMode] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

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

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
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
        <div className="post-box-container" style={{ marginTop: "10vh"}}>
          <div className="post-box">
            <div className="inside-post-box">

              {/* #### TOP BOX ### */}
              <div className="post-box-top-box">

                <div className="post-box-user-icon">
                  <img src={RJIcon} />
                </div>

                <div className="post-box-user-icon-gap">
                </div>

                <div className="post-box-user-name-box">
                  <div className="post-box-name-box-container">
                    <div className="post-box-name-box-username">
                      <div>
                        Smoodeazy
                      </div>
                    </div>
                    <div className="post-box-name-box-username-two">
                      <div>
                        @bestfullstackdeveloper
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* #### TOP BOX ### */}

              {/* #### TEXT BOX #### */}
              <div className="post-box-text-box">
                First blog post! Can't wait to start developing this project!
                <br />
                <span className="hashtag">
                  #janebot
                </span>
              </div>
              {/* #### TEXT BOX #### */}

              {/* #### TIME STAMP BOX #### */}
              <div className="timestamp-container">
                20:41PM 。 2023-04-18
              </div>
              {/* #### TIME STAMP BOX #### */}

              {/* #### POST INTERACTIVE BOX #### */}
              <button 
                  className={`like-button ${isLiked ? 'liked' : ''}`}
                  onClick={handleLikeClick}
                  aria-label="Like post"
              >
                  ♥
              </button>
              <span className="like-count">{likeCount} {likeCount === 1 ? 'person likes' : 'people like'} this</span>
              {/* #### POST INTERACTIVE BOX #### */}

            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default MainPageDesktop;
