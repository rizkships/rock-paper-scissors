/* this function will randomly return rock, paper, or scissors */


const computerSelectionDisplay = document.getElementById('computer-choice')
const playerSelectionDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const playerScoreDisplay = document.getElementById('player-score')
const computerScoreDisplay = document.getElementById('computer-score')
const possibleChoices = document.querySelectorAll('button')


let playerScore = 0 
let computerScore = 0
let playerSelection
let computerSelection
let result 



possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    
    playerSelection = e.target.id
    console.log(playerSelection)
    playerSelectionDisplay.innerHTML = playerSelection // rules logic breaks down when I swap .innerHTML with .textContent but why?
    getComputerChoice()
    console.log(computerSelection)
    //computerSelectionDisplay.textContent = computerSelection
    //playerScoreDisplay.textContent = playerScore
    //computerScoreDisplay.textContent = computerScore
   // console.log(playerScore)
   // console.log(computerScore)
    console.log(playRound()) 
    // How to append selections, scores, and results 
    //console.log(playRound())
    

    
}
))


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3);
  
  if (randomNumber === 0) {
    computerSelection = "rock"
  }
  if (randomNumber === 1) {
    computerSelection = "scissors"
  }
  if (randomNumber === 2) {
    computerSelection = "paper"
  }
  computerSelectionDisplay.textContent = computerSelection 
}



function playRound(){
    if (playerSelection === computerSelection) {
        result = "Tie Game!"
        
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1 ;
        result = `You win! ${playerSelection} beats ${computerSelection}`
        
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1 ;
        result = `You win! ${playerSelection} beats ${computerSelection}`
        
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        result = `You win! ${playerSelection} beats ${computerSelection}` 
        
    }
    else {
        computerScore += 1 ;
        result = `You lose! ${computerSelection} beats ${playerSelection}` 
        
    }

    resultDisplay.innerHTML = result
    playerScoreDisplay.innerHTML = playerScore
    computerScoreDisplay.innerHTML = computerScore
}



/* this function will play a single round 

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

