//Nivell 1: Middleware

/* · Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els 
paràmetres en un JSON
· Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions)
· Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands 
incials en cadascuna de les operacions. Invoca les execucions de la suma, la resta i la multiplicació, 
de manera que es vagin mostrant per la consola les modificacions que es van fent als valors abans del 
resultat final */

import fs from 'fs';

const sumRestMult = (operator1, operator2, operation) => {
    if (operation === '+' && typeof(operator1) === 'number' && typeof(operator2) === 'number') {
        console.log(typeof(operator1));
        return operator1 + operator2;
    } else if ((operation === '-') && typeof(operator1) === 'number' && typeof(operator2) === 'number') {
        return operator1 - operator2;
    } else if (operation === '*' && typeof(operator1) === 'number' && typeof(operator2) === 'number') {
        return operator1 * operator2;
    } else {
        console.log("Error!");
    }
}

console.log(sumRestMult(15,2,'*'))

