const rulesButton = document.querySelector(".rules-btn");
const rulesScreen = document.querySelector(".rules");

rulesButton.addEventListener("click", () => {
  rulesScreen.classList.remove("hidden");
});

const checkRulesButton = document.querySelector(".check-button");
checkRulesButton.addEventListener("click", () => {
  rulesScreen.classList.add("hidden");
});
