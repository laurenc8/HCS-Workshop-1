import React from "react";
import "./Experience.css";

function TimelineItem(props) {
  return (
    <div
      onClick={() => {
        props.setActiveTitle(props.title);
      }}
      className="timeline-item"
      >
        <h1>{props.title}</h1>
    </div>
  )
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = React.useState('BLANK');

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimelineItem
            title="Radcliffe Research Partner"
            setActiveTitle={setActiveTitle}
          ></TimelineItem>
          <TimelineItem
            title="Research Science Institute"
            setActiveTitle={setActiveTitle}
          ></TimelineItem>
          <TimelineItem
            title="Ross Mathematics Program"
            setActiveTitle={setActiveTitle}
          ></TimelineItem>
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
        </div>
      </div>
    </div>
  );
}
