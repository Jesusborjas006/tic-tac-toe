class Game {
  constructor() {
    this.players = [player1, player2]
    this.playerTurn = player1.token // "❎"
    // console.log(this.playerTurn)

    
    // console.log(gameInfo)
  } 
}

var player1 = new Player('❎', 0);
var player2 = new Player('🅾️', 0);

var game = new Game({ player1, player2 });
// console.log(player1.token)
console.log(game)

// Option 1
function switchTurn() {
  if (game.playerTurn === player1.token) {
    playerTurn = player2.token
    console.log(`It's ${player2.token}'s turn`)
  } else {
    playerTurn = player1.token
    console.log(`It's ${player1.token}'s turn`)
  }
}
switchTurn()

// Option 2
// function switchTurn() {
//   if (game.playerTurn === '❎') {
//     playerTurn = player2.token
//     console.log(playerTurn)
//   } else {
//     playerTurn = player1.token
//     console.log(playerTurn)
//   }
// }
// switchTurn()

// Updates Turn 
// function playersTurn() {
//   if(player1.token === '❎') {
//     console.log(`It's ❎'s turn`)
//   } else {
//     console.log(`It's 🅾️'s turn`)
//   }
// }
// playersTurn()








// Pushes true to array
// function updateSquareClicked() {
//   for (var i = 0; i < squares.length; i++) {
//     if(squares[i].clicked) {
//       squareCliked.push(squares[i].button)
//     }
//   }
// }

// updateSquareClicked()
// console.log(squareCliked);

// Track wins
// function updateWinCount() {
//   for (var i = 0; i < squares.length; i++) {
//     if(squares[0].clicked === true && squares[1].clicked === true && squares[2].clicked === true ) {
//       console.log('Yes they match!')
//     } else {
//       // console.log("They don't match")
//     }
//   }
// }

// updateWinCount();





















// Pseudocode 

//  1. Create a global variable to track the wins for a player
//  2. Make the heading dynamic to display the players turn 
//  3. Create variables for when the button is clicked to show which token clicked it (Boolean)
//  4. If no player wins say "It's a draw" else display winner
//  5. Add 1 point to counter of player if won
//  6. Change players turn when game is over 




