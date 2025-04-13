// This file is for the game logic of tic tac toe board

function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  gameOverAreaElement.firstElementChild.innerHTML =
    'You won <span id="winner-name">PLAYER NAME</span>!';
  gameOverAreaElement.style.display = "none";
  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItem = gameBoardElement.children[gameBoardIndex];
      gameBoardItem.textContent = "";
      gameBoardItem.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
  gameOverFlag = false;
}

function startNewGame() {
  if (!players[0].name || !players[1].name) {
    alert("Please set custom player names for both players!");
    return;
  }
  resetGameStatus();
  gameAreaElement.style.display = "block";
  activePlayerElement.textContent = players[activePlayer].name;
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (gameOverFlag) {
    return;
  }
  const currentField = event.target;
  if (currentField.textContent) {
    alert("Please select an empty field!");
    return;
  }
  currentField.textContent = players[activePlayer].symbol;
  currentField.classList.add("disabled");

  const currentColumn = event.target.dataset.col - 1;
  const currentRow = event.target.dataset.row - 1;
  gameData[currentRow][currentColumn] = activePlayer + 1;

  // console.log(gameData);
  const winnerId = checkForGameOver();

  if (winnerId) {
    gameEnd(winnerId);
  }
  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  // Check the rows for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  // Check the columns for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  // Check for diagonal equality
  // left top to right bottom
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  // right top to bottom left
  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[0][2];
  }
  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function gameEnd(winnerId) {
  gameOverAreaElement.style.display = "block";
  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    console.log(winnerName)
    const gameOverWinnerElement = document.getElementById("winner-name")
    gameOverWinnerElement.textContent = winnerName;
  } else {
    gameOverAreaElement.firstElementChild.textContent = "It's a draw!";
  }
  gameOverFlag = true;
}
