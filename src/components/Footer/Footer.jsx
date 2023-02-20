import React from "react";
import "./Footer.scss";

import { GitHubSVG } from "./../../common/svg/GitHubSVG.jsx";
import { LinkedInSVG } from "./../../common/svg/LinkedInSVG.jsx";

const iconColor = "#5d87a8";

export function Footer({ links }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="personalInfo">
          <div className="name text"><strong>Oleksandr Smurov</strong> Portfolio</div>
          {/* <div className="occupation text">Frontend Developer</div> */}
        </div>
        <div className="feedback text">Your feedback is welcome 👍</div>
        <div className="socialMedia">
          {/* <a className="text" href="mailto:a13smrv@gmail.com">a13smrv@gmail.com</a> */}
          <div className="socialMediaBlock">
            <a href={links.gitHub} target="_blank" className="socialMediaItem">
              <GitHubSVG color={iconColor} />
            </a>
            <a href={links.linkedIn} target="_blank" className="socialMediaItem">
              <LinkedInSVG color={iconColor} />
            </a>
        </div>
        </div>
      </div>
    </footer>
  )
}