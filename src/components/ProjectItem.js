import React from "react";
import { useInView } from "react-intersection-observer";
import "../styles/projects.css";
import Tilt from "react-parallax-tilt";

const ProjectItem = ({ project }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Tilt
      className={`background-stripes parallax-effect ${
        inView ? "visible" : ""
      }`}
      perspective={500}
      tiltReverse={true}
    >
      <div className="inner-element">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
        <a href={project.link} className="project-title">
          {project.title}
        </a>
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
      {/* </div> */}
    </Tilt>
  );
};

export default ProjectItem;
