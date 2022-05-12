let score = require('./game.js');

class Player {
    constructor (name, team, score) {
        this.name = name;
        this.team = team;
        this.score = score;
    }
}

const player1 = new Player("Elías", "Red");
const player2 = new Player("Berta", "Blue");

class Game extends Player {
    constructor (name, team, score) {
        this.gambler1 = gambler1;
        this.gambler2 = gambler2;
        this.journey = journey;
    }
    
    play() {
        console.log(Math.random());
    }
}

player1 = new Player(null, null, 1)
console.log(player1);