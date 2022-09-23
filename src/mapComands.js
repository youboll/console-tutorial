export default class {
    constructor () {
        if (this.setCommand()) {
            this.setUpCommands()
        }
    }
    getCommandList () {
        return(JSON.parse(localStorage.getItem('commands')))
    }
    setCommand (item) {
        if (localStorage.getItem('commands') === null) {
            localStorage.setItem('commands',JSON.stringify({commands:[item]}))
        } else {
            let obj = this.getCommandList();
            console.log(this.getCommandList())
            obj.commands.push(item);
            localStorage.setItem('commands',JSON.stringify(obj))
        }
    }
    deleteAllCommands() {
        localStorage.setItem('commands',JSON.stringify({'commands':[]}))
    }
    setUpCommands() {
        localStorage.setItem('commands',JSON.stringify({'commands':[]}))
    }
}