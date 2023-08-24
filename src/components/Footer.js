import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <div className="h-1/6 bg-neutral-800 flex flex-wrap gap-16 justify-center items-center p-4">
      <div className="flex flex-col gap-4 text-lg font-bold px-4">
        <span>Mobile: +12146035396</span>
        <span>Email: akshaypenmatsa@gmail.com</span>
      </div>
      <div className="flex items-center">
        <span className="mr-4 text-lg font-bold">Socials: </span>
        <a href="https://www.linkedin.com/in/akshay-varma-469077153">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-9 h-9 mr-4 hover:text-sky-600 transition-all"
          />
        </a>
        <a href="https://twitter.com/Akshayv33358762">
          <FontAwesomeIcon
            icon={faTwitter}
            className="w-9 h-9 mr-4 hover:text-sky-600 transition-all"
          />
        </a>
        <a href="https://github.com/akshay722">
          <FontAwesomeIcon
            icon={faGithub}
            className="w-9 h-9 mr-4 hover:text-sky-600 transition-all"
          />
        </a>
      </div>
    </div>
  );
};
