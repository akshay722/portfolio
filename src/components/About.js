import profilePic from "../akshay.jpg";
import { forwardRef } from "react";

export const About = forwardRef((props, ref) => {
  return (
    <div className="sm:p-20 px-6 py-10 h-fit" ref={ref}>
      <span className="sm:text-6xl text-4xl flex flex-col items-center mb-8 uppercase font-light text-center">
        A little about me
        <div className="bg-sky-800 h-0.5 my-9 sm:w-1/5 w-1/3" />
      </span>
      <div className="flex gap-8 justify-between items-center flex-col-reverse lg:flex-row">
        <div>
          <div className="sm:text-xl sm:font-semibold mb-4">
            <div>
              Hey! My name is Akshay and I'm a web developer with a passion for
              front end development. And now I aspire to collaborate with peers
              and craft beautiful websites for users to enjoy.
            </div>
            <div className="mt-8">
              I have worked majorly on a large global coaching platform with
              over 10,000 experts, where I have learnt how to work in an agile
              environment with the best coding practices and a start-up where I
              wore many hats and worked on main features of the product using
              the latest frameworks and libraries.
            </div>
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
