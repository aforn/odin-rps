/*
Create three buttons, one for each selection. Add an
 event listener to the buttons that call your playRound
  function with the correct playerSelection every time
   a button is clicked. (you can keep the console.logs 
   for this step)
*/

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

/*
Add a div for displaying results and change all of your
 console.logs into DOM methods.
*/

let results = document.getElementsByClassName('results-container');
let winner = document.getElementById('winner');
//let score = document.getElementById('score-container');

let playerScoreDisplay = document.getElementById('player-score');
let playerScore = 0;
playerScoreDisplay.textContent = playerScore;
let playerSelection;

let computerScoreDisplay = document.getElementById('computer-score');
let computerScore = 0;
computerScoreDisplay.textContent = computerScore;
let computerSelection;

/*
buttons call playRound() and tally(). tally() gets called with
 results of playRound() and displays result and
 totals as well as scores when finished
 */
rockButton.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});
paperButton.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});



/*
getComputerChoice that will randomly return either
‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function
in the game to make the computer’s play.
*/

function getComputerChoice() {
    switch (Math.ceil(Math.random()*3)) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
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
        |___rock____|___paper___|_scissors__|
rock    |    tie    |     L     |     W     |
        |     ~     |     ~     |     ~     |
paper   |     W     |    tie    |     L     |
        |     ~     |     ~     |     ~     |
scissors|     L     |     W     |    tie    |

*/

function playRound(playerSelection, computerSelection) {
    //check for tie
    if (playerSelection === computerSelection) {
        winner.textContent = "It's a tie!";
        console.log("it's a tie!");
    }

    //check if player has "rock", check computer choice
    else if (playerSelection === "rock") { 
        if (computerSelection === "paper") {
            tally("loose");
        } else {
            tally("win");
        }
    
    //check if player has "paper", check computer choice
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            tally("win");2
        } else {
            tally("loose");
        }
    
    //player has "scissors", check computer choice
    } else {
        if (computerSelection === "rock") {
            tally("loose");
        }
            tally("win");
    }

    /*
    Tally score and updates score board. Display winner/loser
     message if score reaches 5 for either player.
    */
    function tally(result) {
        //increment scores and update score board
        if (result === "win") {
            winner.textContent = `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`;  
            playerScore++;
            playerScoreDisplay.textContent = playerScore;

            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);

        } else if ( result === "loose") {
            winner.textContent = `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`;
            computerScore++;
            computerScoreDisplay.textContent = computerScore;

            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        }

        if (playerScore === 5 || computerScore === 5) {
            winner.textContent = `GOOD GAME! ${playerScore === 5 ? "Player" : "Computer"} takes the cake.`
            
            playerScore = 0;
            computerScore = 0;

            playerScoreDisplay.textContent = playerScore;
            computerScoreDisplay.textContent = computerScore;
        }
    }
}