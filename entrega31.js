const {
    readdir,
    readFile,
    writeFile
} = require("fs");
const {
    join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
    str
    .split("")
    .reverse()
    .join("");

// Read and reverse contents of text files in a directory
const leerDirectorio = (inbox) => {
    return new Promise((resolve, reject) => {
        readdir(inbox, (error, files) => {
            if (error) {
                reject("Error: Folder inaccessible");
            } else {
                resolve(files)
            }
        });
    });
}

const leerArchivo = (files, inbox) => {
    return new Promise ((resolve, reject) => {
        
    }
}    

      


leerDirectorio (inbox)
    .then(files => console.log(files))
    .catch(err => console.log(err))