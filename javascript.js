function getComputer() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        console.log(choice);
        return 'rock';
    } else if (choice === 1) {
        console.log(choice);
        return 'paper';
    } else if (choice === 2) {
        console.log(choice);
        return 'scissors';
    } else {
        console.log(choice);
        return null;
    }

}

function playRound(playerChoice, computerChoice) {
    computerChoice = getComputer();
    playerChoice = prompt("Choose rock, paper, or scissors!", getComputer());
    
    playerChoice.toLowerCase;

    console.log('You played ' + playerChoice);

    if (computerChoice === 'rock') {
        if(playerChoice === 'rock') {
            return "You both played rock! It's a draw!";
        } else if(playerChoice === 'paper') {
            playerScore += 1;
            return "You win! Paper covers rock!";
        } else if(playerChoice === 'scissors') {
            computerScore += 1;
            return "You lose! Rock smashes scissors.";
        } else {
            return null;
        }
    } else if (computerChoice === 'paper') {
        if(playerChoice === 'rock') {
            computerScore += 1;
            return "You lose! Paper covers rock.";
        } else if(playerChoice === 'paper') {
            return "You both played paper! It's a draw!";
        } else if(playerChoice === 'scissors') {
            playerScore += 1;
            return "You win! Scissors cut paper!";
        } else {
            return null;
        }
    } else if (computerChoice === 'scissors') {
        if(playerChoice === 'rock') {
            playerScore += 1;
            return "You win! Rock smashes scissors!";
        } else if(playerChoice === 'paper') {
            computerScore += 1;
            return "You lose! Scissors cut paper.";
        } else if(playerChoice === 'scissors') {
            return "You both played scissors! It's a draw!";
        } else {
            return null;
        }
    }
}

function playGame() {
    for(i=0; i<5; i++) {
        console.log(playRound());
        console.log("Computer Score: " + computerScore);
        console.log("Player Score: " + playerScore);
    }
    if (playerScore === computerScore) {
        playRound();
    }
        
    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > playerScore) {
        console.log("You lose!");
    } else {
        return null;
    }
}

let playerScore = 0;
let computerScore = 0;

playGame();