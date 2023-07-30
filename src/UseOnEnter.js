import React from "react";
import mapComands from "./mapComands";
import {commandParser, convertCommmandToString} from './utils.js'

//Now passing command line args
const UseOnEnter = () => {
  const [consoleOutput, updateConsoleOutput] = React.useState([]);
  const onEnter = (value, key) => {
    if (key === "Enter") {
      let command = value.split(' ')[0]
      let props = value.split(' ')[1]
      let newConsoleLine = commandParser(command, props)
      let commandString = convertCommmandToString(command, props)

      let commandsStorage = new mapComands();
      commandsStorage.setCommand(commandString);
      let cleanScreen = commandsStorage.checkIfScreenNeedsToBeCleaned(commandString);

      if (cleanScreen) {
        return updateConsoleOutput(consoleOutput =>
          []
        );
      }

      return updateConsoleOutput(consoleOutput =>
          consoleOutput.concat(newConsoleLine)
        );
      
    }
  };

  return [consoleOutput, onEnter];
};

export default UseOnEnter;
