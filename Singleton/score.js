//let score = require('./score.js');

class Singleton {
    static instancia;
    score = '';

    constructor(score ='') {
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.score = score;

        return this;
    }
}  

const final = new Singleton('1-2')

console.log(`El resultado es: ${final.score}`);
