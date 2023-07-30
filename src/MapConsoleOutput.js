import React from "react";
import Projects from './components/Projects'
import Prompt from "./Prompt";

const MapConsoleOutput = ({consoleOutput}) => {
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
    }
    else {
        return (
            <div className="console-output" ref={scrollRef}>
                {consoleOutput.map((console, index) => (
                    console['react_obj'] === 'projects'
                        ? (<Projects/>)
                        : (<div> <Prompt/> {console['react_obj']}</div>)
                  ))}

            </div>
        );
    }

};

export default MapConsoleOutput;
