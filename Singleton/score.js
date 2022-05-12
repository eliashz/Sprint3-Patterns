//let score = require('./scoreboard.js');

class Singleton {
    static instancia;
    scoreboard = '';

    constructor(scoreboard ='') {
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.scoreboard = scoreboard;

        return this;
    }
}  

const final = new Singleton('1-2')

console.log(`El resultado es: ${final.scoreboard}`);
