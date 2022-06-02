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

let EventEmitter = require('events');

let ee = new EventEmitter()
ee.on('message', function (text) {
  console.log(text);
})
ee.emit('message', 'hello world');