import React from "react";
import mapComands from "./mapComands";
import commands from "./comands";
//Now passing command line args
const UseOnEnter = () => {
  const [consoleOutput, updateConsoleOutput] = React.useState([]);
  const onEnter = (value, key) => {
    if (key === "Enter") {
      let command = value.split(' ')[0]
      let props = value.split(' ')[1]
      let newConsoleLine = ""
      try {
         newConsoleLine = commands[command](props)
      } catch (e) {
         newConsoleLine = "Unknown Command";
      }
      console.log(newConsoleLine)
      let commandsStorage = new mapComands();
      commandsStorage.setCommand(value)
      if (newConsoleLine === "cls") {
        return updateConsoleOutput([]);
      } else {
        return updateConsoleOutput(consoleOutput => 
          consoleOutput.concat(newConsoleLine)
        );
      }
      
    }
  };

  return [consoleOutput, onEnter];
};

export default UseOnEnter;
