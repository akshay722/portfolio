import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <span className="footer-email">Email: akshaypenmatsa@gmail.com</span>
        <div className="footer-socials">
          <a
            href="https://github.com/akshay722"
            aria-label="GitHub"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/akshay-varma-469077153"
            aria-label="LinkedIn"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
