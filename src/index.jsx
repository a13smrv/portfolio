import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import { Header } from "./components/header/Header";

function App() {
  return(
    <div className="app">
      <div className="backgroundContainer">
        <Header />
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);