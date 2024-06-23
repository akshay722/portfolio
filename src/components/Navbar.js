import { useState, useEffect, forwardRef } from "react";
import Pdf from "../assets/docs/resumeAkshayVarma.pdf";
import "../styles/navbar.css";

const Navbar = forwardRef(
  ({ aboutRef, expRef, skillsRef, projectsRef, contactRef }, ref) => {
    const [isVisible, setIsVisible] = useState(true);
    const [initialLoad, setInitialLoad] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbarVisibility = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    useEffect(() => {
      window.addEventListener("scroll", controlNavbarVisibility);
      return () => {
        window.removeEventListener("scroll", controlNavbarVisibility);
      };
    }, [lastScrollY]);

    useEffect(() => {
      setTimeout(() => setInitialLoad(false), 1000); // Adjust the timeout as needed
    }, []);

    const handleNavigationClick = (ref) => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleResumeClick = () => {
      window.open(Pdf);
    };

    return (
      <nav
        className={`navbar ${isVisible ? "navbar-visible" : "navbar-hidden"}`}
      >
        <ul className={`navbar-list ${initialLoad ? "initial-load" : ""}`}>
          <li
            className="navbar-item"
            onClick={() => handleNavigationClick(aboutRef)}
          >
            About
          </li>
          <li
            className="navbar-item"
            onClick={() => handleNavigationClick(expRef)}
          >
            Experience
          </li>
          <li
            className="navbar-item"
            onClick={() => handleNavigationClick(projectsRef)}
          >
            Projects
          </li>
          <li
            className="navbar-item"
            onClick={() => handleNavigationClick(skillsRef)}
          >
            Skills
          </li>
          <li
            className="navbar-item"
            onClick={() => handleNavigationClick(contactRef)}
          >
            Contact
          </li>
          <li className="navbar-resume" onClick={handleResumeClick}>
            Resume
          </li>
        </ul>
      </nav>
    );
  }
);

export default Navbar;
