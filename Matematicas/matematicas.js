class Matematicas { 
    constructor(op1, op2, operacion) {

        if ((operacion == '+') || (operacion == '-') || (operacion == '*') || (operacion == '/') || (operacion == '%')) {
                this.op1 = op1;
                this.op2 = op2;
                this.operacion = operacion;
        } else {
            console.log('No se puede crear.')
        }
    }

    calcular () {
        if (this.operacion === '+') {
            return this.op1 + this.op2;
        } else if (this.operacion === '-'){
            return this.op1 - this.op2;
        } else if (this.operacion === '*'){
            return this.op1 * this.op2;
        } else if (this.operacion === '/'){
            return this.op1 * this.op2;
        } else if (this.operacion === '%'){
            return this.op1 * this.op2;
        } 
    }
    
    cambiarDatos(nuevoOp1=this.op1, nuevoOp2=this.op2, nuevaOperacion=this.operacion) {
        this.op1 = nuevoOp1;
        this.op2 = nuevoOp2;
        this.operacion = nuevaOperacion;
    }
}

module.exports = Matematicas;