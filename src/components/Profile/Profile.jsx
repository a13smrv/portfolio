import React, { useEffect } from "react";
import "./Profile.scss";

import avatar from "./img/avatar.jpg";
import HtmlIcon from "./img/html.svg";
import CssIcon from "./img/css.svg";
import SassIcon from "./img/sass.svg";
import JavaScriptIcon from "./img/javascript.svg";
import TypeScriptIcon from "./img/typescript.svg";
import ReactIcon from "./img/react.svg";
import ReduxIcon from "./img/redux.svg";
import NpmIcon from "./img/npm.svg";
import GitIcon from "./img/git.svg";
import { TechnologyIcon } from "../TechnologyIcon/TechnologyIcon";

const technologies = [
  { icon: HtmlIcon, name: "HTML", isHideName: false },
  { icon: CssIcon, name: "CSS", isHideName: false },
  { icon: SassIcon, name: "Sass", isHideName: true },
  { icon: JavaScriptIcon, name: "JavaScript", isHideName: false },
  { icon: TypeScriptIcon, name: "TypeScript", isHideName: false },
  { icon: ReactIcon, name: "React", isHideName: false },
  { icon: ReduxIcon, name: "Redux", isHideName: false },
  { icon: NpmIcon, name: "NPM", isHideName: true },
  { icon: GitIcon, name: "Git", isHideName: true },
];

export function Profile() {
  useEffect(() => {
    const maxMoveLimit = 1.5;

    window.addEventListener('mousemove', (event) => {
      const mousePosition = {
        clientX: event.clientX,
        clientY: event.clientY,
      };

      parallax(mousePosition, ".technologyIcon", maxMoveLimit);
    })
  }, []);

  const technologyIcons = technologies.map((technology) =>
    <TechnologyIcon
      icon={technology.icon}
      name={technology.name}
      isHideName={technology.isHideName}
      key={technology.name}
    />
  );

  return (
    <section className="profile">
      <div className="container">
        <div className="textDescription">
          <h2 className="title">👋 Hi, I'm Oleksandr</h2>
          <p className="introduction text">
            I'm a <strong>Frontend Developer</strong> with a passion for developing beautiful UIs and learning modern technologies.
            My mission is to connect businesses and users.
          </p>
          <div className="bottomInformationBlock">
            <p className="placeOfWork text">
              I'm looking for new opportunities<br />
              Previously I worked at <a className="link" href="#">Abz.Agency</a>
            </p>
            <p className="contacts text">
              Thun, Switzerland<br />
              <a className="link" href="mailto:a13smrv@gmail.com">a13smrv@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="visualDescription">
          <div className="profileCard">
            <div className="avatar">
              <img src={avatar} alt="avatar" />
              <div className="occupation">Frontend</div>
            </div>
            <div className="profileInformation">
              <h3 className="name">Oleksandr Smurov</h3>
              <p className="location">Thun, Switzerland</p>
            </div>
          </div>
          <div className="technologyIcons">
            { technologyIcons }
          </div>
        </div>
      </div>
    </section>
  )
}

const parallaxMoveLimit = [];
function parallax(mousePosition, selector, maxMoveLimit) {
  const client = {
    width: document.documentElement.clientWidth - 1,
    height: document.documentElement.clientHeight - 1,
  };

  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    if (!parallaxMoveLimit[index]) parallaxMoveLimit[index] = (Math.random() * maxMoveLimit);

    const moveStepSize = {
      axisX: client.width / parallaxMoveLimit[index] / 2,
      axisY: client.height / parallaxMoveLimit[index] / 2,
    };

    const elementOffset = {
      axisX: (mousePosition.clientX - (client.width / 2)) / moveStepSize.axisX,
      axisY: (mousePosition.clientY - (client.height / 2)) / moveStepSize.axisY,
    };

    element.style.transform = `translate(${elementOffset.axisX}px, ${elementOffset.axisY}px)`;
  });
}