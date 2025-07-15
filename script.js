const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const agree = document.getElementById('agree');
const startBtn = document.getElementById('startBtn');
const guessInput = document.getElementById('guess');
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');
const resultEl = document.getElementById('result');
const hintEl = document.getElementById('hint');
const scoreEl = document.getElementById('score');

let target, score;

startBtn.addEventListener('click', () => {
  if (!nameInput.value.trim() || !emailInput.value.trim()) {
    alert('Please enter your name and email.');
    return;
  }
  if (!agree.checked) {
    alert('Please agree to the terms and conditions.');
    return;
  }
  page1.style.display = 'none';
  page2.style.display = 'flex';
  startGame();
});

submitBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);
  if (!guess || guess < 1 || guess > 100) {
    resultEl.textContent = 'Enter a number between 1 and 100.';
    return;
  }

  score--;

  if (guess === target) {
    resultEl.textContent = `🎉 Congrats, ${nameInput.value}! You guessed it!`;
    hintEl.textContent = '';
    guessInput.disabled = true;
    submitBtn.disabled = true;
  } else {
    resultEl.textContent = 'Wrong guess.';
    hintEl.textContent = guess < target ? 'Try higher...' : 'Try lower...';
  }

  scoreEl.textContent = `Score: ${score}`;
});

resetBtn.addEventListener('click', startGame);

function startGame() {
  target = Math.floor(Math.random() * 100) + 1;
  score = 100;
  guessInput.value = '';
  guessInput.disabled = false;
  submitBtn.disabled = false;
  resultEl.textContent = '';
  hintEl.textContent = '';
  scoreEl.textContent = `Score: ${score}`;
}
