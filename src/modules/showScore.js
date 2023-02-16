const main = document.querySelector('main');

const showScore = () => {
  main.innerHTML = `<div class="LeaderBoard-list">
    <div class="recent">
      <h2>Recent Score</h2>
      <button type="button" id="refreshBtn">Refresh</button>
    </div>
    <table class="score-list">
    <ul class="table-body"></ul>
    </table>
    </div>`;
};

export default showScore;
