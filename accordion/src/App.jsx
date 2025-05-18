import React from "react";
import Accordion from "./Accordion";
import { accordionData } from "./utils/content";

const App = () => {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default App;
