import React from "react";
import "./Music.css";

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

export default function MusicScreen() {
  const [activeTitle, setActiveTitle] = React.useState('BLANK');

  return (
    <div className="screen-background">
      <div className="music-background">
        <div className="timeline-background">
          <TimelineItem
            title="Piano"
            setActiveTitle={setActiveTitle}
          ></TimelineItem>
          <TimelineItem
            title="Violin"
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
