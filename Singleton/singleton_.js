class Unica {
    constructor(nombre) {
        

        if (Unica.instancia) {
            console.log("creada");
            return Unica.instancia;
        } 
        this.nombre = nombre;
        Unica.instancia = this;
        
    }
}

const a = new Unica('a')
const b = new Unica('b')
console.log(a, b)