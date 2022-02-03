export default class {
    getCommand () {
        return(JSON.parse(localStorage.getItem('commands')))
    }
    setCommand (item) {
        if (localStorage.getItem('commands') === null) {
            localStorage.setItem('commands',JSON.stringify({commands:[item]}))
        } else {
            let obj = this.getCommand();
            console.log(this.getCommand())
            obj.commands.push(item);
            localStorage.setItem('commands',JSON.stringify(obj))
        }
    }
}