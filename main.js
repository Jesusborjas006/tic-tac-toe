// Query Selectors
var player1Token = document.querySelector(".player-1-token");
var player2Token = document.querySelector(".player-2-token");
var winCount1 = document.querySelector("#winCount1");
var winCount2 = document.querySelector("#winCount2");
var mainHeading = document.querySelector(".main-heading");

var btn1 = document.querySelector("#button1");
var btn2 = document.querySelector("#button2");
var btn3 = document.querySelector("#button3");
var btn4 = document.querySelector("#button4");
var btn5 = document.querySelector("#button5");
var btn6 = document.querySelector("#button6");
var btn7 = document.querySelector("#button7");
var btn8 = document.querySelector("#button8");
var btn9 = document.querySelector("#button9");

var buttonNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]



// Event Listeners
btn1.addEventListener('click', addToken1);
btn2.addEventListener('click', addToken2);
btn3.addEventListener('click', addToken3);
btn4.addEventListener('click', addToken4);
btn5.addEventListener('click', addToken5);
btn6.addEventListener('click', addToken6);
btn7.addEventListener('click', addToken7);
btn8.addEventListener('click', addToken8);
btn9.addEventListener('click', addToken9);



// Functions
function addToken1() {
  console.log('Btn 1 Clicked')
}

function addToken2() {
  console.log('Btn 2 Clicked')
}

function addToken3() {
  console.log('Btn 3 Clicked')
}

function addToken4() {
  console.log('Btn 4 Clicked')
}

function addToken5() {
  console.log('Btn 5 Clicked')
}

function addToken6() {
  console.log('Btn 6 Clicked')
}

function addToken7() {
  console.log('Btn 7 Clicked')
}

function addToken8() {
  console.log('Btn 8 Clicked')
}

function addToken9() {
  console.log('Btn 9 Clicked')
}

for(var i = 0; i < buttonNumber.length; i++) {
  console.log(`btn${i + 1}`) 
}