import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import TypewriterText from "./TypewriterText";
import profilePic from "../assets/images/profilePic.jpg";
import { bio } from "../constants/bio";
import "../App.css";
import "../styles/styles.css";

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <>
      <section className="flex flex-col px-9 max-w-2xl" ref={ref}>
        <h3 className="text-xl mb-4 text-sky-300 text-content">{bio.intro}</h3>
        <h1 className="text-6xl mb-8 font-bold text-sky-200 text-content">
          {bio.name}
        </h1>
        <div className="text-content">
          <TypewriterText textArray={bio.roles} />
        </div>
        <p className="text-xl mt-8 text-content">{bio.description}</p>
        <div className="flex gap-4 pt-4 text-content">
          <a
            href="https://github.com/akshay722"
            aria-label="GitHub"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faGithub} className="w-7 h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/akshay-varma-469077153"
            aria-label="LinkedIn"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="w-7 h-7" />
          </a>
        </div>
      </section>
      <section className="profile-pic-container mt-8 max-w-sm">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="profile-pic-border"></div>
      </section>
    </>
  );
});

export default AboutMe;
