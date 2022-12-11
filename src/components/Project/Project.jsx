import React from "react";
import "./Project.scss";

export function Project({name, technologies, description, background}) {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: "top 55% left 50%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto 125px",
    }}>
      <div className={`project ${name.replace(" ", "")}`}>
        <div className="top">
          <h3 className="name">{ name }</h3>
          <ul className="technologies">
            {
              technologies.map((technology) =>
                <li className={`technology ${technology}`} key={technology}>
                    { technology }
                </li>
              )
            }
          </ul>
        </div>
        <div className="bottom">
          <p className="description">{ description }</p>
        </div>
      </div>
    </div>
  )
}