import React from "react";
import "./TechnologyIcon.scss";

import { screenSizes } from "../App/App";

export function TechnologyIcon({ icon, name, isHideName, clientWidth }) {
  return (
    <div className={`technologyIcon${ (isHideName && (clientWidth > screenSizes.laptop)) ? " hideName" : "" }`}>
      <div className="icon">
        <img src={icon} alt={name} />
      </div>
      <div className="name">{name}</div>
    </div>
  )
}