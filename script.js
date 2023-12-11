const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    
    random_num = Math.floor(Math.random() * 3);
    console.log(choice[random_num]);
    return choice[random_num];
}

function playOneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    result = ''
    if (playerSelection == computerSelection) {
        alert(`It is a draw. Both you and the computer chose ${computerSelection}`);
        return result = 'draw';
    }
    else if (
        playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'scissors' && computerSelection == 'rock' ||
        playerSelection == 'paper' && computerSelection == 'scissors'
        ) {
        alert(`You lose. ${computerSelection} beats ${playerSelection}`);
        return result = 'lose';
    }

    else if (
        computerSelection == 'rock' && playerSelection == 'paper' ||
        computerSelection == 'scissors' && playerSelection == 'rock' ||
        computerSelection == 'paper' && playerSelection == 'scissors'
        ) {
        alert(`You win. ${playerSelection} beats ${computerSelection}`);
        return result = 'win';
    }
}

function game(rounds) {
    for(let i = 0; i < rounds; i++) {
        let playerSelection;
        do {
            playerSelection = prompt('Choose between Rock, Paper & Scissors')
            if (choice.includes(playerSelection.toLowerCase())) {
                break;
            }
        }
        while (true);
        const computerSelection = getComputerChoice();
        playOneRound(playerSelection, computerSelection)
    }
}


//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
const rounds = Number(prompt('How many rounds do you want to play'));
game(rounds);
//console.log(playOneRound(playerSelection, computerSelection));