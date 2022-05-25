class Articulo {
    constructor(nombre, precio, divisa) {
        this.nombre = nombre;
        this.precio = precio;
        this.divisa = divisa;
        this.euros;
    }
} 

module.exports = Articulo;