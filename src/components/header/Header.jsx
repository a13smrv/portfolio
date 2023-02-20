import React from "react";
import "./Header.scss";

import { screenSizes } from "./../App/App";

import { GitHubSVG } from "./../../common/svg/GitHubSVG.jsx";
import { LinkedInSVG } from "./../../common/svg/LinkedInSVG.jsx";

const iconColor = "#af48ff";

export function Header({ clientWidth, links }) {
  return (
    <header className="header">
      <div className="container">
        <div className="personalBlock">
          <h1 className="pageTitle">Oleksandr Smurov</h1>
          {(clientWidth > screenSizes.tablet) ? <div className="currentStatus">Now available</div> : null}
        </div>
        <div className="socialMediaBlock">
          <a href={links.gitHub} target="_blank" className="socialMediaItem">
            <GitHubSVG color={iconColor} />
          </a>
          <a href={links.linkedIn} target="_blank" className="socialMediaItem">
            <LinkedInSVG color={iconColor} />
          </a>
        </div>
      </div>
    </header>
  )
}