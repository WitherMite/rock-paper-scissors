const INPUTBTNS = document.querySelectorAll(".inputButton");
const PLAYERSCORE = document.querySelector(".pScore");
const CPUSCORE = document.querySelector(".cScore");
const RESULT = document.querySelector(".result");

INPUTBTNS.forEach((button) => {
    button.addEventListener("click", function() {
        const playerInput = button.innerText;
        RESULT.innerText = "";
        calcScore(playRound(getComputerChoice(), playerInput));
    });
});

function calcScore(roundResult) {
    let playerScore = Number(PLAYERSCORE.innerText);
    let cpuScore = Number(CPUSCORE.innerText);

    if (roundResult === "You won!") {
        playerScore += 1;
        if (playerScore === 5) {
            RESULT.innerText = "Player Wins!";
            playerScore = 0;
            cpuScore = 0;
        }
    } else if (roundResult === "You lost!") {
        cpuScore += 1;
        if (cpuScore === 5) {
            RESULT.innerText = "Computer Wins!"
            playerScore = 0;
            cpuScore = 0;
        }
    }
    PLAYERSCORE.innerText = playerScore;
    CPUSCORE.innerText = cpuScore;
}

function playRound(computerChoice, playerInput) {
    let playerChoice = playerInput.toLowerCase();
    console.log(`You chose ${playerChoice}.`);
    console.log(`The computer chose ${computerChoice}.`);

    switch (computerChoice) {
        case (playerChoice):
             return "Tie!";
        case "rock":
            if (playerChoice === "paper") {
                return "You won!";
            } else return "You lost!";      
        case "paper":
            if (playerChoice === "scissors") {
                return "You won!";
            } else return "You lost!";
        case "scissors":
            if (playerChoice === "rock") {
                return "You won!";
            } else return "You lost!";
        }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}