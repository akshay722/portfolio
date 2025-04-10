import React from "react";
import {
  faReact,
  faNodeJs,
  faAws,
  faDocker,
  faPython,
  faJava,
  faAngular,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCogs,
  faCode,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import SkillCategory from "./SkillCategory";

const skills = [
  {
    category: "Frontend",
    icon: faCode,
    skills: [
      { name: "React.js", icon: faReact },
      { name: "Next.js", icon: faReact },
      { name: "Angular", icon: faAngular },
      { name: "JavaScript", icon: faCode },
      { name: "TypeScript", icon: faCode },
      { name: "HTML", icon: faCode },
      { name: "CSS", icon: faCode },
      { name: "TailwindCSS", icon: faCode },
    ],
  },
  {
    category: "Backend",
    icon: faDatabase,
    skills: [
      { name: "Node.js", icon: faNodeJs },
      { name: "Java", icon: faJava },
      { name: "Spring Boot", icon: faJava },
      { name: "Django", icon: faPython },
      { name: "FastAPI", icon: faPython },
      { name: "MongoDB", icon: faDatabase },
      { name: "SQL", icon: faDatabase },
      { name: "Python", icon: faPython },
    ],
  },
  {
    category: "Machine Learning",
    icon: faBrain,
    skills: [
      { name: "TensorFlow", icon: faBrain },
      { name: "LangChain", icon: faBrain },
      { name: "Scikit-Learn", icon: faBrain },
      { name: "Pandas", icon: faBrain },
      { name: "NumPy", icon: faBrain },
    ],
  },
  {
    category: "DevOps",
    icon: faCogs,
    skills: [
      { name: "Docker", icon: faDocker },
      { name: "Kubernetes", icon: faDocker },
      { name: "AWS", icon: faAws },
      { name: "CI/CD", icon: faCogs },
      { name: "Jenkins", icon: faCogs },
      { name: "Terraforms", icon: faCogs },
    ],
  },
  {
    category: "Others",
    icon: faCogs,
    skills: [
      { name: "Git", icon: faCogs },
      { name: "Agile Methodology", icon: faCogs },
      { name: "Problem Solving", icon: faCogs },
      { name: "Team Collaboration", icon: faCogs },
      { name: "Storybook", icon: faCogs },
      { name: "Postman", icon: faCogs },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <SkillCategory
            key={index}
            category={skillCategory.category}
            icon={skillCategory.icon}
            skills={skillCategory.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
