const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    
    random_num = Math.floor(Math.random() * 3);
    //console.log(choice[random_num]);
    return choice[random_num];
}

let result = '';
let playerPoints = 0;
let computerPoints = 0;

function playOneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result = ''
    if (playerSelection == computerSelection) {
        
        result = 'draw';
        
        results.textContent = `Computer points: ${computerPoints}\nPlayer points : ${playerPoints}`
    }
    else if (
        playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'scissors' && computerSelection == 'rock' ||
        playerSelection == 'paper' && computerSelection == 'scissors'
        ) {
        computerPoints ++;
        result = 'lose';
        
    }

    else if (
        computerSelection == 'rock' && playerSelection == 'paper' ||
        computerSelection == 'scissors' && playerSelection == 'rock' ||
        computerSelection == 'paper' && playerSelection == 'scissors'
        ) {
        playerPoints++;
        result = 'win';
        
    }
    
    results.textContent = `Results: ${result}
    Computer points: ${computerPoints}
    Player points\n${playerPoints}`;

    if (playerPoints == 5) {
        gameWinner = document.createTextNode('You are the winner');
        results.appendChild(gameWinner)
    }
    else if (computerPoints == 5) {
        gameWinner = document.createTextNode('The computer is the winner');
        results.appendChild(gameWinner)
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
const points = Number(prompt('How many points do you want to play to'));
//game(points);
//console.log(playOneRound(playerSelection, computerSelection));






//Buttons for player option

const playerDiv = document.querySelector('#playerDiv');

const playerButtonsDiv = document.createElement('div');
playerButtonsDiv.textContent = 'Choose one:';

playerDiv.appendChild(playerButtonsDiv);

const rockSelection = document.createElement('button');
rockSelection.textContent = 'Rock';

const paperSelection = document.createElement('button');
paperSelection.textContent = 'Paper';

const scissorsSelection = document.createElement('button');
scissorsSelection.textContent = 'Scissors';


playerButtonsDiv.appendChild(rockSelection);
playerButtonsDiv.appendChild(paperSelection);
playerButtonsDiv.appendChild(scissorsSelection);


//buttons event listeners
rockSelection.addEventListener('click', () => {
    playOneRound('rock', getComputerChoice());
});

paperSelection.addEventListener('click', () => {
    playOneRound('paper', getComputerChoice());
});

scissorsSelection.addEventListener('click', () => {
    playOneRound('scissors', getComputerChoice());
});


// Display results
const resultsDiv = document.querySelector('#resultsDiv');
const results = document.createElement('div');
results.textContent = `Results:`;

resultsDiv.appendChild(results);

