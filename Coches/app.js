const Coche = require('./coches.js');

const coche1 = new Coche('Seat', 'B-0000-Z', '1200cc', 'Amarillo', 'gasoil');
const coche2 = new Coche('Renault', 'B-1111-D', '1600cc', 'Verde', 'gasolina');
const coche3 = new Coche('Ferrari', 'B-0000-Z', '1400cc', 'Amarillo', 'hibrido');
const coche4 = new Coche('Fiat', 'B-2222-J', '2000cc', 'Negro', 'electrico');
const coche5 = new Coche('Seat', 'B-4444-A', '1500cc', 'Gris', 'gasolina');
const coche6 = new Coche('Peugeot', 'B-6666-B', '1200cc', 'Rojo', 'gasolina');

let arrayCoches = [coche1, coche2, coche3, coche4, coche5, coche6];


for (const c in arrayCoches) {
    if ((c % 2 == 0) || (c == 0)){
        arrayCoches[c].cambiarColorAzul();

    } else {
        arrayCoches[c].cambiarColorRojo();
    }
    if (arrayCoches[c].combustible == 'gasolina') {
        console.log(`Marca: ${arrayCoches[c].marca} y matrícula: ${arrayCoches[c].matricula}`);
    }
}

console.table(arrayCoches);