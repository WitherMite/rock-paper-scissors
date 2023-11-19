game();

function game() {
    let playerScore = 0;
    let cpuScore = 0;

    for (let i=0; i<5; i++) {
        let playerInput = prompt("Rock, Paper, or Scissors?");

        let round = playRound(getComputerChoice(), playerInput);
        console.log(round);

        if (round.charAt(4) === "w") {
            playerScore += 1;
        } else if (round.charAt(4) === "l") {
            cpuScore += 1;
        }
            
        console.log(`Your score is ${playerScore} to ${cpuScore}`);
    }

    if (playerScore === cpuScore) {
        console.log(`Game tied ${playerScore} to ${cpuScore}`);
    } else if (cpuScore < playerScore) {
        console.log(`You won ${playerScore} to ${cpuScore}`);
    } else {
        console.log(`You lost ${playerScore} to ${cpuScore}`);
    }
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