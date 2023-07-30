import commands from './commands.js'

export function commandParser(command, props) {
    let newConsoleLine = '';
    try {
        newConsoleLine = commands[command](props)
    } catch (e) {
        newConsoleLine = commands['unknown']();
    }
    return newConsoleLine
}

export function convertCommmandToString(command, props) {
    let baseString = command
    if (props) {
        for (let x=0;x<props.length;x++) {
            baseString += ' ' + props[x]
        }
    }

    return baseString
}
