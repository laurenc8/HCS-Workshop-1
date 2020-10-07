import React from "react";
import "./Education.css";

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

export default function EducationScreen() {
  const [activeTitle, setActiveTitle] = React.useState('BLANK');

  return (
    <div className="screen-background">
      <div className="education-background">
        <div className="timeline-background">
          <TimelineItem
            title="Harvard University"
            setActiveTitle={setActiveTitle}
          ></TimelineItem>
          <TimelineItem
            title="Dutch Fork High School"
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
