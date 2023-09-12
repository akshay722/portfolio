import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import { About } from "./components/About";
import { Experiences } from "./components/Experiences";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import wavingHand from "./waving_hand.gif";

import "./App.css";

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
        className="h-[100vh] flex flex-col items-center justify-center text-center px-9"
        id="page-wrap"
      >
        <div className="bg-[url('./sky.jpeg')] bg-cover absolute opacity-75 z-0 h-full w-full" />
        <span className="text-6xl mb-8 font-bold flex items-center z-10">
          Hi, Akshay here{" "}
          <img className="h-12 w-12 ml-4" src={wavingHand} alt="Waving hand" />
        </span>
        <span className="text-xl font-semibold z-10">Software Engineer</span>
        <FontAwesomeIcon
          icon={faAnglesDown}
          className="absolute bottom-10 animate-bounce w-12 h-12 cursor-pointer z-10"
          onClick={handleClick}
        />
      </div>
      <About ref={aboutRef} />
      <Experiences ref={experiencesRef} />
      <div className="h-fit">
        <Skills ref={skillsRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
