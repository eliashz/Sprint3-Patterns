 //Nivell 2: Decorator
const Articulo = require('./articulos');
const decorator = require('./decorator');

//Crear artículos llamando a la clase Articulos
const camiseta = new Articulo('camiseta', 20, 'USD');
const pantalon = new Articulo('pantalon', 30, 'GBP');
const chaqueta = new Articulo('chaqueta', 40, 'JPY');

//Llamas a la función que decora
decorator(camiseta);
decorator(pantalon);
decorator(chaqueta);