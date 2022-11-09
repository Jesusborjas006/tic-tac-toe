class Game {
  constructor() {
    this.players = [player1, player2]
    this.playerTurn = player1.token // "❎"
  } 
}

var player1 = new Player('❎', 0);
var player2 = new Player('🅾️', 0);

var game = new Game({ player1, player2 });
console.log(game)

// var buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var heading;
// console.log(buttons)

// Switches player turn
function switchTurn() {
  if (game.playerTurn === player1.token) {
    playerTurn = player2.token
    console.log(heading = `It's ${player2.token}'s turn`)
  } else {
    playerTurn = player1.token
    console.log(heading = `It's ${player1.token}'s turn`)
  }
}
switchTurn()

// function displayToken() {

// }
// var btn1 = document.querySelector("#button1");

// btn1.addEventListener('click', function() {
//   console.log('Btn 1 Clicked')
// })

























// Pseudocode 

//  1. Create a global variable to track the wins for a player
//  2. Make the heading dynamic to display the players turn 
//  3. Create variables for when the button is clicked to show which token clicked it (Boolean)
//  4. If no player wins say "It's a draw" else display winner
//  5. Add 1 point to counter of player if won
//  6. Change players turn when game is over 




