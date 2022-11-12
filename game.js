class Game {
  constructor() {
    this.players = [player1, player2]
  } 
}

var player1 = new Player(1, '❎', 0);
var player2 = new Player(2, '🅾️', 0);

var player1Token = player1.token;
var player2Token = player2.token;
var currentPlayer = player1Token;

var game = new Game({ player1, player2 });
var buttons = document.querySelectorAll('.button');
var btnClicked = []

// Pushes the data into the btnClicked array if not there and add token
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(event) {
    console.log(event.target)
    if(!btnClicked.includes(event.target.id)) {
      btnClicked.push(event.target.id)
      addToken(game)
      switchPlayer()
      console.log(btnClicked)
      // return btnClicked
    } else {
      console.log("Already in array and token was already placed")
    }
  })
}

console.log(btnClicked)


function addToken(game) {
  if(btnClicked.includes('button1')) {
    console.log('Token Added')
    buttons[0].innerText = game.players[0].token
  } else {
    console.log('Not Yet Added!')
  }
}

function switchPlayer() {
  if(currentPlayer === player1Token) {
    currentPlayer = player2Token 
    console.log(currentPlayer)
    console.log("Player has been switched")
  } else {
    currentPlayer = player1Token 
    console.log(currentPlayer)
    console.log("Player has been switched")
  }
  
}



// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function(event) {
//     if(!btnClicked.includes(event.target.id)) {
  
//     } else {
//       console.log("Token already displayed")
//     }
//   })
// }

// Pseudocode 

//  1. Create a global variable to track the wins for a player
//  2. Make the heading dynamic to display the players turn 
//  3. Create variables for when the button is clicked to show which token clicked it (Boolean)
//  4. If no player wins say "It's a draw" else display winner
//  5. Add 1 point to counter of player if won
//  6. Change players turn when game is over 


// Create all global varibales ()




