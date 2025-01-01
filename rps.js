function getComputerChoice() {
    let x = Math.random();
    if (x < 0.33) {
        return "rock";
    } else if (x <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose Rock, Paper, or Scissors: ").toLowerCase();
    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else if (humanChoice === "scissors") {
        return "scissors";
    } else {
        return getHumanChoice()
    }
}

let outcomeDiv = document.querySelector(".outcome");
outcomeDiv.textContent = "Press any button to start a new game. You will play to 5."
let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    if (computerChoice === "rock" && humanChoice === "paper") {
        outcomeDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        outcomeDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        outcomeDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        outcomeDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;        
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        outcomeDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++; 
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        outcomeDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    } else {
        outcomeDiv.textContent = `Tie! Both picked ${computerChoice}`;
    };
    scoreDiv.textContent = `You: ${humanScore} - Computer: ${computerScore}`;

    if (humanScore === 5) {
        outcomeDiv.textContent = `You win! ${humanScore} to ${computerScore}. Press any button to play again.`;
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        outcomeDiv.textContent = `You lose! ${humanScore} to ${computerScore}. Press any button to play again.`;
        humanScore = 0;
        computerScore = 0; 
    };
}

let scoreDiv = document.querySelector(".score");
scoreDiv.textContent = "You: 0 - Computer: 0";


let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

let body = document.querySelector("body");
body.addEventListener('click', (event) => {
    let target = event.target;
    playRound(getComputerChoice(), target.id)
})





