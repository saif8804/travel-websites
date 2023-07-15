'use strict';
// selecting element
const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.getElementById('score--1');
const diceEll = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0el = document.querySelector('#current--0');
const current1el = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let currentscore, activeplayer, playing, scores;

const init = function () {
  scores = [0, 0];
  currentscore = 0;
  activeplayer = 0;
  playing = true;

  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  current0el.textContent = 0;
  current1el.textContent = 0;
  diceEll.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  currentscore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;

diceEll.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  if (playing) {
    //  generate a random dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    // dispaly dice
    diceEll.classList.remove('hidden');
    diceEll.src = `dice-${dice}.png`;

    // check for roll 1 if ! true

    if (dice !== 1) {
      // add dice to current score
      currentscore = currentscore + dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;

      // if true then switch to next user
    } else {
      switchplayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to active players score
    scores[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];

    // check if player score is >= 100
    // finish the Game
    if (scores[activeplayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
      diceEll.classList.add('hidden');
    } else {
      // switch to the next player
      switchplayer();
    }
  }
});

btnNew.addEventListener('click', init);
