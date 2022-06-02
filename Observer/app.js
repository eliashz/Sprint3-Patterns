//Oberservador (subject) -> usuario
//Observable -> Temas
//Crear clase Usuario ✔
//TODO crear objetos Usuario
//TODO App crear diferentes temas
//TODO suscribir usuarios a temas
//TODO Usuario -> mensaje -> tema -> enviar alerta por consola desde el tema y 
//     Mostrar por consola cada usuario que esté suscrito al tema (recibir mensaje)

//TODO crear un tema con un usuario y otro tema con dos
//TODO mostrar recepcion de los mensajes por los usuarios

const { Tema, Usuario } = require('./observer');

/* let EventEmitter = require('events');


let ee = new EventEmitter()
ee.on('message', function (text) {
  console.log(text);
})
ee.emit('message', 'hello world'); */

/* const textoTema = new TextoTema();
const usuario1 = new Usuario();
textoTema.subscribe(usuario1)

textoTema.notify(); */

//Crea un Tema amb un Usuari i mostra la recepció dels missatges pel usuari.
const tema1 = new Tema();
const usuario1 = new Usuario('Usuario 1');

tema1.suscribir(usuario1);

usuario1.notificar1('Hola')

// Crea un Tema amb dos Usuaris i mostra la recepció dels missatges pels usuaris.

/* const tema2 = new Tema();
const usuario2 = new Usuario('Usuario 2');
const usuario3 = new Usuario('Usuario 3');

tema2.suscribir(usuario2);
tema2.suscribir(usuario3);

usuario2.notificar('Adiós')
 */