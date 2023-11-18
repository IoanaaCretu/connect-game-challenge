const rulesButton = document.querySelector(".rules-btn");
const rulesScreen = document.querySelector(".rules");

rulesButton.addEventListener("click", () => {
  rulesScreen.classList.remove("hidden");
});

const checkRulesButton = document.querySelector(".check-button");
checkRulesButton.addEventListener("click", () => {
  rulesScreen.classList.add("hidden");
});

const mainMenu = document.querySelector(".main-menu");
const gameContainer = document.querySelector(".game");
const displayGameBoardButton = document.querySelector(".pvp-btn");

displayGameBoardButton.addEventListener("click", () => {
  mainMenu.classList.add("hidden");
  gameContainer.classList.remove("hidden");

  document.body.style.backgroundColor = "#7945ff";
});

/* // start game button

document.querySelector(".play-btn").addEventListener("click", () => {
  playGame();
});

// restart game button

document.querySelector("restart-btn").addEventListener("click", () => {
  restartGame();
}); */

//ingame menu open

const inGameMenu = document.querySelector(".ingame-menu");
document.querySelector(".menu-btn").addEventListener("click", () => {
  inGameMenu.classList.remove("hidden");
});
