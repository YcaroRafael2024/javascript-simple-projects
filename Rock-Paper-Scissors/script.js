const playerRockButton = document.getElementById("rock");
const playerPaperButton = document.getElementById("paper");
const playerScissorsButton = document.getElementById("scissors");

let playerChoice = document.querySelector(".playerchoice button");
let aiChoice = document.querySelector(".aichoice button");

const scoreboard = document.querySelectorAll(".scoreboard > div");
let playerCount = document.getElementById("playercount");
let drawCount = document.getElementById("drawcount");
let aiCount = document.getElementById("aicount");

let playerMove = null;
let aiMove = null;
const moves = ["rock", "paper", "scissors"];
let movesImages = new Map();
movesImages.set("rock", "images/rock.svg");
movesImages.set("paper", "images/paper.svg");
movesImages.set("scissors", "images/scissors.svg");

playerRockButton.addEventListener("click", () => { playerMoves(playerRockButton) });
playerPaperButton.addEventListener("click", () => { playerMoves(playerPaperButton) });
playerScissorsButton.addEventListener("click", () => { playerMoves(playerScissorsButton) });

function playerMoves(playerButton) {
    restartGame();
    playerMove = playerButton.id;
    playerChoice.innerHTML = playerButton.innerHTML;
    aiMoves();
}

function aiMoves() {
    aiMove = moves[Math.floor(Math.random() * 3)];
    aiChoice.innerHTML = `<img src="${movesImages.get(aiMove)}">`;
    calculateWinner();
}

function calculateWinner() {
    let count = null;
    if (playerMove === "rock") {
        count = aiMove === "paper" ? aiCount : (aiMove === "scissors" ? playerCount : drawCount);
    } else if (playerMove === "paper") {
        count = aiMove === "scissors" ? aiCount : (aiMove === "rock" ? playerCount : drawCount);
    } else {
        count = aiMove === "rock" ? aiCount : (aiMove === "paper" ? playerCount : drawCount);
    }
    count.innerHTML++;
    highlightCount(document.querySelector(`.scoreboard > div:has(span#${count.id}`));
}

function highlightCount(count) {
    for (let i = 0; i < scoreboard.length; i++) {
        scoreboard[i].classList.remove("highlight");
    }
    count.classList.add("highlight");
}

function restartGame() {
    playerMove = null;
    aiMove = null;
}