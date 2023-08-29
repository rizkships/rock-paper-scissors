/* this function will randomly return rock, paper, or scissors */

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    };

}

/* this function will play a single round */

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection == "paper") {
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}` ;
    }
    if (playerSelection === "rock" && computerSelection == "scissors") {
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}` ;
    }
    if (playerSelection === "rock" && computerSelection == "rock") {
        return `Tie!` ;
    }
    if (playerSelection === "scissors" && computerSelection == "paper") {
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}` ;
    }
    if (playerSelection === "scissors" && computerSelection == "rock") {
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}` ;
    }
    if (playerSelection === "scissors" && computerSelection == "scissors") {
        return `Tie!` ;
    }
    if (playerSelection === "paper" && computerSelection == "rock") {
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}` ;
    }
    if (playerSelection === "paper" && computerSelection == "scissors") {
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}` ;
    }
    if (playerSelection === "paper" && computerSelection == "paper") {
        return `Tie!` ;
    }
}
const playerSelection = prompt("Choose rock, paper, scissors.").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

