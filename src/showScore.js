const main = document.querySelector("main");

const showScore = () => {
  main.innerHTML = `<div class="LeaderBoard-list">
    <div class="recent">
      <h2>Recent Score</h2>
      <button id="refreshBtn">Refresh</button>
    </div>
    <table class="score-list">
    <tbody class="table-body"></tbody>
    </table>
    </div>`;
};

export default showScore;
