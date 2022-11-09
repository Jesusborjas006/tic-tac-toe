class Game {
  constructor(gameInfo) {
    console.log(gameInfo)
  } 
  
}

var player1 = new Player('❎', 0);
var player2 = new Player('🅾️', 0);
var game = new Game({ player1, player2 });

// console.log(player1)


// var squareCliked = [];
// console.log(squareCliked);

// var squares = [
//   {
//     button: 1,
//     clicked: true,
//   },
//   {
//     button: 2,
//     clicked: true,
//   },
//   {
//     button: 3,
//     clicked: true,
//   },
//   {
//     button: 4,
//     clicked: false,
//   },
//   {
//     button: 5,
//     clicked: false,
//   },
//   {
//     button: 6,
//     clicked: false,
//   },
//   {
//     button: 7,
//     clicked: false,
//   },
//   {
//     button: 8,
//     clicked: false,
//   },
//   {
//     button: 9,
//     clicked: false,
//   },
// ]


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


// Updates Turn 
// function playersTurn() {
//   if(player1.token === '❎') {
//     console.log(`It's ❎'s turn`)
//   } else {
//     console.log(`It's 🅾️'s turn`)
//   }
// }
// playersTurn()

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




