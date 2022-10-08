import React from "react";
import { Link, withRouter } from "react-router-dom";

import Header from "../Header/Header";
import aboutVector from "./../../assets/about_vector.png";
import "./About.css";
import aboutAnime from "./../../assets/himansh.jpg";

const About = () => {
  return (
    <div className="section-container">
      <Header heading="About Me." />

      <div className="about-main">
        <div className="about-main-left">
          {/* Sub section 1 */}
          <p className="about-details">
            Hi, I am Himansh Soni, living in Udaipur, India. I am Computer
            Science Engineer. Passionate about web development and software
            engineering. Love to learn new languages, frameworks, and
            technologies.Check out{" "}
            <Link to="/projects" className="about-link-element">
              My Projects.
            </Link>
          </p>
        </div>

        <div className="about-main-right">
          <img src={aboutAnime} alt="animation" className="about-anime" />
        </div>
      </div>

      {/* Vector Frame! */}
      <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div>
    </div>
  );
};

export default About;
