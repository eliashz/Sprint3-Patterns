class Coche {
    constructor(marca, matricula, cilindrada, color, combustible) {
        this.marca = marca;
        this.matricula = matricula;
        this.cilindrada = cilindrada;
        this.color = color;
        this.combustible = combustible ;
    }
    cambiarColorRojo() {
        this.color = "Rojo";
    }
    cambiarColorAzul() {
        this.color = "Azul";
    }
}

module.exports = Coche;