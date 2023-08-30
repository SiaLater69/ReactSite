import React from "react";
import "./Project.css";
import SNAKE from "../assets/SNAKE.png";
import WEATHER from "../assets/WEATHER.png";

const Project = () => {
  return (
    <div className="project">
      <div className="card-container">
        <div className="card">
        <p></p>
        <div className="loader"></div>
        </div>
        <div className="card">
        <div className="loader"></div>
        </div>
        <div className="card">
          <div className="loader"></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
