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
    title: "Software Engineer",
    company: "FourKites",
    description:
      "As part of the Core Tracking and the Dynamic Yard teams, I contributed daily to modernizing the legacy application using React and Typescript and solving complex problems to improve backend performance",
    date: "June 2022 - August 2023",
    icon: faLaptopCode,
    background: "rgb(33, 150, 243)",
    color: "#fff",
  },
  {
    title: "Software Engineer",
    company: "Relative Finance",
    description:
      "As a Software Engineer and Founding Member at Relative Finance, I played a crucial role in optimizing and scaling the application to enhance performance and handle increased user load.",
    date: "November 2021 - June 2022",
    icon: faBriefcase,
    background: "rgb(33, 150, 243)",
    color: "#fff",
  },
  {
    title: "Software Engineer",
    company: "iSpace",
    description:
      "In this role, I worked closely with senior developers to create robust backend services and implemented key functionalities that enhanced user interaction.",
    date: "September 2020 - October 2020",
    icon: faGraduationCap,
    background: "rgb(33, 150, 243)",
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
