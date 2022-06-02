/**
 * 
 */
class Tema {
    constructor() {
        this.observers = [];
    }
    subscribe(o) {
        this.observers.push(o);
    }
    ubsubscribe(o) {
        this.observers = this.observers.filter(e => e!=0);
    }

    notify(model) {
        this.observers.forEach(observer => {
            observer.notify(model);
        })
    }
}

class TextoTema extends Tema {
    constructor() {
        super();
        this.text = '';
    }
    notify() {
        this.text = text;
        super.notify(this);
    }
}

class Usuario {
    notify(tema) {
        console.log(tema);
    }
} 

module.exports = { Tema, TextoTema, Usuario };