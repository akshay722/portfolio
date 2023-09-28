import { useState, useEffect, forwardRef } from "react";

import Pdf from "../resumeAkshayVarma.pdf";

import "../styles/styles.css";

export const Navbar = forwardRef((props, ref) => {
  const [show, setShow] = useState(true);

  let { expRef, skillsRef } = props;

  const controlNavbar = () => {
    if (window.scrollY > 100 && window.innerWidth > 640) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`bg-transparent text-white/80 h-20 sm:flex w-full hidden items-center justify-center fixed transition-all  z-10 ${
        !show ? "-translate-y-20" : ""
      }`}
    >
      <ul className="sm:flex gap-6 items-center slideTopNavAnimation hidden px-28">
        <li className="cursor-pointer" onClick={() => handleClick(expRef)}>
          Experience
        </li>
        <li className="cursor-pointer" onClick={() => handleClick(skillsRef)}>
          Skills
        </li>
        <li
          className="border-2 border-sky-400 rounded-lg px-4 py-2 hover:bg-sky-900 transition-all cursor-pointer"
          onClick={() => window.open(Pdf)}
        >
          Resume
        </li>
      </ul>
      {/* <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"Navbar"}
        customBurgerIcon={<FontAwesomeIcon icon={faBars} width={24} />}
        customCrossIcon={<FontAwesomeIcon icon={faXmark} width={24} />}
        bodyClassName={"bg-white"}
        burgerButtonClassName={"hidden"}
        {...props}
        right
      /> */}
    </div>
  );
});
