import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterText = ({ textArray }) => (
  <Typewriter
    options={{
      strings: textArray,
      autoStart: true,
      loop: true,
      deleteSpeed: 10,
      delay: 20,
      cursor: ".",
      wrapperClassName:
        "text-4xl font-semibold text-slate-400 slideLeftAnimation",
    }}
  />
);

export default TypewriterText;
