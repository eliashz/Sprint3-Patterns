//Nivell 2: Singleton

const Player = require('./player');
const Game = require('./game')
const Singleton = require('./singleton');

let player1 = new Player("Elías", "Red Team");
let player2 = new Player("Berta", "Blue Team");

let game = new Game (player1.name, player2.name);

console.log("****** Rock-paper-scissors Best of 3! ******");

game.play();
game.play();
game.play();

//const final = new Singleton({total1: game.score1, total2: game.score2});

/* if (final.scoreboard.total1 > final.scoreboard.total2) {
    console.log(`The final result is: ${final.scoreboard.total1} - ${final.scoreboard.total2}. ${player1.name} from ${player1.team} wins!`);
} else if (final.scoreboard.total1 < final.scoreboard.total2) {
    console.log(`The final result is: ${final.scoreboard.total1} - ${final.scoreboard.total2}. ${player2.name} from ${player2.team} wins!`);
} else {
    console.log(`The final result is: ${final.scoreboard.total1} - ${final.scoreboard.total2}. Nobody wins. Let's play again!`);
}  */

