/* class Singleton {
    static instancia;
    nombre = '';

    constructor(nombre ='') {
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        return this;
    }
}
const instancia1 = new Singleton('Elias')
const instancia2 = new Singleton('Huerta')
const instancia3 = new Singleton('Zumel')


console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia1 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia1 es: ${instancia3.nombre}`);
 */
