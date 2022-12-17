import React from "react";
import "./Avatar.scss";

export function Avatar({avatar, occupation}) {
  return (
    <div className="avatar">
      <img src={avatar} alt="avatar" />
      {occupation ? <div className="occupation">{occupation}</div> : null}
    </div>
  )
}