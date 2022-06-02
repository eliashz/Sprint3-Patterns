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