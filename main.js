var token1 = document.querySelector(".player-1-token");
var token2 = document.querySelector(".player-2-token");
var player1Score = document.querySelector("#winCount1");
var player2Score = document.querySelector("#winCount2");
var mainHeading = document.querySelector(".main-heading");
var resetButton = document.querySelector(".reset-button")

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(event) {
    if(!btnClicked.includes(event.target.id)) {
      btnClicked.push(event.target.id)
      addToken()
      switchPlayer()
      switchPlayerHeading()
      declareWinner()
    } 
  })
}

resetButton.addEventListener('click', resetGame)

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

function addPointToWinner() {
  resetBoard()
  if(winner === player1Token) {
    winCount1++
  } else {
    winCount2++
  }
}

function switchPlayerHeading() {
  if(currentPlayer === player1Token) {
    mainHeading.innerText = `It's ${currentPlayer}'s turn`
  } else {
    mainHeading.innerText = `It's ${currentPlayer}'s turn`
  }
}

function declareWinnerText() {
  if(winner === player1Token) {
    player1Score.innerText = `${winCount1} Wins`
    mainHeading.innerText = `${player1Token} Won!`
  } else {
    player2Score.innerText = `${winCount2} Wins`
    mainHeading.innerText = `${player2Token} Won!`
  }
}

function drawText() {
  resetBoard()
  mainHeading.innerText = 'Draw'
}

function resetBoard() {
  setTimeout(function () {
    for(var i = 0; i < buttons.length; i++) {
      btnClicked = [];
      mainHeading.innerText = `It's ${currentPlayer}'s turn`
      buttons[i].innerText = ''
      buttons[i].disabled = false;
    }
  }, 1000)
}

function resetGame() {
  winCount1 = 0
  winCount2 = 0
  player1Score.innerText = `${winCount1} Wins`
  player2Score.innerText = `${winCount2} Wins`
  btnClicked = [];
  for(var i = 0; i < buttons.length; i++) {
    mainHeading.innerText = `It's ${currentPlayer}'s turn`
    buttons[i].innerText = ''
    buttons[i].disabled = false;
  }
}
