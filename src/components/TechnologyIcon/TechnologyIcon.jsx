import React from "react";
import "./TechnologyIcon.scss";

export function TechnologyIcon({ icon, name, isHideName }) {
  return (
    <div className={`technologyIcon${ isHideName ? " hideName" : "" }`}>
      <div className="icon">
        <img src={icon} alt={name} />
      </div>
      <div className="name">{name}</div>
    </div>
  )
}