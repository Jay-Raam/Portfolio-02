import React from "react";
import myImage from '../image/gal_006.png'; 
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home} id="#home">
      <div className={styles.home_container}>
        <div className={styles.one}>
          <div className={styles.text}>
            <h1 className={styles.text1}>Welcome the World</h1>
            <p className={styles.text2}>Explore the Solution...</p>
           <a href="https://jay" className={styles.alt}><button type="button" className={styles.btn}>Read More</button></a>
          </div>
          <div className={styles.image}>
            <img src={myImage} alt="the men" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
