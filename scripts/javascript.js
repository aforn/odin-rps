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
 Make your function’s playerSelection parameter case-insensitive
(so users can input rock, ROCK, RocK or any other variation).

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

    //error check player input
    if (!(playerTest === "rock" || playerTest === "paper" || playerTest === "scissors")) {
        throw new Error("Need to enter 'rock', 'paper', or 'scissors'. Check your spelling and punctuation. Always.");
    }

    //check for tie
    if (playerTest === computerTest) {
        return "It's a tie!";
    }

    //message functions
    function youLooseMessage() {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    function youWinMessage() {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    //check if player has "rock", check computer choice
    if (playerTest === "rock") { 
        return (computerTest === "paper") ?
            youLooseMessage() :
            youWinMessage();
    
    //check if player has "paper", check computer choice
    } else if (playerTest === "paper") {
        return (computerTest === "rock") ?
            youWinMessage() :
            youLooseMessage();
    
    //player has "scissors", check computer choice
    } else {
        return (computerTest === "rock") ?
            youLooseMessage() :
            youWinMessage();
    }
}