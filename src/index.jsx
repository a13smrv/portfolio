import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import { Header } from "./components/header/Header";

function App() {
  return(
    <div className="app">
      <Header />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);