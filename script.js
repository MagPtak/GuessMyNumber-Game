'use strict';

const showMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const showScore = function (score) {
  document.querySelector('.score').textContent = score;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //Brak wartosci w inpucie
  if (!guess) {
    showMessage('No number');

    //Gracz wygrywa
  } else if (guess === secretNumber) {
    showMessage('Correct number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Podana liczba jest nieprawidłowa
  } else if (guess !== secretNumber) {
    if (score > 1) {
      showMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      showScore(score);
    } else {
      showMessage('You lost');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Button again
document.querySelector('.again').addEventListener('click', function () {
  //   location.reload();

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  showMessage('Start guessing');
  showScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
});
