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
        this.result1 = '';
        this.player2 = player2;
        this.result2 = '';
        this.score1 = '';
        this.score2 = '';
    }
    
    play() {
        const game = ['rock', 'paper', 'scissors'];
        this.result1 = game[Math.floor(Math.random()*game.length)];
        this.result2 = game[Math.floor(Math.random()*game.length)];
    }
}

let game1 = new Game (player1.name, player2.name);
let game2 = new Game (player1.name, player2.name);


const rockPaperScissors = (game) => {
    if (game.result1 === game.result2) {
        console.log("Empate"); 
    } else if (((game.result1 == 'rock') && (game.result2 == 'scissors')) || ((game.result1 == 'paper') && (game.result2 == 'scissors')) || ((game.result1 == 'scissors') && (game.result2 == 'paper'))){     
        console.log("Elías");
        game.score1 = score1++;
    } else {
        score2++; 
        console.log("Berta");
    }
    game.score1 = score1;

    game.score2 = score2;
}

game1.play();
game2.play();
console.log(game1);
console.log(game2);

let score1 = 0;
let score2 = 0;
rockPaperScissors(game1);
rockPaperScissors(game2);
console.log(game1);
console.log(game2);
while (sco)
    let game3 = new Game (player1.name, player2.name);
    game3.play();
    rockPaperScissors(game3);
    console.log(game3);
}




