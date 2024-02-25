import React from "react";
import myImage from "../image/gal_001.webp";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.About}>
      <div className={styles.container}>
        <div className={styles.one}>
          <div className={styles.text}>
            <h1 className={styles.text1}>About Us</h1>
            <p className={styles.text2}>
              I've been captivated by the intricacies and possibilities within
              Front-end deveplopment. From the elegant lines of code to the
              captivating brushstrokes of design, every aspect of this
              discipline has intrigued and inspired me. My journey began with a
              spark of curiosity and has since evolved into an insatiable quest
              for knowledge and mastery.
              <br />
              <br />
              I aspire to push the boundaries of innovation, leverage emerging
              technologies, and create experiences that resonate with audiences
              on a profound level.
              <br />
              <br />
              am committed to realizing this vision and making a lasting impact
              in the world of Front-end deveplopment. 🚀🎨
            </p>
            <a href="https://drive.google.com/" className={styles.alt}  target="_blank" rel="noopener noreferrer">
              <button type="button" className={styles.btn}>
                Resume
              </button>
            </a>
          </div>
          <div className={styles.image}>
            <img src={myImage} alt="the men" className="image-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
