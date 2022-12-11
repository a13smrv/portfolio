import React from "react";
import "./App.scss";

import { Header } from "./../Header/Header";
import { Profile } from "./../Profile/Profile";
import { Portfolio } from "./../Portfolio/Portfolio";
import { Footer } from "../Footer/Footer";

export const screenSizes = {
  laptop: 1200,
  tablet: 768,
  mobileM: 480,
  mobileS: 320,
};

export function App() {
  return(
    <div className="app">
      <div className="backgroundContainer">
        <Header />
        <Profile />
        <Portfolio />
        <Footer />
      </div>
    </div>
  )
}