const weapons = ['rock', 'scissors', 'paper']; //array of computer choices
let i = 0; //i means turns played
let userPoints = 0;
let computerPoints = 0; 

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => game(button.id));
})
if (userPoints >= 5 || userPoints >= 5) {
    buttons.forEach((button) => {button.disabled = true;})
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) return "draw";
    else if (playerSelection == 'rock' && computerSelection == 'scissors') return "player";
    else if (playerSelection == 'rock' && computerSelection == 'paper') return "computer";
    else if (playerSelection == 'scissors' && computerSelection == 'paper') return "player";
    else if (playerSelection == 'scissors' && computerSelection == 'rock') return "computer";
    else if (playerSelection == 'paper' && computerSelection == 'rock') return "player";
    else if (playerSelection == 'paper' && computerSelection == 'scissors') return "computer";
}

function game(evt) {
    i += 1;
    console.log(i);

    let getComputerChoice = (array) => array[Math.floor(Math.random()*array.length)];
    let computerSelection = getComputerChoice(weapons);
    let playerSelection = evt;
    let result = playRound(playerSelection, computerSelection);
    const div = document.querySelector('#result');
    const consoleLog = document.createElement('div');
    const score = document.querySelector('#score');
    consoleLog.classList.add('consoleLog');

        if (result == "player") {
            userPoints = userPoints+1;
            consoleLog.textContent = "The winner of round no "+i+" is PLAYER! He played "+playerSelection+" agains computer's "+computerSelection;
            score.textContent = "Total score: player - "+userPoints+", computer - "+computerPoints;
        }
        else if (result == "computer") {
            computerPoints = computerPoints+1;
            consoleLog.textContent = "The winner of round no "+i+" is COMPUTER! It played "+computerSelection+" agains player's "+playerSelection;
            score.textContent = "Total score: player - "+userPoints+", computer - "+computerPoints;
        }
        else if (result == "draw") {
            consoleLog.textContent = "We have a DRAW in round no "+i+"! Computer and player both played "+computerSelection;
            score.textContent = "Total score: player - "+userPoints+", computer - "+computerPoints;
        }
    
    div.appendChild(consoleLog);

    if (userPoints>=5 || computerPoints >= 5) {
        let winner = '';
        if (computerPoints>userPoints) winner = "COMPUTER";
        else winner = "USER";
        consoleLog.innerHTML = "<b>END OF THE GAME. The winner of a "+(i-1)+" turns game is "+winner+"</b>";
        div.appendChild(consoleLog);
        buttons.forEach((button) => {button.disabled = true;})
    }
    let gameStatus = [userPoints, computerPoints]
    return gameStatus;
    
    } 

