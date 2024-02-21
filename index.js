// Rock Paper Scissors

//Array to score the choices
const choices = ["rock", "paper", "scissors"];

//DOM elements
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

//Variables to track scores
let playerScore = 0;
let computerScore = 0;

//Function to play the game
function playGame(playerChoice) {

    //Generate a random choice for the computer
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    //Determine the result of the game
    if (playerChoice === computerChoice) {
        result = "It's a TIE!🤝";
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!👍" : "YOU LOSE!👎";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!👍" : "YOU LOSE!👎";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!👍" : "YOU LOSE!👎";
                break;
        }
    }

    // Display player and coputer choices, and the result
    playerDisplay.textContent = `Player ${playerChoice}`;
    computerDisplay.textContent = `Computer ${computerChoice}`;
    resultDisplay.textContent = result;

    //Remove pervious result color classes
    resultDisplay.classList.remove("greenText", "redText");

    //Update score and apply result color
    switch (result) {
        case "YOU WIN!👍":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!👎":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}

