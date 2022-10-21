/*
getComputerChoice that will randomly return either
‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function
in the game to make the computer’s play.
*/

function getComputerChoice() {
    switch (Math.ceil(Math.random()*3)) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            console.log("Anna check your random");        
    } 
}

/*
Write a function that plays a single round of Rock Paper
 Scissors. The function should take two parameters - the
 playerSelection and computerSelection - and then return 
 a string that declares the winner of the round like so: 
 "You Lose! Paper beats Rock"

Yours/Mine
        |___rock____|___paper___|_scissors__
rock    |    tie    |     L     |     W     |
        |     ~     |     ~     |     ~     |
paper   |     W     |    tie    |     L     |
        |     ~     |     ~     |     ~     |
scissors|     L     |     W     |    tie    |

*/

function playRound(playerSelection, computerSelection) {
    let playerTest = playerSelection.toLowerCase();
    let computerTest = computerSelection.toLowerCase();

    //check for tie
    if (playerTest === computerTest) {
        console.log("It's a tie!");
        return "tie";
    }

    //check if player has "rock", check computer choice
    if (playerTest === "rock") { 
        if (computerTest === "paper") {
            youLooseMessage();
            return "loose";
        } else {
            youWinMessage();
            return "win";
        }
    
    //check if player has "paper", check computer choice
    } else if (playerTest === "paper") {
        if (computerTest === "rock") {
            youWinMessage();
            return "win";
        } else {
            youLooseMessage();
            return "loose";
        }
    
    //player has "scissors", check computer choice
    } else {
        if (computerTest === "rock") {
            youLooseMessage();
            return "loose";
        }
            youWinMessage();
            return "win";
    }

    //message functions
    function youLooseMessage() {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }

    function youWinMessage() {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    }
}

/*
Write a NEW function called game(). Call the playRound
 function inside of this one to play a 5 round game that 
 keeps score and reports a winner or loser at the end.

At this point you should be using console.log() to display
 the results of each round and the winner at the end.
Use prompt() to get input from the user. Read the docs
 here if you need to.
Feel free to re-work your previous functions if you need
 to. Specifically, you might want to change the return 
 value to something more useful.
Feel free to create more “helper” functions if you think
 it would be useful.
*/

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let winner = "nobody";

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your play: ", "Rock");
        console.log(`round ${i + 1}, commence!`)

        //error check player input
        if (!(playerSelection.toLowerCase() === "rock" || 
                playerSelection.toLowerCase() === "paper" || 
                playerSelection.toLowerCase() === "scissors")) {
            alert("Need to enter 'rock', 'paper', or 'scissors'. Check your spelling and punctuation. Always.");
        }

        let result = playRound(playerSelection, getComputerChoice());

        if (result === "win") {
            playerScore++;
        } else if ( result === "loose") {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        winner = "player";
    } else if (playerScore < computerScore) {
        winner = "computer"
    }

    console.log("GOOD GAME!")
    console.log(`player score: ${playerScore}`);
    console.log(`computer score: ${computerScore}`);
    console.log(`${winner} wins`);
}