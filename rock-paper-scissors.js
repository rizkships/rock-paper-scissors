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



