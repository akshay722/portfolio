import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { About } from "./components/About";
import { Experiences } from "./components/Experiences";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  const aboutRef = useRef(null);
  const experiencesRef = useRef(null);
  const skillsRef = useRef(null);

  const handleClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-slate-800 text-white/80 font-mono">
      <Navbar ref={aboutRef} expRef={experiencesRef} skillsRef={skillsRef} />
      <div
        className="h-[100vh] bg-[url('./sky.jpg')] bg-cover flex flex-col items-center justify-center text-center"
        id="page-wrap"
      >
        <span className="text-6xl mb-8 font-bold">Hi, I'm Akshay</span>
        <span className="text-xl font-semibold">Frontend Developer</span>
        <FontAwesomeIcon
          icon={faAnglesDown}
          className="absolute bottom-10 animate-bounce w-12 h-12 cursor-pointer"
          onClick={handleClick}
        />
      </div>
      <About ref={aboutRef} />
      <Experiences ref={experiencesRef} />
      <Skills ref={skillsRef} />
      <Footer />
    </div>
  );
}

export default App;
