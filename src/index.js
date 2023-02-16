import "./index.css";
import showScore from "./showScore.js";
import addScoresForm from "./addscore.js";

showScore();
addScoresForm();

const form = document.getElementById("form");
const userNameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const refreshBtn = document.getElementById("refreshBtn");
const successTxt = document.querySelector(".success");

base_url = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/";

getAllScore();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const score = {
    name: userNameInput.value,
    score: scoreInput.value,
  };

  await submitScore(score);
  successTxt.style.display = "block";
  setTimeout(() => {
    successTxt.style.display = "none";
  }, 2000);
});

refreshBtn.addEventListener("click", () => {
  getAllScore();
});
