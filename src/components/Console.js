import React, { useState } from "react";
import Prompt from "../Prompt";
import UseOnEnter from "../UseOnEnter";
import MapConsoleOutput from "../MapConsoleOutput";
import mapComands from "../mapComands";

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
      if (commands[(commandNumber-1)]){
        inputText.current.value = commands[(commandNumber -1)];
        commandNumber--;
      }      
    } else if (key === "ArrowDown") {
      if (commands[(commandNumber+1)]){
        inputText.current.value = commands[(commandNumber +1)];
        commandNumber++;
      }
    } else if (value == ""){
      commandNumber = commandsMap.getCommandList().commands.length
    }
  };

  return (
    <section className="console">
      <MapConsoleOutput consoleOutput={consoleOutput} class={"console-output"} />
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
