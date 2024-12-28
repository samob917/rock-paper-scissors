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
let computerChoice = getComputerChoice();
console.log(computerChoice);
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
let humanChoice = getHumanChoice();
console.log(humanChoice);

function playRound(computerChoice, humanChoice) {
    if (computerChoice === "rock" && humanChoice === "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;        
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++; 
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else {
        console.log(`Tie! Both picked ${computerChoice}`);
    };
}

let humanScore = 0;
let computerScore = 0;
console.log(humanScore);
console.log(computerScore);

playRound(computerChoice, humanChoice);
console.log(humanScore);
console.log(computerScore);