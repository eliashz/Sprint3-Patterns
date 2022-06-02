const Singleton = require("./singleton");
let draw = 0;
class Game {
    constructor (player1, player2) {
        this.player1 = player1;
        this.result1 = '';
        this.score1 = 0;
        this.player2 = player2;
        this.result2 = '';
        this.score2 = 0
        let final = new Singleton();
  
    }

    play() {
        
        const game = ['Rock', 'Paper', 'Scissors'];
        this.result1 = game[Math.floor(Math.random()*game.length)];
        this.result2 = game[Math.floor(Math.random()*game.length)];
        if (this.result1 === this.result2) {
            console.log(`${this.result1} vs ${this.result2}: Draw!`); 
            draw++;
        } else if (((this.result1 === 'Rock') && (this.result2 === 'Scissors')) || ((this.result1 === 'Paper') && (this.result2 === 'Rock')) || ((this.result1 === 'Scissors') && (this.result2 === 'Paper'))){     
            this.score1++;
            console.log(`${this.result1} vs ${this.result2}: ${this.player1} wins!`); 
        } else {
            this.score2++;
            console.log(`${this.result1} vs ${this.result2}: ${this.player2} wins!`);   
        }
        console.log(this.score1 + this.score2);
        if (this.score1 + this.score2 + draw === 3) {
            console.log("eehh", final({total1: this.score1, total2: this.score2}));
        }
    }
}

module.exports = Game, Singleton
  