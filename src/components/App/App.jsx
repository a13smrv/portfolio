import React, { useState, useEffect } from "react";
import "./App.scss";

import { Header } from "./../Header/Header";
import { Profile } from "./../Profile/Profile";
import { Portfolio } from "./../Portfolio/Portfolio";
import { Footer } from "../Footer/Footer";

export const screenSizes = {
  laptop: 1200,
  tablet: 900,
  mobileM: 550,
  mobileS: 410,
};

export const links = {
  gitHub: "https://github.com/a13smrv/",
  linkedIn: "https://www.linkedin.com/in/a13smrv/",
  abzAgency: "https://abz.agency/",
};

export function App() {
  const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth);

  useEffect(() => {
    // Updating the state of the component on the window resize
    window.addEventListener('resize', () => setClientWidth(document.documentElement.clientWidth));
  }, []);

  return(
    <div className="app">
      <div className="backgroundContainer">
        <Header clientWidth={clientWidth} links={links} />
        <Profile clientWidth={clientWidth} links={links} />
        <Portfolio />
        <Footer links={links} />
      </div>
    </div>
  )
}