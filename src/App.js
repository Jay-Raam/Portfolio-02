import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import navbarStyles from "./component/Navbar.module.css";
import "./App.module.css";
import Home from "./component/Home";
import About from "./component/About";
import Skill from "./component/Skill";
import Work from "./component/Work";
import Contact from "./component/Contact";

function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className={`${navbarStyles.navbar}`}>
            <a href="/" className={`${navbarStyles.logo}`}>
              Jayasriraam
            </a>
            <ul
              className={`${navbarStyles.navMenu} ${
                isActive ? navbarStyles.active : ""
              }`}
            >
              <li onClick={removeActive}>
                <Link to="/about" className={`${navbarStyles.navLink}`}>
                  About
                </Link>
              </li>
              <li onClick={removeActive}>
                <Link to="/work" className={`${navbarStyles.navLink}`}>
                  Works
                </Link>
              </li>
              <li onClick={removeActive}>
                <Link to="/skill" className={`${navbarStyles.navLink}`}>
                  Skill
                </Link>
              </li>
              <li onClick={removeActive}>
                <Link to="/contact" className={`${navbarStyles.navLink}`}>
                  Contact
                </Link>
              </li>
            </ul>
            <div
              className={`${navbarStyles.hamburger} ${
                isActive ? navbarStyles.active : ""
              }`}
              onClick={toggleActiveClass}
            >
              <span className={`${navbarStyles.bar}`}></span>
              <span className={`${navbarStyles.bar}`}></span>
              <span className={`${navbarStyles.bar}`}></span>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
