let score1 = score2 = 0;

const Singleton = require('./singleton');

class Game {
    constructor (player1, player2) {
        this.player1 = player1;
        this.result1 = '';
        this.player2 = player2;
        this.result2 = '';
    }
    
    play() {
        const game = ['Rock', 'Paper', 'Scissors'];
        this.result1 = game[Math.floor(Math.random()*game.length)];
        this.result2 = game[Math.floor(Math.random()*game.length)];
        //let score1 = score2 = 0;
        if (this.result1 === this.result2) {
            console.log(`${this.result1} vs ${this.result2}: Draw!`); 
        } else if (((this.result1 === 'Rock') && (this.result2 === 'Scissors')) || ((this.result1 === 'Paper') && (this.result2 === 'Rock')) || ((this.result1 === 'Scissors') && (this.result2 === 'Paper'))){     
            score1++
            console.log(`${this.result1} vs ${this.result2}: ${this.player1} wins!`); 
            console.log(score1);
        } else {
            score2++
            console.log(score2);
            console.log(`${this.result1} vs ${this.result2}: ${this.player2} wins!`);   
        }

        console.log(new Singleton({total1: score1, total2: score2}));

 
    }
}

module.exports = Game;