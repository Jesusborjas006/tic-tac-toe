class Game {
  constructor() {
    this.players = [player1, player2]
  } 
}
var buttons = document.querySelectorAll('.button')
var player1 = new Player('❎', 0)
var player2 = new Player('🅾️', 0)
var btnClicked = []
var mainHeading;
var player1Token = player1.token
var player2Token = player2.token
var currentPlayer = player1Token
var winner;
var winCount1 = player1.wins
var winCount2 = player2.wins
var combo1 = [buttons[0], buttons[1], buttons[2]]
var combo2 = [buttons[3], buttons[4], buttons[5]]
var combo3 = [buttons[6], buttons[7], buttons[8]]
var combo4 = [buttons[0], buttons[3], buttons[6]]
var combo5 = [buttons[1], buttons[4], buttons[7]]
var combo6 = [buttons[2], buttons[5], buttons[8]]
var combo7 = [buttons[0], buttons[4], buttons[8]]
var combo8 = [buttons[2], buttons[4], buttons[6]]

function switchPlayer() {
  if(currentPlayer === player1Token) {
    currentPlayer = player2Token
  } else {
    currentPlayer = player1Token 
  }
}

function declareWinner() {
  if(combo1[0].innerText === player1Token && combo1[1].innerText === player1Token && combo1[2].innerText === player1Token) {
    winner = player1Token
    addPointToWinner()
    declareWinnerText()
    disableButton()
  } else if(combo1[0].innerText === player2Token && combo1[1].innerText === player2Token && combo1[2].innerText === player2Token){
    winner = player2Token
    addPointToWinner()
    declareWinnerText()
    disableButton()
  } else if(combo2[0].innerText === player1Token && combo2[1].innerText === player1Token && combo2[2].innerText === player1Token) {
    winner = player1Token
    addPointToWinner()
    declareWinnerText()
    disableButton()
  } else if(combo2[0].innerText === player2Token && combo2[1].innerText === player2Token && combo2[2].innerText === player2Token){
    winner = player2Token
    addPointToWinner()
    declareWinnerText()
    disableButton()
  } else if(combo3[0].innerText === player1Token && combo3[1].innerText === player1Token && combo3[2].innerText === player1Token) {
    winner = player1Token
    addPointToWinner()
    declareWinnerText()
    disableButton()
  } else if(combo3[0].innerText === player2Token && combo3[1].innerText === player2Token && combo3[2].innerText === player2Token){
    winner = player2Token
    addPointToWinner()
    declareWinnerText()
    disableButton()
  } else if(combo4[0].innerText === player1Token && combo4[1].innerText === player1Token && combo4[2].innerText === player1Token) {
    winner = player1Token
    addPointToWinner()
    declareWinnerText()
    disableButton()
  } else if(combo4[0].innerText === player2Token && combo4[1].innerText === player2Token && combo4[2].innerText === player2Token){
    winner = player2Token
    addPointToWinner()
    declareWinnerText()
    disableButton()
  } else if(combo5[0].innerText === player1Token && combo5[1].innerText === player1Token && combo5[2].innerText === player1Token) {
    winner = player1Token
    addPointToWinner()
    declareWinnerText()
    disableButton()
  } else if(combo5[0].innerText === player2Token && combo5[1].innerText === player2Token && combo5[2].innerText === player2Token){
    winner = player2Token
    addPointToWinner()
    declareWinnerText()
    disableButton()
  } else if(combo6[0].innerText === player1Token && combo6[1].innerText === player1Token && combo6[2].innerText === player1Token) {
    winner = player1Token
    addPointToWinner()
    declareWinnerText()
    disableButton()
  } else if(combo6[0].innerText === player2Token && combo6[1].innerText === player2Token && combo6[2].innerText === player2Token){
    winner = player2Token
    addPointToWinner()
    declareWinnerText()
    disableButton()
  } else if(combo7[0].innerText === player1Token && combo7[1].innerText === player1Token && combo7[2].innerText === player1Token) {
    winner = player1Token
    addPointToWinner()
    declareWinnerText()
    disableButton()
  } else if(combo7[0].innerText === player2Token && combo7[1].innerText === player2Token && combo7[2].innerText === player2Token){
    winner = player2Token
    addPointToWinner()
    declareWinnerText()
    disableButton()
  } else if(combo8[0].innerText === player1Token && combo8[1].innerText === player1Token && combo8[2].innerText === player1Token) {
    winner = player1Token
    addPointToWinner()
    declareWinnerText()
    disableButton()
  } else if(combo8[0].innerText === player2Token && combo8[1].innerText === player2Token && combo8[2].innerText === player2Token){
    winner = player2Token
    addPointToWinner()
    declareWinnerText()
    disableButton()
  } else if(btnClicked.length === 9){
    draw()
    drawText()
    disableButton()
  }
}

function draw() {
  btnClicked = [];
}

function disableButton() {
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}





 




