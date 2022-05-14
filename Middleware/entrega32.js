//Nivell 1: Middleware

/* · Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els 
paràmetres en un JSON
· Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions)
· Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands 
incials en cadascuna de les operacions. Invoca les execucions de la suma, la resta i la multiplicació, 
de manera que es vagin mostrant per la consola les modificacions que es van fent als valors abans del 
resultat final */

/* const app = require("./middleware");
const datos = require('./data.json');

const sumar = (op1, op2) => op1 + op2;

const restar = (op1, op2) => op1 - op2;

const multiplicar = (op1, op2) => op1 * op2;

const sumaCuadrado = sumar(datos.op1, datos.op2);
const restaCubo = restar(datos.op1, datos.op2);
const multiplicacion = multiplicar(datos.op1, datos.op2) / 2;
console.log(sumaCuadrado); */


/* 
 class Maths { 
  add({a, b}) { 
    return a + b; 
  } 
  subtract({a, b}) { 
    return a - b; 
  } 
  multiply({a, b}) { 
    return a * b; 
  } 
}   */

const Middleware = require("./middleware");
const datos = require('./data.json');

const sumar = (op1, op2) => op1 + op2;
const restar = (op1, op2) => op1 - op2;
const multiplicar = (op1, op2) => op1 * op2;

const app = new Middleware();

app.use((req, next) => { 
  console.log(`El cuadrado de ${req} es ${req **2}`);
  next(); 
});

app.use(function (req, next) { 
  console.log(`El cubo de ${req} es ${req **3}`);
  next();
});

app.use((req, next) => { 
  console.log(`La división entre 2 de ${req} es ${req / 2}`);
  next();
});

//app.createFn(sumar(datos[0].op1, datos[0].op2));
//app.createFn(restar(datos[1].op1, datos[1].op2));
app.createFn(multiplicar(datos[2].op1, datos[2].op2));
