class Coche {
    constructor(marca, matricula, cilindrada, color, combustible) {
        if ((combustible === 'gasolina') || (combustible === 'hibrido') || (combustible === 'gasoil') || (combustible === 'gasoil') || (combustible === 'electrico')) {
            this.marca = marca;
            this.matricula = matricula;
            this.cilindrada = cilindrada;
            this.color = color;
            this.combustible = combustible;
        } else {
            console.log("error");
        }
    }
    cambiarColor(colorNuevo) {
        this.color = colorNuevo;
    }
}

module.exports = Coche;