import React from "react";
import "./Profile.scss";

import avatar from "./img/avatar.jpg";

export function Profile() {
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
              <p className="name">Oleksandr Smurov</p>
              <p className="location">Thun, Switzerland</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}