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

let rockButton = document.createElement("button");
rockButton.textContent = "Rock";
let paperButton = document.createElement("button");
paperButton.textContent = "Paper";
let scissorsButton = document.createElement("Button");
scissorsButton.textContent = "Scissors";


rockButton.addEventListener("click", () => {
    playRound(getComputerChoice(), "rock");
});
paperButton.addEventListener("click", () => {
    playRound(getComputerChoice(), "paper");
});
scissorsButton.addEventListener("click", () => {
    playRound(getComputerChoice(), "scissors");
});

let body = document.querySelector("body");
body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);



