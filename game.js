class Game {
  constructor() {
    this.players = [player1, player2]
  } 
}

var player1 = new Player(1, '❎', 0)
var player2 = new Player(2, '🅾️', 0)
var buttons = document.querySelectorAll('.button')
var btnClicked = []
var mainHeading;
var player1Token = player1.token
var player2Token = player2.token
var currentPlayer = player1Token
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

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(event) {
    if(!btnClicked.includes(event.target.id)) {
      btnClicked.push(event.target.id)
      addToken()
      switchPlayer()
      declareWinner()
    } 
  })
}

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
  } 
}

function switchPlayer() {
  if(currentPlayer === player1Token) {
    currentPlayer = player2Token
    mainHeading.innerText = `It's ${currentPlayer}'s turn`
  } else {
    currentPlayer = player1Token 
    mainHeading.innerText = `It's ${currentPlayer}'s turn`
  }
}

function declareWinner() {
  if(combo1[0].innerText === player1Token && combo1[1].innerText === player1Token && combo1[2].innerText === player1Token) {
    mainHeading.innerText = `${player1Token} Won!`
    winCount1++;
    player1Score.innerText = `${winCount1} Wins`
    resetBoard()
  } else if(combo1[0].innerText === player2Token && combo1[1].innerText === player2Token && combo1[2].innerText === player2Token){
      mainHeading.innerText = `${player2Token} Won!`
      winCount2++;
      player2Score.innerText = `${winCount2} Wins`
      resetBoard()
  } else if(combo2[0].innerText === player1Token && combo2[1].innerText === player1Token && combo2[2].innerText === player1Token) {
      mainHeading.innerText = `${player1Token} Won!`
      winCount1++;
      player1Score.innerText = `${winCount1} Wins`
      resetBoard()
  } else if(combo2[0].innerText === player2Token && combo2[1].innerText === player2Token && combo2[2].innerText === player2Token){
      mainHeading.innerText = `${player2Token} Won!`
      winCount2++;
      player2Score.innerText = `${winCount2} Wins`
      resetBoard()
  } else if(combo3[0].innerText === player1Token && combo3[1].innerText === player1Token && combo3[2].innerText === player1Token) {
      mainHeading.innerText = `${player1Token} Won!`
      winCount1++;
      player1Score.innerText = `${winCount1} Wins`
      resetBoard()
  } else if(combo3[0].innerText === player2Token && combo3[1].innerText === player2Token && combo3[2].innerText === player2Token){
      mainHeading.innerText = `${player2Token} Won!`
      winCount2++;
      player2Score.innerText = `${winCount2} Wins`
      resetBoard()
  } else if(combo4[0].innerText === player1Token && combo4[1].innerText === player1Token && combo4[2].innerText === player1Token) {
      mainHeading.innerText = `${player1Token} Won!`
      winCount1++;
      player1Score.innerText = `${winCount1} Wins`
      resetBoard()
  } else if(combo4[0].innerText === player2Token && combo4[1].innerText === player2Token && combo4[2].innerText === player2Token){
      mainHeading.innerText = `${player2Token} Won!`
      winCount2++;
      player2Score.innerText = `${winCount2} Wins`
      resetBoard()
  } else if(combo5[0].innerText === player1Token && combo5[1].innerText === player1Token && combo5[2].innerText === player1Token) {
      mainHeading.innerText = `${player1Token} Won!`
      winCount1++;
      player1Score.innerText = `${winCount1} Wins`
      resetBoard()
  } else if(combo5[0].innerText === player2Token && combo5[1].innerText === player2Token && combo5[2].innerText === player2Token){
      mainHeading.innerText = `${player2Token} Won!`
      winCount2++;
      player2Score.innerText = `${winCount2} Wins`
      resetBoard()
  } else if(combo6[0].innerText === player1Token && combo6[1].innerText === player1Token && combo6[2].innerText === player1Token) {
      mainHeading.innerText = `${player1Token} Won!`
      winCount1++;
      player1Score.innerText = `${winCount1} Wins`
      resetBoard()
  } else if(combo6[0].innerText === player2Token && combo6[1].innerText === player2Token && combo6[2].innerText === player2Token){
      mainHeading.innerText = `${player2Token} Won!`
      winCount2++;
      player2Score.innerText = `${winCount2} Wins`
      resetBoard()
  } else if(combo7[0].innerText === player1Token && combo7[1].innerText === player1Token && combo7[2].innerText === player1Token) {
      mainHeading.innerText = `${player1Token} Won!`
      winCount1++;
      player1Score.innerText = `${winCount1} Wins`
      resetBoard()
  } else if(combo7[0].innerText === player2Token && combo7[1].innerText === player2Token && combo7[2].innerText === player2Token){
      mainHeading.innerText = `${player2Token} Won!`
      winCount2++;
      player2Score.innerText = `${winCount2} Wins`
      resetBoard()
  } else if(combo8[0].innerText === player1Token && combo8[1].innerText === player1Token && combo8[2].innerText === player1Token) {
      mainHeading.innerText = `${player1Token} Won!`
      winCount1++;
      player1Score.innerText = `${winCount1} Wins`
      resetBoard()
  } else if(combo8[0].innerText === player2Token && combo8[1].innerText === player2Token && combo8[2].innerText === player2Token){
      mainHeading.innerText = `${player2Token} Won!`
      winCount2++;
      player2Score.innerText = `${winCount2} Wins`
      resetBoard()
  } else if(btnClicked.length === 9){
      draw()
      resetBoard()
  }
}

function draw() {
  btnClicked = [];
  mainHeading.innerText = 'Draw'
}

function resetBoard() {
  setTimeout(function () {
    for(var i = 0; i < buttons.length; i++) {
      btnClicked = [];
      mainHeading.innerText = `It's ${currentPlayer}'s turn`
      buttons[i].innerText = ''
    }
  }, 1000)
}



