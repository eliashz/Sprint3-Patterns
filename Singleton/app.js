//Nivell 2: Singleton

const Player = require('./player');
const Game = require('./game')
const Singleton = require('./singleton');

let player1 = new Player("Elías", "Red Team");
let player2 = new Player("Berta", "Blue Team");

let game1 = new Game (player1.name, player2.name);
let game2 = new Game (player1.name, player2.name);
let game3 = new Game (player1.name, player2.name);



console.log("****** Rock-paper-scissors Best of 3! ******");



game1.play();
game2.play();
game3.play();

/* rockPaperScissors(game1);
rockPaperScissors(game2);
rockPaperScissors(game3); */


/* if (game3.score1 > game3.score2) {
    console.log(`The final result is: ${final.scoreboard}. ${this.player1} wins!`);
} else if (game3.score1 < game3.score2) {
    console.log(`The final result is: ${final}. ${this.player2} wins!`);
} else {
    console.log(`The final result is: ${final.scoreboard}. Nobody wins. Let's play again!`);
} */