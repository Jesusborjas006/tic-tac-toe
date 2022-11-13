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
      addToken()
      switchPlayer()
      console.log(btnClicked)
    } else {
      console.log("Already in array and token was already placed")
    }
  })
}

console.log(btnClicked)


// Adds token to board if not yet added
function addToken() {
  if(btnClicked.includes('button1') && buttons[0].innerText === '') {
    console.log('Token Added')
    buttons[0].innerText = currentPlayer
  } else if (btnClicked.includes('button2') && buttons[1].innerText === '') {
    console.log('Token Added')
    buttons[1].innerText = currentPlayer
  } else if (btnClicked.includes('button3') && buttons[2].innerText === '') {
    console.log('Token Added')
    buttons[2].innerText = currentPlayer
  } else if (btnClicked.includes('button4') && buttons[3].innerText === '') {
    console.log('Token Added')
    buttons[3].innerText = currentPlayer
  } else if (btnClicked.includes('button5') && buttons[4].innerText === '') {
    console.log('Token Added')
    buttons[4].innerText = currentPlayer
  } else if (btnClicked.includes('button6') && buttons[5].innerText === '') {
    console.log('Token Added')
    buttons[5].innerText = currentPlayer
  } else if (btnClicked.includes('button7') && buttons[6].innerText === '') {
    console.log('Token Added')
    buttons[6].innerText = currentPlayer
  } else if (btnClicked.includes('button8') && buttons[7].innerText === '') {
    console.log('Token Added')
    buttons[7].innerText = currentPlayer
  } else if (btnClicked.includes('button9') && buttons[8].innerText === '') {
    console.log('Token Added')
    buttons[8].innerText = currentPlayer
  } 
  
  
  
  else {
    console.log('Not Yet Added!')
  }
}

// Swaps player turn when choosing a btn
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


// Pseudocode 

//  1. Create a global variable to track the wins for a player
//  2. Make the heading dynamic to display the players turn 
//  3. Create variables for when the button is clicked to show which token clicked it (Boolean)
//  4. If no player wins say "It's a draw" else display winner
//  5. Add 1 point to counter of player if won
//  6. Change players turn when game is over 


// Create all global varibales ()




