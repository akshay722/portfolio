import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { Experiences } from "./components/Experiences";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import ParticlesBackground from "./components/Particles";
import { bio } from "./constansts";

import wavingHand from "./waving_hand.gif";
import profilePic from "./akshay.jpg";

import "./App.css";
import "./styles/styles.css";

function App() {
  const aboutRef = useRef(null);
  const experiencesRef = useRef(null);
  const skillsRef = useRef(null);

  const handleClick = () => {
    experiencesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-banner-bg text-white/80 font-sans">
      <Navbar ref={aboutRef} expRef={experiencesRef} skillsRef={skillsRef} />
      <ParticlesBackground />
      <div className="h-[100vh] grid sm:grid-flow-col sm:w-9/12 m-auto items-center auto-cols-auto">
        <div className=" flex flex-col  justify-center px-9 " id="page-wrap">
          <span className="text-6xl mb-8 font-bold flex items-center z-10 slideRightAnimation">
            {bio.intro} {bio.name}
            <img
              className="h-12 w-12 ml-4"
              src={wavingHand}
              alt="Waving hand"
            />
          </span>
          <span className="slideLeftAnimation">
            <Typewriter
              options={{
                strings: bio.roles,
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
                delay: 20,
                cursor: ".",
                wrapperClassName:
                  "text-2xl font-semibold z-10 slideLeftAnimation",
              }}
            />
          </span>
          <span className="text-xl mt-8 text-left flex items-center z-10 slideBottomAnimation">
            {bio.description}
          </span>
          <div className="flex gap-2 pt-4 slideTopNavAnimation">
            <a href="https://github.com/akshay722">
              <FontAwesomeIcon
                icon={faGithub}
                className="w-7 h-7 mr-4 hover:text-sky-600 transition-all "
              />
            </a>
            <a href="https://www.linkedin.com/in/akshay-varma-469077153">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="w-7 h-7 mr-4 hover:text-sky-600 transition-all"
              />
            </a>
          </div>
        </div>
        <div>
          <img
            src={profilePic}
            alt="profile"
            className="w-2/3 max-w-xl relative z-10  min-w-[200px] m-auto rounded-[50%] rotateAnimation"
          />
        </div>
        <div className="absolute bottom-2 left-0 w-[100vw] text-center">
          <FontAwesomeIcon
            icon={faAnglesDown}
            className="animate-bounce w-12 h-12 cursor-pointer z-10"
            onClick={handleClick}
          />
        </div>
      </div>
      <Experiences ref={experiencesRef} />
      <div className="h-fit bg-gray-800 relative">
        <Skills ref={skillsRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
