// components/SkillCategory.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";
import "../styles/skills.css";

const SkillCategory = ({ category, icon, skills }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`skill-category ${inView ? "visible" : ""}`}>
      <h3 className="skill-category-title">
        <FontAwesomeIcon icon={icon} className="category-icon" />
        {category}
      </h3>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;
