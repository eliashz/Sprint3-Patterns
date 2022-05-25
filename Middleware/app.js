const Middleware = require("./middleware");
const Calculator = require("./calculator");
const data = require('./data.json');

const calculator = new Calculator();

const app = new Middleware(calculator);

app.use((req, next) => {
  req.a = req.a ** 2;
  req.b = req.b ** 2;
  console.log(`Middleware al cuadradrado: ${req.a} y ${req.b}`);
  next();
});

app.use((req, next) => {
  req.a= req.a ** 3;
  req.b= req.b ** 3;
  console.log(`Middleware cubo: ${req.a} y ${req.b}`);
  next();
});

app.use((req, next) => {
  req.a= req.a / 2;
  req.b= req.b / 2;

  console.log(`Middleware división: ${req.a} y ${req.b}`);
  next();
});

console.log("Suma sin Middleware", calculator.add(data[0]));
console.log("Resta sin Middleware", calculator.subtract(data[1]));
console.log("Multiplicación sin Middleware", calculator.multiply(data[2])); 

console.log("Suma con Middleware", app.add(data[0]));
console.log("Restacon con Middleware", app.subtract(data[1]));
console.log("Multiplicación con con Middleware", app.multiply(data[2])); 