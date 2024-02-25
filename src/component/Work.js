import React from "react";
import "./Work.css";
import myImage from "../image/gal_001.webp";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="work-container">
        <div className="cards">
          <section id="card1" className="card">
            <img src={myImage} alt="the men" className="main-008" />
            <div className="card__content">
              <p className="card__title">Weather App</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae justo vel lorem tincidunt ultrices at non nunc.
              </p>
              <button className="btn">Read more</button>
            </div>
          </section>
          <section id="card1" className="card">
            <img src={myImage} alt="the men" className="main-008" />
            <div className="card__content">
              <p className="card__title">Book App</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae justo vel lorem tincidunt ultrices at non nunc.
              </p>
              <button className="btn">Read more</button>
            </div>
          </section>
          <section id="card1" className="card">
            <img src={myImage} alt="the men" className="main-008" />
            <div className="card__content">
              <p className="card__title">Image Downloader</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae justo vel lorem tincidunt ultrices at non nunc.
              </p>
              <button className="btn">Read more</button>
            </div>
          </section>
          <section id="card1" className="card">
            <img src={myImage} alt="the men" className="main-008" />
            <div className="card__content">
              <p className="card__title">News App</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae justo vel lorem tincidunt ultrices at non nunc.
              </p>
              <button className="btn">Read more</button>
            </div>
          </section>
          <section id="card1" className="card">
            <img src={myImage} alt="the men" className="main-008" />
            <div className="card__content">
              <p className="card__title">Food App</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae justo vel lorem tincidunt ultrices at non nunc.
              </p>
              <button className="btn">Read more</button>
            </div>
          </section>
          <section id="card1" className="card">
            <img src={myImage} alt="the men" className="main-008" />
            <div className="card__content">
              <p className="card__title">Movies Details</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae justo vel lorem tincidunt ultrices at non nunc.
              </p>
              <button className="btn">Read more</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
