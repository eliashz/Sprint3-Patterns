const Matematicas = require("./matematicas");

arrayOperaciones = [
    new Matematicas(1, 2, '+'),
    new Matematicas(2, 3, '-'),
    new Matematicas(1, 1, '+'),
    new Matematicas(0, 0, '*'),
    new Matematicas(1, 2, '/')
];

arrayOperaciones[1].operacion = '*'
arrayOperaciones[3].op1 = 3;
arrayOperaciones[3].op2 = 6;

for (let index = 0; index < arrayOperaciones.length; index++) {
    console.log("Resultado", arrayOperaciones[index].calcular()); 
} 

console.table(arrayOperaciones);