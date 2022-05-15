//Nivell 1: Middleware

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
app.createFn(restar(datos[1].op1, datos[1].op2));
//app.createFn(multiplicar(datos[2].op1, datos[2].op2));
