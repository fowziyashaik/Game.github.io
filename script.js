const page1 = document.getElementById("page1"),
      page2 = document.getElementById("page2"),
      nameInput = document.getElementById("name"),
      emailInput = document.getElementById("email"),
      agree = document.getElementById("agree"),
      startBtn = document.getElementById("startBtn"),
      guess = document.getElementById("guess"),
      submit = document.getElementById("submit"),
      reset = document.getElementById("reset"),
      result = document.getElementById("result"),
      hint = document.getElementById("hint"),
      scoreEl = document.getElementById("score");

let target, score;

startBtn.addEventListener("click", () => {
  if (!nameInput.value.trim() || !emailInput.value.trim()) {
    alert("Name & email are required.");
    return;
  }
  if (!agree.checked) {
    alert("Please agree to the terms.");
    return;
  }
  page1.style.display = "none";
  page2.style.display = "flex";
  startGame();
});

submit.addEventListener("click", () => {
  const value = Number(guess.value);
  if (!value || value < 1 || value > 100) {
    result.textContent = "Enter a number between 1 and 100.";
    return;
  }
  score--;
  if (value === target) {
    result.textContent = `🎉 Congrats, ${nameInput.value}! You guessed it!`;
    hint.textContent = "";
    guess.disabled = submit.disabled = true;
  } else {
    hint.textContent = value < target ? "Try higher..." : "Try lower...";
    result.textContent = "Wrong guess.";
  }
  scoreEl.textContent = `Score: ${score}`;
});

reset.addEventListener("click", startGame);

function startGame() {
  target = Math.floor(Math.random() * 100) + 1;
  score = 100;
  guess.value = "";
  guess.disabled = submit.disabled = false;
  result.textContent = "";
  hint.textContent = "";
  scoreEl.textContent = `Score: ${score}`;
}
