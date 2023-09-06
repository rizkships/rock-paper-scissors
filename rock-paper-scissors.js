/* this function will randomly return rock, paper, or scissors */

let playerScore = 0 
let computerScore = 0
let playerSelection
let computerSelection

const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerSelection = e.target.id
    computerSelection = getComputerChoice()
    console.log(playRound())
    
    console.log(playerSelection)
    console.log(computerSelection)
    
    console.log(playerScore) 
    console.log(computerScore)

    
}
))


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

function playRound(){
    if (playerSelection === computerSelection) {
        return "Tie Game!"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1 ;
        return `You win! ${playerSelection} beats ${computerSelection}`
        
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1 ;
        return `You win! ${playerSelection} beats ${computerSelection}`
        
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}` 
        
    }
    else {
        computerScore += 1 ;
        return `You lose! ${computerSelection} beats ${playerSelection}` 
        
    }


}


// create three buttons, one for each selection (rock,paper, or scissors)



/*
function rock() {
    const computerSelection = getComputerChoice();
  playRound('rock', computerSelection);
};

rockButton.addEventListener('click', rock); 


 */




/* Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. 

function game(playRound) {
    while (playerScore < 5 && computerScore < 5) {
    const playerSelection = prompt("Choose rock, paper, scissors.").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    }
}

game(playRound)

*/ 

