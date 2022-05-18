const data = require ('./currency_conversions.json')

class Decorator {
    constructor(articulo) {
        this.articulo = articulo;   
    }

    getArticulo() {
        return this.articulo;
    }
    conversion() { 
        const divisaConv = this.getArticulo().divisa + '_EUR';
        console.log(divisaConv);
        const totalConv = data.USD_EUR * this.getArticulo().precio;
        console.log(data.USD_EUR);
        console.log(`El cambio de ${this.getArticulo().divisa} a EUR es de ${totalConv}`);
    }
}

module.exports = Decorator;
