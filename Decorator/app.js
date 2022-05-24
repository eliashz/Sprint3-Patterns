 //Nivell 2: Decorator
const Articulo = require('./articulos');
const Decorator = require('./decorator');


//Crear artículos llamando a la clase Articulos
const camiseta = new Articulo('camiseta', 20, 'USD');
const pantalon = new Articulo('pantalon', 30, 'GBP');
const chaqueta = new Articulo('chaqueta', 40, 'JPY');

const CamisetaDeco = new Decorator(camiseta);
const PantalonDeco = new Decorator(pantalon);
const ChaquetaDeco = new Decorator(chaqueta);

CamisetaDeco.conversion();
PantalonDeco.conversion();
ChaquetaDeco.conversion();