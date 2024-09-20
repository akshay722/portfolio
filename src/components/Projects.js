import React from "react";
import "../styles/projects.css";

import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "Special Education AI Assistant",
    description:
      "An AI-powered assistant that centralizes SPED resources and help parents interpret their child's IEPs.",
    image: "/images/sped.png",
    link: "https://github.com/akshay722/SPED-AI-Assistant",
  },
  {
    title: "Tech Insights",
    description:
      "A multi agent llm app that finds YouTube interviews and blog posts for chosen technologies and business areas.",
    image: "/images/techInsights.png",
    link: "https://github.com/akshay722/TechInsights",
  },
  {
    title: "DFS BFS Visualizer",
    description:
      "An interactive visualizer for Breadth-First Search and Depth-First Search algorithms using Python.",
    image: "/images/dfs-bfs.png",
    link: "https://github.com/akshay722/DFS-BFS-Visualizer",
  },
  {
    title: "Deal Finder Chrome Extension",
    description:
      "A Chrome extension that automatically finds discount codes for products on various e-commerce sites, enhancing user savings and promoting sustainable shopping.",
    image: "images/deal-finder.png",
    link: "https://github.com/akshay722/Deal-Finder",
  },
  {
    title: "Car Dealership Chatbot",
    description:
      "A chatbot that interacts with users and provides information regarding eco freindly cars in dealership",
    image: "images/dbchatbot.png",
    link: "https://github.com/akshay722/Eco-Friendly-Car-Management-System-With-Chatbot",
  },
  {
    title: "E-Commerce Website",
    description: "A website for shopping indian cloths",
    image: "images/ecommerce.png",
    link: "https://github.com/akshay722/E-Commerce-App",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
