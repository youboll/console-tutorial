class File {
    //Class only used to hold data
    constructor(name,data) {
        this.name = name;
        this.data = data;
    }
}
class Folder{
    constructor(name) {
        this.name = name
        this.files = []
    }
    addFile(file) {
        this.files.push(file)
    }
    removeFile(name) {
        this.files.filter((file_name) => file_name !== name)
    }
    // TODO Put some rich text in it?
    printContent() {
        let contentString = ''
        for (let x=0; x<this.files.length;x++) {
            if (this.files[x] instanceof File) {
                contentString += '<' + this.files[x].name +'> '
            } else {
                contentString += '<' + this.files[x].name +'> '
            }
        }
        return contentString
    }
}

// TODO Create a head control and a command parsed for 'cd/ls'
class FileSystem extends Folder {
    constructor() {
        super();
        this.head = [this]
    }
    // TODO Probably order the head to increase performance
    getCurrentFolder() {
        let currentFolder = this
        for (let x=0;x<this.head.length; x++) {
            for (let y=0; y<this.head[this.head.length-1].files.length; y++) {
                console.log(this.head[x].name, this.head[this.head.length-1].files[y].name)

            }
        }
        return currentFolder
    }
    moveHead(folderName) {
        for (let x=0;x<this.files.length; x++) {
            if (this.files[x].name === folderName) {
                if (!this.files[x] instanceof Folder) {
                    throw Error("File is not a folder")
                } else {
                    this.head.push(this.files[x])
                    return
                }
            }
        }
        throw Error("File not found")
    }
    locationParser(locationString) {
        let location = locationString.split(/\//)
        location.shift()
        return location
    }
    changeHeadLocation(location) {
        for (let x=0;x<location.length;x++) {
            this.moveHead(location[x])
        }
    }
    //The file system if like a folder that can interact with browser's storage

}

let fileSystem = new FileSystem();
let file_a = new File('file_a', 'text')
let file_b = new File('file_b', 'text')
let file_c = new File('file_c', 'text')
let folder_a = new Folder('folder_a')
let folder_b = new Folder('folder_b')
folder_a.addFile(folder_b);
fileSystem.addFile(file_a);
fileSystem.addFile(file_b);
fileSystem.addFile(file_c);
fileSystem.addFile(folder_a);

console.log("MOVING HEAD TO FOLDER A")
fileSystem.moveHead('folder_a')

console.log("FILE SYSTEM BASE FOLDER", fileSystem.printContent())

console.log("FILE SYSTEM HEAD: ", fileSystem.getCurrentFolder().printContent())