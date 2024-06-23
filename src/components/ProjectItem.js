import React from "react";
import { useInView } from "react-intersection-observer";
import "../styles/projects.css";

const ProjectItem = ({ project }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`project-item ${inView ? "visible" : ""}`}>
      <img src={project.image} alt={project.title} className="project-image" />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <a
        href={project.link}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectItem;
