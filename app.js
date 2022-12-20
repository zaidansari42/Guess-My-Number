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

let secretNumber, currentScore;

let playerHighScore = 0;
highscore.textContent = playerHighScore;

reset();

function scoreReduce() {
  currentScore--;
  score.textContent = currentScore;
}

function runCheck() {
  let guessVal = Number(guess.value);

  if (guessVal > 0 && guessVal <= 20) {
    if (secretNumber === Number(guessVal)) {
      message.textContent = "Congrats You've guessed the right number";

      document.body.style.backgroundColor = '#60b347';
      number.textContent = secretNumber;

      highscore.textContent = currentScore;

      number.textContent = secretNumber;
    } else {
      if (currentScore > 1) {
        message.textContent =
          secretNumber > guessVal ? 'Too Low 👇' : 'Too High 👆';

        scoreReduce();
        guessVal = '';
      } else {
        message.textContent = 'Sorry. You have run out of Tries';

        score.textContent = 0;
      }
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
