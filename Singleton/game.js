const Singleton = require('./singleton');

class Game {
    constructor (player1, player2, result, score) {
        this.player1 = player1;
        this.result1 = '';
        this.player2 = player2;
        this.result2 = '';
        this.score1 = '';
        this.score2 = '';
    }
    
    play() {
        const game = ['Rock', 'Paper', 'Scissors'];
        this.result1 = game[Math.floor(Math.random()*game.length)];
        this.result2 = game[Math.floor(Math.random()*game.length)];
    }

    saveScore() {
        const final = new Singleton(`${this.score1}-${this.score2}`);
        if (this.score1 > this.score2) {
            console.log(`The final result is: ${final.scoreboard}. ${this.player1} wins!`);
        } else if (this.score1 < this.score2) {
            console.log(`The final result is: ${final.scoreboard}. ${this.player2} wins!`);
        } else {
            console.log(`The final result is: ${final.scoreboard}. Nobody wins. Let's play again!`);
        }
    }
}

module.exports = Game;