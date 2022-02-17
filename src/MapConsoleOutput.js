import React from "react";
import Prompt from "./Prompt";

const MapConsoleOutput = ({ consoleOutput }) => {
  const scrollRef = React.useRef();

  React.useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });
  if (consoleOutput === "") {
    return (
      <div className="console-output">

      </div>
    );
  } else {
    console.log(consoleOutput)
    return (
      <div className="console-output" ref={scrollRef}>
        {consoleOutput.map((Item, index) => (
          <div key={index}>
            <Prompt />
            <span>{Item}</span>
          </div>
        ))}
      </div>
    );
  }
  
};

export default MapConsoleOutput;
