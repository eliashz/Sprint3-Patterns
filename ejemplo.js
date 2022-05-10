//Nivell 1: Callback Hell
const empleados = [
    {
        id: 1,
        nombre: "Elías"
    },
    {
        id: 2,
        nombre: "Berta"
    },
    {
        id: 3,
        nombre: "Lucas"
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];


/* const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;
    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
}

const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id)?.salario;
    if (salario) {
        callback(null, salario);
    } else {
        callback(`No existe salario con id ${id} no existe`);
    }
}


getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log("Error!!")
        return console.log(err);
    }
    getSalario (id, (err, salario)=> {
        if (err) {
           return  console.log(err)
        }
        console.log('El empleado:', empleado, 'tiene un salario de:', salario)
    })

}); */
const id = 2 ;

const getEmpleado = (id) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;
    return new Promise((resolve, reject) => {
        (empleado) 
        ? resolve(empleado)
        : reject(`No existe empleado con id ${id}` );

    });
}

const getSalario = (id) =>{
    const salario = salarios.find(s => s.id === id)?.salario;
    return new Promise((resolve, reject) => {
        (salario) 
        ? resolve(salario)
        : reject(`No existe salario con id ${id}`);
    })
}

/* getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch( err => console.log(err))

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err)); */

/* getEmpleado(id)
    .then(empleado => {
        getSalario(id)
            .then(salario => {
                console.log('El empleado ', empleado, 'tiene un salario de ',salario);
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err)) */ 

/* getEmpleado(id)
    .then (empleado =>  {
        nombre = empleado;
        return getSalario(id)
    })
    .then (salario => console.log(`El empleado ${nombre} tiene un salario de ${salario}`))
    .catch(err => console.log(err)) */

const getInfo = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario de ${empleado} es de ${salario}`;
    } catch (error) {
        throw error;
    }
} 
getInfo(id)
    .then(msg => {
        console.log('TODO bien')
        console.log(msg)
    })
    .catch(err => {
        console.log("todo mal")
        console.log(err)
    })