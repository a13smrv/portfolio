import React from "react";
import "./Portfolio.scss";

import { Project } from "./../Project/Project";

export function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  )
}