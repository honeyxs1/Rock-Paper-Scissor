
function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < (1 / 3)) {
        return "Rock";
    } else if (randomNumber >= (1 / 3) && randomNumber < (2 / 3)) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
console.log(getComputerChoice());
function getHumanChoice() {
    let question = prompt("Rock, Paper, or Scissors?");
    if (question.toLowerCase() != 'rock' && question.toLowerCase() != 'paper' && question.toLowerCase() != 'scissors') {
        console.log("Invalid answer...")
    }
    return question;
}
console.log(getHumanChoice());
function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === 'scissors') {
        if (computerChoice.toLowerCase() === 'scissors') {
            console.log("Computer chose: " + computerChoice);
            console.log("Tie");
            rounds += 1;
        } else if (computerChoice.toLowerCase() === 'rock') {
            console.log("Computer chose: " + computerChoice);
            console.log("You lose...");
            computerScore += 1;
            rounds += 1;
        } else if (computerChoice.toLowerCase() === 'paper') {
            console.log("Computer chose: " + computerChoice);
            console.log("You win!");
            humanScore += 1;
            rounds += 1;
        }
    }

    if (humanChoice.toLowerCase() === 'paper') {
        if (computerChoice.toLowerCase() === 'paper') {
            console.log("Computer chose: " + computerChoice);
            console.log("Tie");
            rounds += 1;
        } else if (computerChoice.toLowerCase() === 'scissors') {
            console.log("Computer chose: " + computerChoice);
            console.log("You lose...");
            computerScore += 1;
            rounds += 1;
        } else if (computerChoice.toLowerCase() === 'rock') {
            console.log("Computer chose: " + computerChoice);
            console.log("You win!");
            humanScore += 1;
            rounds += 1;
        }
    }

    if (humanChoice.toLowerCase() === 'rock') {
        if (computerChoice.toLowerCase() === 'rock') {
            console.log("Computer chose: " + computerChoice);
            console.log("Tie");
            rounds += 1;
        } else if (computerChoice.toLowerCase() === 'paper') {
            console.log("Computer chose: " + computerChoice);
            console.log("You lose...");
            computerScore += 1;
            rounds += 1;
        } else if (computerChoice.toLowerCase() === 'scissors') {
            console.log("Computer chose: " + computerChoice);
            console.log("You win!");
            humanScore += 1;
            rounds += 1;
        }
    }

    if (humanChoice.toLowerCase() != 'rock' && humanChoice.toLowerCase() != 'paper' && humanChoice.toLowerCase() != 'scissors') {
    }
}

function playGame() {
    while (rounds <= 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations!");
    } else {
        console.log("Better luck next time...");
    }
}

let rounds = 1;
let humanScore = 0;
let computerScore = 0;
playGame();
