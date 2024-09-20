import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import AboutMe from "./components/AboutMe";

import "./App.css";
import "./styles/styles.css";

const App = () => {
  const aboutRef = useRef(null);
  const experiencesRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={`bg-[#1F1F1F] text-white/80 font-sans main-container`}>
      <Navbar
        aboutRef={aboutRef}
        expRef={experiencesRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <main className="hero">
        <AboutMe ref={aboutRef} />
      </main>
      <div ref={experiencesRef}>
        <Experiences />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
};

export default App;
