const displayScores = (scoresArr) => {
  const tbody = document.querySelector('.table-body');
  tbody.innerHTML = '';
  scoresArr.forEach((userScore) => {
    tbody.innerHTML += `<tr><li>${userScore.user}: ${userScore.score}</li></tr>`;
  });
};

export default displayScores;
