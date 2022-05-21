//Nivell 2: Singleton

const Singleton = require('./singleton');
const Player = require('./player');
const Game = require('./game')

let player1 = new Player("Elías", "Red Team");
let player2 = new Player("Berta", "Blue Team");

let game1 = new Game (player1.name, player2.name);
let game2 = new Game (player1.name, player2.name);
let game3 = new Game (player1.name, player2.name);

let score1 = score2 = 0;

console.log("****** Rock-paper-scissors Best of 3! ******");

const rockPaperScissors = (game) => {
    if (game.result1 === game.result2) {
        console.log(`${game.result1} vs ${game.result2}: Draw!`); 
    } else if (((game.result1 === 'Rock') && (game.result2 === 'Scissors')) || ((game.result1 === 'Paper') && (game.result2 === 'Rock')) || ((game.result1 === 'Scissors') && (game.result2 === 'Paper'))){     
        console.log(`${game.result1} vs ${game.result2}: ${game.player1} wins!`); 
        score1++;
    } else {
        console.log(`${game.result1} vs ${game.result2}: ${game.player2} wins!`); 
        score2++;     
    }
    game.score1 = score1;
    game.score2 = score2;
}

game1.play();
game2.play();
game3.play();

rockPaperScissors(game1);
rockPaperScissors(game2);
rockPaperScissors(game3);

const final = new Singleton(`${game3.score1}-${game3.score2}`)

if (game3.score1 > game3.score2) {
    console.log(`The final result is: ${final.scoreboard}. ${player1.name} from ${player1.team} wins!`);
} else if (game3.score1 < game3.score2) {
    console.log(`The final result is: ${final.scoreboard}. ${player1.name} from ${player1.team} wins!`);
} else {
    console.log(`The final result is: ${final.scoreboard}. Nobody wins. Let's play again!`);
}