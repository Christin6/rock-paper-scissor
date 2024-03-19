let playerScore = 0;
let botScore = 0;
let choices = ["rock", "paper", "scissor"];

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");

const gameRound = document.getElementById("game-round");
const scoreBoard = document.getElementById("score-board");
const winOrLose = document.getElementById("win-or-lose");

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
        return "Something is wrong, this round will be considered draw!"
    }
}

function game(pChoice) {
    if (botScore < 5 && playerScore < 5) {
        let message = playRound(pChoice, getComputerChoice());
        console.log(message);
        if (message.includes("You lose")) {
            botScore++;
        } else if (message.includes("You win")) {
            playerScore++;
        }
        gameRound.innerHTML = message;
        scoreBoard.innerHTML = `player score: ${playerScore} |
        computer score: ${botScore}`;
    }

    if (botScore == 5 && botScore > playerScore) {
        winOrLose.innerHTML = "You lose";
    } else if (playerScore == 5 &&  botScore < playerScore) {
        winOrLose.innerHTML = "You win";
    }
}

rockBtn.addEventListener("click", () => {
    game("rock");
});
paperBtn.addEventListener("click", () => {
    game("paper");
});
scissorBtn.addEventListener("click", () => {
    game("scissor");
});