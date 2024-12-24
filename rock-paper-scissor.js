// Select elements from the DOM
const buttons = document.querySelectorAll("button");
const selectedChoiceDiv = document.getElementById("selectedChoice");
const computerChoiceDiv = document.getElementById("computerChoice");
const scoreDiv = document.createElement("div");
const resultDiv = document.createElement("div");

// Append score and result sections to the body
document.body.appendChild(scoreDiv);
document.body.appendChild(resultDiv);

// Choices for the game
const choices = ["rock", "paper", "scissor"];

// Initialize scores
let userScore = 0;
let computerScore = 0;

// Function to get the computer's choice randomly
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    userScore++;
    return "You win!";
  } else {
    computerScore++;
    return "Computer wins!";
  }
}

// Function to check for the overall winner
function checkForWinner() {
  if (userScore === 5) {
    resultDiv.textContent = "Congratulations! You are the first to reach 5 wins!";
    resetGame();
  } else if (computerScore === 5) {
    resultDiv.textContent = "Computer is the first to reach 5 wins. Better luck next time!";
    resetGame();
  }
}

// Function to reset the game
function resetGame() {
  userScore = 0;
  computerScore = 0;
  scoreDiv.textContent = "Scores reset. Start a new game!";
  selectedChoiceDiv.textContent = "";
  computerChoiceDiv.textContent = "";
}

// Event listener for user clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.id;
    const computerChoice = getComputerChoice();

    // Display choices
    selectedChoiceDiv.textContent = `You selected: ${userChoice}`;
    computerChoiceDiv.textContent = `Computer selected: ${computerChoice}`;

    // Determine winner and update score
    const result = determineWinner(userChoice, computerChoice);
    scoreDiv.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`;

    // Check for the overall winner
    checkForWinner();
  });
});
