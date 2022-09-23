import React, { useState } from "react";
import Prompt from "./Prompt";
import UseOnEnter from "./UseOnEnter";
import MapConsoleOutput from "./MapConsoleOutput";
import mapComands from "./mapComands";
import inverseIndex from './indexOf'
const Console = (props) => {
  const inputText = React.useRef();
  const [consoleOutput, onEnter] = UseOnEnter();
  const commandsMap = new mapComands()
  let commandNumber = commandsMap.getCommandList().commands.length
  

  React.useEffect(() => {
    inputText.current.value = props.currentCommand || "";
    inputText.current.focus();
  });

  const Arrow = (value, key) => {
    let storage = new mapComands();
    let commands = storage.getCommandList().commands;

    if (key === "ArrowUp") {
      if (commands[(commandNumber-1)] !== undefined){
        inputText.current.value = commands[(commandNumber -1)];
        commandNumber--;
      }      
    } else if (key === "ArrowDown") {
      if (commands[(commandNumber+1)] !== undefined){
        inputText.current.value = commands[(commandNumber +1)];
        commandNumber++;
      }
      
    }
  };

  return (
    <section className="console">
      <MapConsoleOutput consoleOutput={consoleOutput} />
      <div className="input-prompt">
        <Prompt />
        <input
          type="text"
          ref={inputText}
          onKeyPress={({ target: { value }, key }) => onEnter(value, key)}
          onKeyDown={({ target: { value }, key }) => Arrow(value, key)}
        />
      </div>
    </section>
  );
};

export default Console;
