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
const startGameButton = document.querySelector(".play-btn");

startGameButton.addEventListener("click", () => {
  mainMenu.classList.add("hidden");
  gameContainer.classList.remove("hidden");

  document.body.style.backgroundColor = "#7945ff";
});
