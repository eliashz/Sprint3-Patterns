//let score = require('./game.js');

class Player {
    constructor (name, team) {
        this.name = name;
        this.team = team;
    }
}

let player1 = new Player("Elías", "Red");
let player2 = new Player("Berta", "Blue");

class Game {
    constructor (player1, player2, result, score) {
        this.player1 = player1;
        this.player2 = player2;
        this.result1 = '';
        this.result2 = '';
        this.score = '';
    }
    
    play() {
        const game = ['rock', 'paper', 'scissors'];
        this.result1 = game[Math.floor(Math.random()*game.length)];
        this.result2 = game[Math.floor(Math.random()*game.length)];
    }
}

let game1 = new Game (player1.name, player2.name);
game1.play();

const rps = () => {
    if ()
}

console.log(game1);