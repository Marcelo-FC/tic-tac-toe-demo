// This file is used to select all the neccessary html elements and
// add event listeners

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameOverFlag = false

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
]

const playerConfigOverlay = document.getElementById("config-overlay");
const playerConfigBackdrop = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");

const startGameBtnElement = document.getElementById("start-game-btn");
const gameAreaElement = document.getElementById("active-game");

const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board")
const activePlayerElement = document.getElementById('active-player-name')

const gameOverAreaElement = document.getElementById('game-over')
//const gameOverWinnerElement = document.getElementById("winner-name")

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
playerConfigBackdrop.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startGameBtnElement.addEventListener("click", startNewGame);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}

// gameBoardElement.addEventListener('click', selectGameField)
