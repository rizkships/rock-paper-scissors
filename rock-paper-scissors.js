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
    if (playerSelection == computerSelection) {
        return "Tie Game!"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}` ;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}` ;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}` ;
    }
    else {
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}` 
    }


}



    
const playerSelection = prompt("Choose rock, paper, scissors.").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

/* Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. */ 

