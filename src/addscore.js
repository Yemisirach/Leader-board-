const main = document.querySelector("main");

const addScoresForm = () => {
  main.innerHTML += `
  <div class="addleaderboard">
  <h2>Add Your score</h2>
  <form action="">
    <input
      type="text"
      name="name"
      class="form-control"
      id="name"
      placeholder="name"
    />
    <input
      type="number"
      name="score"
      class="form-control"
      id="score"
      placeholder="score"
    />
    <button class="add-Btn" id="btn">Add</button>
  </form>
  </div>`;
};

export default addScoresForm;
