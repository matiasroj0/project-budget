document.addEventListener("DOMContentLoaded", () => {
  loadSavedValues();
  updateProgress();
});

function calculateProgress() {
  const current = document.getElementById("current").value;
  const goal = document.getElementById("goal").value;

  if (current === "" || goal === "") {
    alert("Por favor, introduce ambos valores.");
    return;
  }

  if (goal == 0) {
    alert("La meta no puede ser cero.");
    return;
  }

  saveValues(current, goal);
  updateProgress();
}

function saveValues(current, goal) {
  localStorage.setItem("current", current);
  localStorage.setItem("goal", goal);
}

function loadSavedValues() {
  const savedCurrent = localStorage.getItem("current");
  const savedGoal = localStorage.getItem("goal");

  if (savedCurrent !== null) {
    document.getElementById("current").value = savedCurrent;
  }

  if (savedGoal !== null) {
    document.getElementById("goal").value = savedGoal;
  }
}

function updateProgress() {
  const current = document.getElementById("current").value;
  const goal = document.getElementById("goal").value;

  if (current !== "" && goal !== "" && goal != 0) {
    const progress = (current / goal) * 100;
    document.getElementById("result").innerText = `${progress.toFixed(2)}%`;
    document.getElementById("circleText").innerText = `${progress.toFixed(2)}%`;
  }
}
