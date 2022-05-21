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
}

module.exports = Game;