import React from "react";
import "./Header.scss";

import { GitHubSVG } from "./../../common/svg/GitHubSVG.jsx";
import { LinkedInSVG } from "./../../common/svg/LinkedInSVG.jsx";

const iconColor = "#af48ff";

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="personalBlock">
          <h1 className="pageTitle">Oleksandr Smurov</h1>
          <div className="currentStatus">Now available</div>
        </div>
        <div className="socialMediaBlock">
          <a href="#" className="socialMediaItem">
            <GitHubSVG color={iconColor} />
          </a>
          <a href="#" className="socialMediaItem">
            <LinkedInSVG color={iconColor} />
          </a>
        </div>
      </div>
    </header>
  )
}