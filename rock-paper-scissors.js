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
    playerSelectionDisplay.innerHTML = playerSelection // rules logic breaks down when I swap .innerHTML with .textContent but why?
    getComputerChoice()
    playRound()
    if (isGameOver()){
      setFinalMessage()
      restartGame()
    }
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


function setFinalMessage() {
  return playerScore > computerScore
  ? (resultDisplay.innerHTML = 'You won the game!')
  : (resultDisplay.innerHTML = 'You lost the game...')
}


function isGameOver() {
  return playerScore === 5 || computerScore === 5
}

function restartGame() {
  playerScore = 0
  computerScore = 0
}


