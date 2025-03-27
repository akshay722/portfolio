import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faLaptopCode,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/experiences.css";

const experiences = [
  {
    title: "Full Stack Engineer",
    company: "Aigiliti",
    description:
      "Contributed to the development of an enterprise-level applications, designing a user-centric frontend that simplified the configuration and deployment of AWS infrastructure. Focused on delivering an intuitive interface while integrating backend systems for seamless experience",
    date: "August 2024 - December 2024",
    icon: faBriefcase,
    background: "rgb(55, 133, 196)",
    color: "#fff",
  },
  {
    title: "Software Engineer",
    company: "FourKites",
    description:
      "As part of the Core Tracking Redesign and Dynamic Yard teams, I contributed daily to modernizing legacy applications. Focused on solving complex problems to improve performance while prioritizing customer needs, enhancing user experience, and delivering seamless, efficient solutions",
    date: "November 2021 - August 2023",
    icon: faLaptopCode,
    background: "rgb(55, 133, 196)",
    color: "#fff",
  },
  {
    title: "Software Engineer",
    company: "iSpace",
    description:
      "In this role, I worked closely with senior developers to create robust services and implemented key features and web pages that enhanced user interaction.",
    date: "August 2019 - November 2021",
    icon: faGraduationCap,
    background: "rgb(55, 133, 196)",
    color: "#fff",
  },
];

const Experiences = () => {
  return (
    <div className="experiences-container">
      <h2 className="experiences-title text-center">My Experiences</h2>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: experience.background,
              color: experience.color,
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${experience.background}`,
            }}
            date={experience.date}
            iconStyle={{
              background: experience.background,
              color: experience.color,
            }}
            icon={<FontAwesomeIcon icon={experience.icon} />}
          >
            <h3 className="vertical-timeline-element-title">
              {experience.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {experience.company}
            </h4>
            <p>{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experiences;
