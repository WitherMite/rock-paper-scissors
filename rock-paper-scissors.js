const INPUTBTNS = document.querySelectorAll(".inputButton");
const PLAYERSCORE = document.querySelector(".pScore");
const CPUSCORE = document.querySelector(".cScore");
const RESULT = document.querySelector(".result");
const PLAYERCHOICE = document.querySelector(".pChoice");
const CPUCHOICE = document.querySelector(".cChoice");

INPUTBTNS.forEach((button) => {
    button.addEventListener("click", () => {
        const playerChoice = button.innerText;
        RESULT.innerText = "";
        calcScore(getRoundResult(getComputerChoice(), playerChoice));
    });
});

function calcScore(roundResult) {
    let playerScore = Number(PLAYERSCORE.innerText);
    let cpuScore = Number(CPUSCORE.innerText);

    if (roundResult === "player") {
        playerScore += 1;
        if (playerScore === 5) {
            RESULT.innerText = `Player Wins 5-${cpuScore}!`;
            playerScore = 0;
            cpuScore = 0;
        }
    } else if (roundResult === "computer") {
        cpuScore += 1;
        if (cpuScore === 5) {
            RESULT.innerText = `Computer Wins 5-${playerScore}!`
            playerScore = 0;
            cpuScore = 0;
        }
    }
    PLAYERSCORE.innerText = playerScore;
    CPUSCORE.innerText = cpuScore;
}

function getRoundResult(computerChoice, playerChoice) {
    PLAYERCHOICE.innerText = playerChoice;
    CPUCHOICE.innerText = computerChoice;

    switch (computerChoice) {
        case (playerChoice):
             return "tie";
        case "Rock":
            if (playerChoice === "Paper") {
                return "player";
            } else return "computer";      
        case "Paper":
            if (playerChoice === "Scissors") {
                return "player";
            } else return "computer";
        case "Scissors":
            if (playerChoice === "Rock") {
                return "player";
            } else return "computer";
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