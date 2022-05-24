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

console.log("Suma", app.add(data[0]));
console.log("Resta", app.subtract(data[1]));
console.log("Multiplicación", app.multiply(data[0])); 
