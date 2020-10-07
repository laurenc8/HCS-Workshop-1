import React from "react";
import Project from "../../components/Project/Project"
import RSI from "../../assets/rsi.png"

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project
        title="RSI Final Paper"
        link="https://math.mit.edu/research/highschool/rsi/documents/2019Chen.pdf"
        source={RSI}
      ></Project>
    </div>
  );
}
