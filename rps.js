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