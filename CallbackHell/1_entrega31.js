// Nivell 1: Callback Hell

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
  
const escribirArchivo = (data, file) => {
    writeFile(join(outbox, file), reverseText(data), error => {
        if (error) return console.log("Error: File could not be saved!");
        console.log(`${file} was successfully saved in the outbox!`);
    });  
}

const leerArchivo = (file) => {
    readFile(join(inbox, file), "utf8", (error, data) => {
        if (error) {
            console.log("Error: File error");
        } else {
            escribirArchivo(data, file);
        }
    });
}
  
const leerDirectorio = () =>{
    readdir(inbox, (error, files) => {
    if (error) {
        console.log("Error: Folder inaccessible");
    } else {
        files.forEach(file => {
            leerArchivo(file);
        });
    }   
    });
}

leerDirectorio();
