import "../component/Skill.css";
import React from "react";
import MyImage from "../image/gal-010.webp";
import MyImage01 from "../image/image 1.png";
import MyImage02 from "../image/image 2.png";
import MyImage03 from "../image/image 3.png";
import MyImage04 from "../image/image 4.png";
import MyImage05 from "../image/image 5.png";
import MyImage06 from "../image/image 6.png";
import MyImage07 from "../image/image 7.png";
import MyImage08 from "../image/image 8.png";
import MyImage09 from "../image/image 9.png";
import MyImage010 from "../image/image 10.png";
import MyImage011 from "../image/image 11.png";
import MyImage012 from "../image/image 12.png";
import MyImage013 from "../image/image 13.png";
import MyImage014 from "../image/image 14.png";
import MyImage015 from "../image/image 15.png";
import MyImage016 from "../image/image 16.png";
import MyImage017 from "../image/image 17.png";
import MyImage018 from "../image/image 18.png";

const Skill = () => {
  return (
    <div className="skill">
      <div className="first-container">
        <div className="text">
          <img src={MyImage} alt="the man" className="jau-01" />
        </div>
        <div className="skill_container">
          <div className="skill-box">
            <span className="title">HTML</span>

            <div className="skill-bar">
              <span className="skill-per html">
                <span className="tooltip">95%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">CSS, SASS</span>

            <div className="skill-bar">
              <span className="skill-per css">
                <span className="tooltip">90%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">JavaScript</span>

            <div className="skill-bar">
              <span className="skill-per javascript">
                <span className="tooltip">90%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">React</span>

            <div className="skill-bar">
              <span className="skill-per react">
                <span className="tooltip">90%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">NodeJS</span>

            <div className="skill-bar">
              <span className="skill-per nodejs">
                <span className="tooltip">85%</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="skill-image-container">
        <div className="jau-11">
          <div className="image-title">
            <h5>Programming Languages</h5>
          </div>
          <div className="image">
            <a target="_blank" rel="noopener noreferrer" href="https://html.com">
              <img src={MyImage01} alt="programmimg language" className="main-001"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.w3.org/Style/CSS/Overview.en.html">
              <img src={MyImage02} alt="programmimg language" className="main-001" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://javascript.com">
              <img src={MyImage03} alt="programmimg language" className="main-001" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://react.dev">
              <img src={MyImage04} alt="programmimg language" className="main-001" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org">
              <img src={MyImage05} alt="programmimg language" className="main-001" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://python.org">
              <img src={MyImage06} alt="programmimg language" className="main-001" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://java.com">
              <img src={MyImage07} alt="programmimg language" className="main-001" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.w3schools.com/cs/index.php">
              <img src={MyImage08} alt="programmimg language" className="main-001" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://cplusplus.com">
              <img src={MyImage09} alt="programmimg language" className="main-001" />
            </a>
          </div>
        </div>

        <div className="jau-12">
          <div className="image-title">
            <h5>Software</h5>
          </div>
          <div className="image">
            <a target="_blank" rel="noopener noreferrer" href="https://figma.com">
              <img src={MyImage010} alt="programmimg language" className="main-001" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.adobe.com/in/products/photoshop.html">
              <img src={MyImage011} alt="programmimg language" className="main-001" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://helpx.adobe.com/in/xd/get-started.html">
              <img src={MyImage012} alt="programmimg language" className="main-001" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://linux.org">
              <img src={MyImage013} alt="programmimg language" className="main-001" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.adobe.com/in/products/aftereffects.html">
              <img src={MyImage014} alt="programmimg language" className="main-001" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.adobe.com/in/products/indesign.html">
              <img src={MyImage015} alt="programmimg language" className="main-001" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://blender.org">
              <img src={MyImage016} alt="programmimg language" className="main-001" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://lumen.com">
              <img src={MyImage017} alt="programmimg language" className="main-001" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://sketch.com">
              <img src={MyImage018} alt="programmimg language" className="main-001" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
