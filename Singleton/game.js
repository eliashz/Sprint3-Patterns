let score1 = score2 = 0;

const Singleton = require('./singleton');

class Game {
    constructor (player1, player2) {
        this.player1 = player1;
        this.result1 = '';
        this.score1 = 0;
        this.player2 = player2;
        this.result2 = '';
        this.score2 = 0
    }
    
    play() {
        const game = ['Rock', 'Paper', 'Scissors'];
        this.result1 = game[Math.floor(Math.random()*game.length)];
        this.result2 = game[Math.floor(Math.random()*game.length)];
        //let score1 = score2 = 0;
        if (this.result1 === this.result2) {
            console.log(`${this.result1} vs ${this.result2}: Draw!`); 
        } else if (((this.result1 === 'Rock') && (this.result2 === 'Scissors')) || ((this.result1 === 'Paper') && (this.result2 === 'Rock')) || ((this.result1 === 'Scissors') && (this.result2 === 'Paper'))){     
            //score1++
            this.score1 = this.score1 +1
            console.log(`${this.result1} vs ${this.result2}: ${this.player1} wins!`); 
            console.log(this);
        } else {
            this.score2 = this.score2 +1
            console.log(this);
            console.log(`${this.result1} vs ${this.result2}: ${this.player2} wins!`);   
        }

 
    }
}

module.exports = Game;