const Singleton = require("./singleton");

let draw = score1 = score2 = 0;

class Game {
    constructor (player1, player2, final) {
        this.player1 = player1;
        this.result1 = '';
        this.player2 = player2;
        this.result2 = '';
        this.final = new Singleton();
    }
    
    play() {
        const game = ['Rock', 'Paper', 'Scissors'];
        this.result1 = game[Math.floor(Math.random()*game.length)];
        this.result2 = game[Math.floor(Math.random()*game.length)];
        if (this.result1 === this.result2) {
            console.log(`${this.result1} vs ${this.result2}: Draw!`); 
            draw++;
        } else if (((this.result1 === 'Rock') && (this.result2 === 'Scissors')) || ((this.result1 === 'Paper') && (this.result2 === 'Rock')) || ((this.result1 === 'Scissors') && (this.result2 === 'Paper'))){     
            score1++;
            console.log(`${this.result1} vs ${this.result2}: ${this.player1} wins!`); 
        } else {
            score2++;
            console.log(`${this.result1} vs ${this.result2}: ${this.player2} wins!`);   
        }
        if (score1 + score2 + draw === 3) {
            this.final.scoreboard = {total1: score1, total2: score2}; //Instanciar el Singleton al final de 3 partidas.
            console.log("Final result: ", this.final);
        }
    }
}

module.exports = Game, Singleton