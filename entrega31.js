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
            } 
            resolve(files)    
        });
    });
}

const leerArchivo = (files, inbox) => {
    return new Promise ((resolve, reject) => {
        files.forEach(file => {
            readFile(join(inbox, file), "utf8", (error, data) => {
                if (error) {
                    reject("Error: File error")
                }  
                resolve(file) 
            });
        })
    })
};    

      
leerDirectorio (inbox)
    .then(files => leerArchivo(files, inbox))
    .then(file => console.log(file))
    
    .catch(err => console.log(err))