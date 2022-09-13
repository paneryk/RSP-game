const weapons = ['rock', 'scissors', 'paper'];

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "draw";
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "player";
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "computer";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "player";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "computer";
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "player";
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "computer";
    }
}

function game() {

    let userPoints = 0;
    let computerPoints = 0; 

    for (let i=0; i < 5; i++) {
        let getComputerChoice = (array) => array[Math.floor(Math.random()*array.length)];
        let computerChoice = getComputerChoice(weapons);
        let userChoice = (prompt("Choose your weapon: rock, scissors or paper:")).toLowerCase();

        let result = playRound(userChoice, computerChoice);

        if (result == "player") {
            console.log("The winner of round no "+(i+1)+" is PLAYER! He played "+userChoice+" agains computer's "+computerChoice);
            userPoints = userPoints+1;
            console.log("Total score: player - "+userPoints+", computer - "+computerPoints);
        }
        else if (result == "computer") {
            console.log("The winner of round no "+(i+1)+" is COMPUTER! It played "+computerChoice+" agains player's "+userChoice);
            computerPoints = computerPoints+1;
            console.log("Total score: player - "+userPoints+", computer - "+computerPoints);
        }
        else if (result == "draw") {
            console.log("We have a DRAW in round no "+(i+1)+"! Computer and player both played "+computerChoice);
            console.log("Total score: player - "+userPoints+", computer - "+computerPoints);
        }
    }
if (computerPoints > userPoints) {
    console.log("The winner of 5 turn game is a COMPUTER! It has won by "+(computerPoints-userPoints)+" points.");
}
else if (userPoints > computerPoints) {
    console.log("The winner of 5 turn game is a PLAYER! He won by "+(userPoints-computerPoints)+ "points.");
}
else {
    console.log("We have a draw! Final result is"+userPoints+":"+computerPoints);
}
}

game();

