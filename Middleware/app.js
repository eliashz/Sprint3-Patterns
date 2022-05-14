import express from 'express';
import fs from 'fs';

const app = express();


const file = './data.json';



//app.listen(3000, () => console.log('Listening on port 3000.'));

const saveData = (data) => {
    fs.writeFileSync(file, data);
}

const sumRestMult = (operator1, operator2, operation) => {
    if (operation === '+' && typeof(operator1) === 'number' && typeof(operator2) === 'number') {
    } else if ((operation === '-') && typeof(operator1) === 'number' && typeof(operator2) === 'number') {
        saveData(`{operator1 : ${operator1}`);
    } else if (operation === '*' && typeof(operator1) === 'number' && typeof(operator2) === 'number') {
        return operator1 * operator2;
    } else {
        console.log("Error!");
    }
}


sumRestMult(8, 10, '+');
sumRestMult(19, 4, '-');
sumRestMult(2, 4, '*');
