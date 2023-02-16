import './index.css';
import showScore from './modules/showScore.js';
import addScoresForm from './modules/addscore.js';
import getAllScores from './modules/getScore.js';
import submitScore from './modules/submitScore.js';

showScore();
addScoresForm();
const form = document.querySelector('form');
const userNameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const refreshBtn = document.querySelector('#refreshBtn');
const successTxt = document.querySelector('.success');

// getAllScores();

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const score = {
    user: userNameInput.value,
    score: scoreInput.value,
  };
  userNameInput.value = '';
  scoreInput.value = '';
  await submitScore(score);
  successTxt.style.display = 'block';
  setTimeout(() => {
    successTxt.style.display = 'none';
  }, 2000);
});

refreshBtn.addEventListener('click', () => {
  getAllScores();
});
