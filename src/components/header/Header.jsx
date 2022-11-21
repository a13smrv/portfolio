import React from "react";
import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="personalBlock">
          <h1 className="pageTitle">Oleksandr Smurov</h1>
          <div className="currentStatus">Now available</div>
        </div>
        <div className="socialMediaBlock">
          <div className="socialMediaItem">
            GH
          </div>
          <div className="socialMediaItem">
            LIN
          </div>
        </div>
      </div>
    </header>
  )
}