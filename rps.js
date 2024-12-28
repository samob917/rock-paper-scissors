function getComputerChoice() {
    let x = Math.random();
    if (x < 0.33) {
        return "Rock";
    } else if (x <= 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
console.log(getComputerChoice())
function getHumanChoice() {
    let humanChoice = prompt("Choose Rock, Paper, or Scissors: ");
    if (humanChoice === "Rock") {
        return "Rock";
    } else if (humanChoice === "Paper") {
        return "Paper";
    } else if (humanChoice === "Scissors") {
        return "Scissors";
    } else {
        getHumanChoice()
    }
    return humanChoice
}

console.log(getHumanChoice())