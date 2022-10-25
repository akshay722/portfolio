import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { skills, tools } from "../configs";

export const Skills = forwardRef((props, ref) => {
  return (
    <div
      className="h-fit sm:p-20 px-6 py-10 relative z-[1] before:bg-[url('./work.jpg')] before:content-[''] before:absolute before:bg-cover before:top-0 before:bottom-0 before:right-0 before:left-0 before:z-[-1] before:opacity-30"
      ref={ref}
    >
      <span className="sm:text-6xl text-4xl flex flex-col items-center mb-4 uppercase font-light">
        Skills
        <div className="bg-sky-800 h-0.5 my-9 sm:w-[5%] w-[20%]" />
      </span>
      <div className="flex flex-wrap justify-center justify-evenly">
        <div className="w-[370px]">
          <div className="flex sm:justify-start	justify-center gap-2 my-4">
            <FontAwesomeIcon icon={faGears} className="h-9" />
            <h2 className="text-2xl font-bold">Development</h2>
          </div>
          <ul className="flex flex-wrap justify-center gap-4 mt-6 mb-4">
            {skills.map((item, index) => (
              <li className="sm:w-28 w-24 sm:h-28 h-24 rounded-[50%] border-2 border-sky flex justify-center items-center">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <div className="flex gap-2 my-4">
            <FontAwesomeIcon icon={faScrewdriverWrench} className="h-9" />
            <h2 className="text-2xl mb-4 font-bold">Tools</h2>
          </div>
          <ul className="grid gap-5 mb-4">
            {tools.map((item, index) => (
              <li className="before:content-['✓'] before:mr-2">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});
