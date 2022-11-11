class Game {
  constructor() {
    this.players = [player1, player2]
  } 
}

var player1 = new Player(1, '❎', 0);
var player2 = new Player(2, '🅾️', 0);

var game = new Game({ player1, player2 });
console.log(game)

var buttons = document.querySelectorAll('.button');
// console.log(buttons)
var btnClicked = []

// var grid = document.querySelector('.grid-container')
// grid.addEventListener('click', myFunction)

// function myFunction(event) {
//   if(event.target.id === 'button1' && !btnClicked.includes()) {
//     console.log(buttons[0])
//     btnClicked.push(event.target.id);
//     console.log(btnClicked)
//     console.log(event.target.id)
//     // fix players turn with a function
//   } else if(event.target.id === 'button2' && buttons[1].innerText === '') {
//     console.log(event.target.id)
//   } else if(event.target.id === 'button3' && buttons[2].innerText === '') {
//     console.log(event.target.id)
//   } else if(event.target.id === 'button4' && buttons[3].innerText === '') {
//     console.log(event.target.id)
//   } else if(event.target.id === 'button5' && buttons[4].innerText === '') {
//     console.log(event.target.id)
//   } else if(event.target.id === 'button6' && buttons[5].innerText === '') {
//     console.log(event.target.id)
//   } else if(event.target.id === 'button7' && buttons[6].innerText === '') {
//     console.log(event.target.id)
//   } else if(event.target.id === 'button8' && buttons[7].innerText === '') {
//     console.log(event.target.id)
//   } else if(event.target.id === 'button9' && buttons[8].innerText === '') {
//     console.log(event.target.id)
//   }
// }

// Pushes the data into the btnClicked array if not there
for (var i = 0; i < buttons.length; i++) {
  // console.log(buttons[i])
  buttons[i].addEventListener('click', function(event) {
    console.log(event.target)
    if(!btnClicked.includes(event.target.id)) {
      btnClicked.push(event.target.id)
      console.log(btnClicked)
    } else {
      console.log("Alredy In the array!!!")
    }
  })
}

console.log(btnClicked)

// function storeBtn() {
//   if(!btnClicked.includes()) {
//     btnClicked.push(buttons[i])
//     console.log(btnClicked)
//   } else {
//     return
//   }
// }
// storeBtn()
// Pseudocode 

//  1. Create a global variable to track the wins for a player
//  2. Make the heading dynamic to display the players turn 
//  3. Create variables for when the button is clicked to show which token clicked it (Boolean)
//  4. If no player wins say "It's a draw" else display winner
//  5. Add 1 point to counter of player if won
//  6. Change players turn when game is over 


// Create all global varibales ()




