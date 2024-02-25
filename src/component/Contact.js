import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {

  const d = new Date();
 
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.one}>
          <div className={styles.two}>
            <div className={styles.logo_text}>
              <div className={styles.text}>
                <h1 className={styles.name}>Jayasriraam</h1>
                <h4>Where Innovation Meets Today ♜</h4>
              </div>
            </div>
          </div>
          <div className={styles.menu}>
            <ul className={styles.five}>
              <li className={styles.six}>Web Development</li>
              <li className={styles.six}>UI & UX</li>
              <li className={styles.six}>Branding</li>
              <li className={styles.six}>Video Editing</li>
            </ul>
          </div>
          <div className={styles.three}>
            <div className={styles.contact1}>
              <h1>Get in Touch</h1>
              <div className={styles.link_text}>
                <a href="https://www.instagram.com/_ivanjay_/"  target="_blank" rel="noopener noreferrer">_ivanjay_</a>
                <a href="mailto:Jayasriraam.job@gmail.com"  target="_blank" rel="noopener noreferrer">
                  Jayasriraam.job@gmail.com
                </a>
                <a href="tel:+919790161669">+91 9790161669</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copy}>
          <p>{d.getFullYear()} © Copyright Received By Jayasriraam</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
