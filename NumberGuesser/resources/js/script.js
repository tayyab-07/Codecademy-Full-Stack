let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, compGuess, secTarget) {
  humanAcc = Math.abs(secTarget - humanGuess);
  compAcc = Math.abs(secTarget - compGuess);

  if (humanAcc === compAcc) {
    return true;
  }
  else if (humanAcc < compAcc) {
    return true;
  }
  else if (compAcc < humanAcc) {
    return false;
  }
}

function updateScore(str) {
  if (str === 'human') {
    humanScore++;
  }
  else if (str == 'computer') {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}