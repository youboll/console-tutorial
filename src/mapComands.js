export default class {
    constructor() {
        if (!this.getCommandList()) {
            this.setUpCommands()
        }
    }

    getCommandList() {
        try {
            return (JSON.parse(localStorage.getItem('commands')))
        } catch(e) {
            return false
        }

    }

    setCommand(item) {
        if (localStorage.getItem('commands') === null) {

            localStorage.setItem('commands', JSON.stringify({commands: [item]}))
        } else {
            let obj = this.getCommandList();
            console.log(this.getCommandList())
            obj.commands.push(item);
            localStorage.setItem('commands', JSON.stringify(obj))
        }
    }

    deleteAllCommands() {
        localStorage.setItem('commands', JSON.stringify({'commands': []}))
    }

    setUpCommands() {
        localStorage.setItem('commands', JSON.stringify({'commands': []}))
    }

    checkIfScreenNeedsToBeCleaned(command) {
        console.log("COMMAND: ", command)
        if (command && command.toLowerCase() === "cls") {
            this.deleteAllCommands()
            return true;
        }
        return false;
    }
}