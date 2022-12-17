import React from "react";
import "./Header.scss";

import { screenSizes } from "./../App/App";
import { Avatar } from "../Avatar/Avatar";

import avatar from "./../../common/img/avatar.jpg";
import { GitHubSVG } from "./../../common/svg/GitHubSVG.jsx";
import { LinkedInSVG } from "./../../common/svg/LinkedInSVG.jsx";

const iconColor = "#af48ff";

export function Header({ clientWidth }) {
  return (
    <header className="header">
      <div className="container">
        <div className="personalBlock">
          { clientWidth > screenSizes.tablet ? null: <Avatar avatar={avatar} /> }
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