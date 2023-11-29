const INPUTBTNS = document.querySelectorAll(".inputButton");
const PLAYERSCORE = document.querySelector(".pScore");
const CPUSCORE = document.querySelector(".cScore");
const RESULT = document.querySelector(".result");
const PLAYERCHOICE = document.querySelector(".pChoice");
const CPUCHOICE = document.querySelector(".cChoice");

INPUTBTNS.forEach((button) => {
    button.addEventListener("click", function() {
        const playerChoice = button.innerText;
        RESULT.innerText = "";
        calcScore(playRound(getComputerChoice(), playerChoice));
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

function playRound(computerChoice, playerChoice) {
    PLAYERCHOICE.innerText = playerChoice;
    CPUCHOICE.innerText = computerChoice;

    switch (computerChoice) {
        case (playerChoice):
             return "Tie!";
        case "Rock":
            if (playerChoice === "Paper") {
                return "You won!";
            } else return "You lost!";      
        case "Paper":
            if (playerChoice === "Scissors") {
                return "You won!";
            } else return "You lost!";
        case "Scissors":
            if (playerChoice === "Rock") {
                return "You won!";
            } else return "You lost!";
        }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}