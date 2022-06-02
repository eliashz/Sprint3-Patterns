/**
 * 
 */
class Tema {
    constructor() {
        this.observers = [];
    }
    suscribir(o) {
        this.observers.push(o);
    }

    notificar2(model) {
        this.observers.forEach(observer => {
            observer.notificar(model);
            console.log("Mensaje enviado", model);
        })
    }
}

/* class TextoTema extends Tema {
    constructor() {
        super();
        this.texto = '';
    }
    notificar(texto) {
        this.texto = texto;
        super.notificar(this);
    }
} */

class Usuario extends Tema {
    constructor (nombre) {
        super();
        this.nombre = nombre;
    }
  /*   notificar(tema) {
        console.log(`Mensaje: ${tema} de ${this.nombre}`);
    } */
    notificar1(texto) {
        this.texto = texto;
        super.notificar2(this.texto);
        console.log(`${this.texto} de ${this.nombre}`);
    }
} 

module.exports = { Tema, Usuario };