class Game {
  constructor() {
    this.players = [player1, player2]
    this.playerTurn = player1.token // "❎"
  } 
}

var player1 = new Player(1, '❎', 0);
var player2 = new Player(2, '🅾️', 0);

var game = new Game({ player1, player2 });
console.log(game)

var heading;

var buttons = document.querySelectorAll('.button');
console.log(buttons)
var btnClicked = []
// console.log(btnClicked)

function resetBoard() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerText = ''
  }
}
resetBoard()

// function addToken(event) {
//   for (var i = 0; i < buttons.length; i++) {
//     buttons[i].innerText = ''
//     buttons[i].addEventListener('click', function() {
//       alert(event.target.id)
//       // if(buttons[0].id === 'button1') {
//       //   console.log('Btn1 clicked')
//       // } else if (buttons[1].id === 'button2') {
//       //   console.log('Btn2 clicked')
//       // }
//     })
//   }
// }
// addToken()

var grid = document.querySelector('.grid-container')
grid.addEventListener('click', myFunction)

function myFunction(event) {
  if(event.target.id === 'button1' && buttons[0].innerText === '') {
    console.log(event.target.id)
    buttons[0].innerText = '❎'
  } else if(event.target.id === 'button2' && buttons[1].innerText === '') {
    console.log(event.target.id)
    buttons[1].innerText = '❎'
  } else if(event.target.id === 'button3' && buttons[2].innerText === '') {
    console.log(event.target.id)
    buttons[2].innerText = '❎'
  } else if(event.target.id === 'button4' && buttons[3].innerText === '') {
    console.log(event.target.id)
    buttons[3].innerText = '❎'
  } else if(event.target.id === 'button5' && buttons[4].innerText === '') {
    console.log(event.target.id)
    buttons[4].innerText = '❎'
  } else if(event.target.id === 'button6' && buttons[5].innerText === '') {
    console.log(event.target.id)
    buttons[5].innerText = '❎'
  } else if(event.target.id === 'button7' && buttons[6].innerText === '') {
    console.log(event.target.id)
    buttons[6].innerText = '❎'
  } else if(event.target.id === 'button8' && buttons[7].innerText === '') {
    console.log(event.target.id)
    buttons[7].innerText = '❎'
  } else if(event.target.id === 'button9' && buttons[8].innerText === '') {
    console.log(event.target.id)
    buttons[8].innerText = '❎'
  }
}








// Switches player turn
function switchTurn() {
  if (game.playerTurn === player1.token) {
    playerTurn = player2.token
    console.log(heading = `It's ${player2.token}'s turn`)
    heading.innerText = `It's ${player2.token}'s turn`
  } else {
    playerTurn = player1.token
    console.log(heading = `It's ${player1.token}'s turn`)
    heading = `It's ${player1.token}'s turn`
  }
}
// switchTurn()


























// Pseudocode 

//  1. Create a global variable to track the wins for a player
//  2. Make the heading dynamic to display the players turn 
//  3. Create variables for when the button is clicked to show which token clicked it (Boolean)
//  4. If no player wins say "It's a draw" else display winner
//  5. Add 1 point to counter of player if won
//  6. Change players turn when game is over 




