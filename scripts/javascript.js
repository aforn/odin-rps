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