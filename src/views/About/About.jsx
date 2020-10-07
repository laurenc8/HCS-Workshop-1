import React from "react";
import "./About.css";
import ProfPic from "../../assets/pfp.jpg";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={ProfPic} className="intro-picture" />
        </div>
        <div className="intro-item">
          My name is Lauren Chen, and I'm from Irmo, South Carolina.
        </div>
      </div>
    </div>
  );
}
