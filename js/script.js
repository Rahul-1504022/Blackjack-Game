//variable declare

let min = 2;
let max = 11;
let firstCard = getRandom(min, max);
let secondCard = getRandom(min, max);
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


//function declare

//get element
let showMessage = document.getElementById("message");
let startNewGame = document.getElementById("start");
let newGame = document.getElementById("new-game");
let cardSum = document.getElementById("sum");
let cardValue = document.getElementById("card")

//Random Number Generator
function getRandom(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

//start the game
function startGame() {
    if (sum <= 20) {
        message = "You are out of the game!"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    showMessage.textContent = message;
    cardSum.textContent = `Sum: ${sum}`;
    cardValue.textContent = `Cards: ${firstCard} ${secondCard}`;
}

//reload page
function newGameStart() {
    location.reload();
}


//add Eventlistener
startNewGame.addEventListener('click', startGame);
newGame.addEventListener('click', newGameStart);
