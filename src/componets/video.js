import React from "react";
import { Link } from "react-router-dom";
import "./VideoStyles.css";
import helloWorld from "../assets/HelloWorld.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={helloWorld} type="video/mp4" />
      </video>
      <div className="content">
        <h1 className="typed-out">Web Development!</h1>
        <h2 className="typed-outMobile">Web Dev</h2>
        <p className="typed-out">Creating Web Applications</p>
        <div>
          <Link to="/Projects" className="btn">
            Projects
          </Link>
          <Link to="/Contact" className="btn">
            Connect
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
