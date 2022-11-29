import React from "react";
import "./App.scss";

import { Header } from "./../Header/Header";
import { Profile } from "./../Profile/Profile";

export function App() {
  return(
    <div className="app">
      <div className="backgroundContainer">
        <Header />
        <Profile />
      </div>
    </div>
  )
}