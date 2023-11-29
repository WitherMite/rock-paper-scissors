const INPUTBTNS = document.querySelectorAll(".inputButton");

INPUTBTNS.forEach((button) => {
    button.addEventListener("click", function() {
        const playerInput = button.innerText;
        return console.log(playRound(getComputerChoice(), playerInput));
    });
});

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