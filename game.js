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

var winCount1 = 0;
var winCount2 = 0;
var winner;

var combo1 = [buttons[0], buttons[1], buttons[2]];
var combo2 = [buttons[3], buttons[4], buttons[5]];
var combo3 = [buttons[6], buttons[7], buttons[8]];
var combo4 = [buttons[0], buttons[3], buttons[6]];
var combo5 = [buttons[1], buttons[4], buttons[7]];
var combo6 = [buttons[2], buttons[5], buttons[8]];
var combo7 = [buttons[0], buttons[4], buttons[8]];
var combo8 = [buttons[2], buttons[4], buttons[6]]


// How to know who the winner is?

// Look for all the possible combinations for the board

//  1,2,3 - done
//  4,5,6 - done
//  7,8,9 - done
//  1,4,7 - done
//  2,5,8 - done
//  3,6,9 - done
//  1,5,9 - done
//  3,5,7 - done

// Pushes the data into the btnClicked array if not there and add token
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(event) {
    console.log(event.target)
    if(!btnClicked.includes(event.target.id)) {
      btnClicked.push(event.target.id)
      addToken()
      switchPlayer()
      console.log(btnClicked)
      declareWinner()
    } else {
      console.log("Already in array and token was already placed")
    }
  })
}

// Adds token to board if not yet added
function addToken() {
  if(btnClicked.includes('button1') && buttons[0].innerText === '') {
    buttons[0].innerText = currentPlayer
  } else if (btnClicked.includes('button2') && buttons[1].innerText === '') {
    buttons[1].innerText = currentPlayer
  } else if (btnClicked.includes('button3') && buttons[2].innerText === '') {
    buttons[2].innerText = currentPlayer
  } else if (btnClicked.includes('button4') && buttons[3].innerText === '') {
    buttons[3].innerText = currentPlayer
  } else if (btnClicked.includes('button5') && buttons[4].innerText === '') {
    buttons[4].innerText = currentPlayer
  } else if (btnClicked.includes('button6') && buttons[5].innerText === '') {
    buttons[5].innerText = currentPlayer
  } else if (btnClicked.includes('button7') && buttons[6].innerText === '') {
    buttons[6].innerText = currentPlayer
  } else if (btnClicked.includes('button8') && buttons[7].innerText === '') {
    buttons[7].innerText = currentPlayer
  } else if (btnClicked.includes('button9') && buttons[8].innerText === '') {
    buttons[8].innerText = currentPlayer
  } else {
    console.log('Not Yet Added!')
  }
}
// Swaps player turn when choosing a btn
function switchPlayer() {
  if(currentPlayer === player1Token) {
    currentPlayer = player2Token
    mainHeading.innerText = `It's ${player2Token}'s turn`
  } else {
    currentPlayer = player1Token 
    mainHeading.innerText = `It's ${player1Token}'s turn`
  }
}

function declareWinner() {
  if(combo1[0].innerText === player1Token && combo1[1].innerText === player1Token && combo1[2].innerText === player1Token) {
    console.log(`We have a winner! ${player1Token}`)
  } else if(combo1[0].innerText === player2Token && combo1[1].innerText === player2Token && combo1[2].innerText === player2Token){
    console.log(`We have a winner! ${player2Token}`)
  } else if(combo2[0].innerText === player1Token && combo2[1].innerText === player1Token && combo2[2].innerText === player1Token) {
    console.log(`We have a winner! ${player1Token}`)
  } else if(combo2[0].innerText === player2Token && combo2[1].innerText === player2Token && combo2[2].innerText === player2Token){
    console.log(`We have a winner! ${player2Token}`)
  } else if(combo3[0].innerText === player1Token && combo3[1].innerText === player1Token && combo3[2].innerText === player1Token) {
    console.log(`We have a winner! ${player1Token}`)
  } else if(combo3[0].innerText === player2Token && combo3[1].innerText === player2Token && combo3[2].innerText === player2Token){
    console.log(`We have a winner! ${player2Token}`)
  } else if(combo4[0].innerText === player1Token && combo4[1].innerText === player1Token && combo4[2].innerText === player1Token) {
    console.log(`We have a winner! ${player1Token}`)
  } else if(combo4[0].innerText === player2Token && combo4[1].innerText === player2Token && combo4[2].innerText === player2Token){
    console.log(`We have a winner! ${player2Token}`)
  } else if(combo5[0].innerText === player1Token && combo5[1].innerText === player1Token && combo5[2].innerText === player1Token) {
    console.log(`We have a winner! ${player1Token}`)
  } else if(combo5[0].innerText === player2Token && combo5[1].innerText === player2Token && combo5[2].innerText === player2Token){
    console.log(`We have a winner! ${player2Token}`)
  } else if(combo6[0].innerText === player1Token && combo6[1].innerText === player1Token && combo6[2].innerText === player1Token) {
    console.log(`We have a winner! ${player1Token}`)
  } else if(combo6[0].innerText === player2Token && combo6[1].innerText === player2Token && combo6[2].innerText === player2Token){
    console.log(`We have a winner! ${player2Token}`)
  } else if(combo7[0].innerText === player1Token && combo7[1].innerText === player1Token && combo7[2].innerText === player1Token) {
    console.log(`We have a winner! ${player1Token}`)
  } else if(combo7[0].innerText === player2Token && combo7[1].innerText === player2Token && combo7[2].innerText === player2Token){
    console.log(`We have a winner! ${player2Token}`)
  } else if(combo8[0].innerText === player1Token && combo8[1].innerText === player1Token && combo8[2].innerText === player1Token) {
    console.log(`We have a winner! ${player1Token}`)
  } else if(combo8[0].innerText === player2Token && combo8[1].innerText === player2Token && combo8[2].innerText === player2Token){
    console.log(`We have a winner! ${player2Token}`)
  } else {
    console.log("Its a draw")
  }
}



