import { forwardRef } from "react";

import { PERSONAL_INTRO, BRIEF_EXPERIENCE } from "../constansts";

import profilePic from "../akshay.jpg";

export const About = forwardRef((props, ref) => {
  return (
    <div className="sm:p-20 px-6 py-10 h-screen" ref={ref}>
      <span className="sm:text-6xl text-4xl flex flex-col items-center mb-8 uppercase font-light text-center">
        A little about me
        <div className="bg-sky-800 h-0.5 my-9 sm:w-1/5 w-1/3" />
      </span>
      <div className="flex gap-8 justify-between items-center flex-col-reverse lg:flex-row">
        <div>
          <div className="sm:text-xl sm:font-semibold mb-4">
            <div>{PERSONAL_INTRO}</div>
            <div className="mt-8">{BRIEF_EXPERIENCE}</div>
          </div>
        </div>
        <img
          src={profilePic}
          alt="profile"
          className="w-1/3 max-w-sm md:min-w-[auto] min-w-[200px] m-auto rounded-[50%]"
        />
      </div>
    </div>
  );
});
