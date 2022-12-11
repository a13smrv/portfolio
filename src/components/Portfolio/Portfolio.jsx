import React from "react";
import "./Portfolio.scss";

import { Project } from "./../Project/Project";

import portfolioBG from "./img/portfolio.svg";
import counterBG from "./img/counter.svg";
import modalWindowBG from "./img/modalWindow.svg";

const stackOfTechnologies = {
  html: "HTML",
  css: "CSS",
  sass: "Sass",
  js: "JavaScript",
  ts: "TypeScript",
  react: "React",
  redux: "Redux",
}

const projectsInfo = [
  {
    name: "Modal Window",
    technologies: [
      stackOfTechnologies.react,
      stackOfTechnologies.js,
      stackOfTechnologies.sass,
      stackOfTechnologies.css,
      stackOfTechnologies.html,
    ],
    description: "Web application with logic for opening and closing a modal window ✨",
    background: modalWindowBG,
  },
  {
    name: "Counter",
    technologies: [
      stackOfTechnologies.react,
      stackOfTechnologies.js,
      stackOfTechnologies.sass,
      stackOfTechnologies.css,
      stackOfTechnologies.html,
    ],
    description: "Simple web application with couple actions: + and - 🧮",
    background: counterBG,
  },
  {
    name: "Portfolio",
    technologies: [
      stackOfTechnologies.react,
      stackOfTechnologies.js,
      stackOfTechnologies.sass,
      stackOfTechnologies.css,
      stackOfTechnologies.html,
    ],
    description: "Page with a list of my projects and information about me 🙂",
    background: portfolioBG,
  },
];

export function Portfolio() {
  const projects = projectsInfo.map((projectInfo) => 
    <Project 
      name={projectInfo.name}
      technologies={projectInfo.technologies}
      description={projectInfo.description}
      background={projectInfo.background}
      key={projectInfo.name}
    />
  );

  return (
    <section className="portfolio">
      <div className="container">
        { projects }
      </div>
    </section>
  )
}