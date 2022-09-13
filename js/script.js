let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

//get element
let showMessage = document.getElementById("message");
let startNewGame = document.getElementById("start");

//start the game
function startGame() {
    console.log("button clicked")
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    showMessage.textContent = message
}


//add Eventlistener
startNewGame.addEventListener('click', startGame);
