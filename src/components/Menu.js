import { slide as Menu } from "react-burger-menu";

export default (props) => {
  let { ref, expRef, skillsRef } = props;
  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    // Pass on our props
    <Menu {...props}>
      <ul className="sm:flex gap-6 ml-auto px-10 items-center hidden">
        <li className="cursor-pointer" onClick={() => handleClick(ref)}>
          About
        </li>
        <li className="cursor-pointer" onClick={() => handleClick(expRef)}>
          Experience
        </li>
        <li className="cursor-pointer" onClick={() => handleClick(skillsRef)}>
          Skills
        </li>
      </ul>
    </Menu>
  );
};
