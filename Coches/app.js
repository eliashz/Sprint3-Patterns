const Coche = require('./coches.js');

const coche1 = new Coche('Seat', 'B-0000-Z', '1200cc', 'Amarillo', 'gasoil');
const coche2 = new Coche('Renault', 'B-1111-D', '1600cc', 'Verde', 'gasolina');
const coche3 = new Coche('Ferrari', 'B-0000-Z', '1400cc', 'Amarillo', 'hibrido');
const coche4 = new Coche('Fiat', 'B-2222-J', '2000cc', 'Negro', 'electrico');
const coche5 = new Coche('Seat', 'B-4444-A', '1500cc', 'Gris', 'gasolina');
const coche6 = new Coche('Peugeot', 'B-6666-B', '1200cc', 'Rojo', 'electrico');

let arrayCoches = [coche1, coche2, coche3, coche4, coche5, coche6];

for (const [key, value] of arrayCoches.entries()) {
    if ((key % 2 === 0) || (key === 0)){
        value.color = 'azul';
    } else {
        value.color = 'rojo';
    }
    if (value.combustible == 'gasolina') {
        console.log(`Marca: ${value.marca} y matrícula: ${value.matricula}`);
    }  
}

try {
    const coche7 = new Coche('Peugeot', 'B-6666-B', '1200cc', 'Rojo', 'agua');
} catch (error) {
    console.log(error);
} 

console.table(arrayCoches);