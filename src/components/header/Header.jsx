import React from "react";
import "./Header.scss";

import GitHubIcon from "./img/GitHub.svg";
import LinkedInIcon from "./img/LinkedIn.svg";

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
            <img src={GitHubIcon} alt="GitHub" />
          </a>
          <a href="#" className="socialMediaItem">
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </header>
  )
}