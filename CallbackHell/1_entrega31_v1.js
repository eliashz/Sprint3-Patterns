// Nivell 1: Callback Hell V1
 
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

const leerDirectorio = (inbox) => {
    return new Promise((resolve, reject) => {
        readdir(inbox, (error, files) => {
            if (error) {
                reject("Error: Folder inaccessible");
            } 
            resolve(files)    
        });
    });
};

const leerArchivo = (files, inbox) => {
    return new Promise ((resolve, reject) => {   
        files.forEach(file => {
            readFile(join(inbox, file), "utf8", (error, data) => {
                if (error) {
                    reject("Error: File error")
                }  
                resolve ([data, file]);  
            });   
        });           
    })
};    

const escribirArchivo = (data, file) => {
    return new Promise ((resolve, reject) => {
        writeFile(join(outbox, file), reverseText(data), error => {
            if (error) {
                reject("Error: File could not be saved!");
            }
            resolve(`${file} was successfully saved in the outbox!`);
          });
    });
};

const archivo = async (inbox) => {
    try {
        const files = await leerDirectorio(inbox);
        const dataFile = await leerArchivo(files, inbox);  
        return await escribirArchivo(dataFile[0], dataFile[1]);
        
    } catch (error) {
        throw error;
    }
}
      
archivo (inbox)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err))