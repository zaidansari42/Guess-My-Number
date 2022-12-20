'use strict';

const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const again = document.querySelector('.again');

check.addEventListener('click', () => {
  runCheck();
});

guess.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    runCheck();
  }
});

let secretNumber;

let currentScore;

reset();

function scoreReduce() {
  currentScore--;
  score.textContent = currentScore;
}

function runCheck() {
  if (guess.value > 0 && guess.value <= 20) {
    if (secretNumber === Number(guess.value)) {
      message.textContent = "Congrats You've guessed the right number";

      document.body.style.backgroundColor = 'rgb(13, 180, 0)';
      number.textContent = secretNumber;

      highscore.textContent = currentScore;

      number.textContent = secretNumber;
    } else if (secretNumber > Number(guess.value)) {
      message.textContent = 'Too low!! Try again.....';

      scoreReduce();
      guess.value = '';
    } else if (secretNumber < Number(guess.value)) {
      message.textContent = 'Too High!! Try again.....';
      scoreReduce();
      guess.value = '';
    }
  } else {
    message.textContent =
      'You Number is not between 1 and 20. Please check and try again';
  }
}

function reset() {
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  currentScore = 20;
  score.textContent = currentScore;

  document.body.style.backgroundColor = '#222';

  guess.value = '';

  message.textContent = 'Start guessing...';
  number.textContent = '?';
}

again.addEventListener('click', reset);
