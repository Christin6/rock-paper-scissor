/* 
Initialize variable playerScore = 0
Initialize variable botScore = 0
Initialize variable message

Function getComputerChoice
    return random rock/paper/scissor choice

Function playRound, take returned value of getComputerChoice and player choice
    if player win:
        playerScore increase by 1
        message = you win, ... beats ...!
    if player lose:
        botScore increase by 1
        message = you lose, ... beats ...!
    if draw:
        message = draw!

    return win or lose
        *case insensitive

Function game
    playRound * 5
    console log of the result of each playRound
    console log the score at the end and the winner (or draw)
 */

let playerScore = 0;
let botScore = 0;
let choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(pChoice, bChoice) {
    if (pChoice === "rock" && bChoice === "rock") {
        return `You pick ${pChoice}, computer picks ${bChoice}. Draw!`;
    } else if (pChoice === "rock" && bChoice === "paper") {
        return `You pick ${pChoice}, computer picks ${bChoice}. You lose!`;
    } else if (pChoice === "rock" && bChoice === "scissor") {
        return `You pick ${pChoice}, computer picks ${bChoice}. You win!`;

    } else if (pChoice === "paper" && bChoice === "rock") {
        return `You pick ${pChoice}, computer picks ${bChoice}. You win!`;
    } else if (pChoice === "paper" && bChoice === "paper") {
        return `You pick ${pChoice}, computer picks ${bChoice}. Draw!`;
    } else if (pChoice === "paper" && bChoice === "scissor") {
        return `You pick ${pChoice}, computer picks ${bChoice}. You lose!`;

    } else if (pChoice === "scissor" && bChoice === "rock") {
        return `You pick ${pChoice}, computer picks ${bChoice}. You lose!`;
    } else if (pChoice === "scissor" && bChoice === "paper") {
        return `You pick ${pChoice}, computer picks ${bChoice}. You win!`;
    } else if (pChoice === "scissor" && bChoice === "scissor") {
        return `You pick ${pChoice}, computer picks ${bChoice}. Draw!`;
    }

    else {
        return "You write incorrectly, this round will be considered draw!"
    }
}

function game() {
    for(let i = 0; i <= 4; i++) {
        let playerInput = prompt("Write your selection: ");
        playerInput.toLocaleLowerCase();
        let message = playRound(playerInput, getComputerChoice());
        console.log(message);
        if (message.includes("You lose")) {
            botScore++;
        } else if (message.includes("You win")) {
            playerScore++;
        }
    }
    console.log(`player score: ${playerScore}
computer score: ${botScore}`);
    if (playerScore > botScore) {
        console.log("You win!");
    } else if (playerScore < botScore) {
        console.log("You lose!");
    } else {console.log("It's draw!")}
}

game();