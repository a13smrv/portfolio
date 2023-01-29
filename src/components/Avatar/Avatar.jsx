import React from "react";
import "./Avatar.scss";

export function Avatar({avatar, type, occupation, status}) {
  return (
    <div className={`avatar${type ? ` ${type}`: ""}`}>
      <img src={avatar} alt="avatar" />
      {status ? <div className="currentStatus">{status}</div> : null}
      {(occupation && type) ? <div className="occupation">{occupation}</div> : null}
    </div>
  )
}