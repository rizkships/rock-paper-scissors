/* this function will randomly return rock, paper, or scissors */

let playerScore = 0 
let computerScore = 0

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
        playerScore += 1 ;
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
        
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1 ;
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
        
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}` 
        
    }
    else {
        computerScore += 1 ;
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}` 
        
    }


}



    


/* Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. */ 

function game(playRound) {
    while (playerScore < 5 && computerScore < 5) {
    const playerSelection = prompt("Choose rock, paper, scissors.").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    }
}

game(playRound)

