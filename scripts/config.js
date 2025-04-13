// This file is for configuration and functions regarding config

function openPlayerConfig(event) {
  const selectedPlayerId = +event.target.dataset.playerid; // get the data attribute from html element
  editedPlayer = selectedPlayerId; // save the player id in a variable
  console.log(editedPlayer);
  playerConfigOverlay.style.display = "block";
  playerConfigBackdrop.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlay.style.display = "none";
  playerConfigBackdrop.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "" //reset input
}

function savePlayerConfig(event) {
  event.preventDefault(); //prevents page reload when submitting form
  const formData = new FormData(event.target); //instance FormData class and extract form data
  const enteredPlayerName = formData.get("name").trim(); // get the inputed data minus whitespaces before or after string

  if (!enteredPlayerName) {
    // if user entered only whitespace
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  ); //construct id dinamically
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName; //save player name for later use
  closePlayerConfig();
}


