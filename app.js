// Create random number between 1 and 3
let randomNum = Math.floor(Math.random() * (4 - 1) + 1);

// Asign random number to rock, paper, or sissors
function computerPlay(randomNum) {
  if (randomNum === 1) {
    randomNum = 'rock';
  }
  if (randomNum === 2) {
    randomNum = 'paper';
  }
  if (randomNum === 3) {
    randomNum = 'sissors';
  }
  return randomNum;
}

// Variable holding the computers pick; rock, paper or sissors
let computerSelection = computerPlay(randomNum);

console.log(randomNum);
console.log(`${computerSelection}: computer`);

// prompt asking player for input

// let playerSelection = prompt(
//   'Battle to the death! "Rock", "Paper" or "Sissors"?'
// );

function playerInput() {
  let promptText = 'Please choose Rock, Paper or Sissors';
  let playerPrompt = prompt(
    'Battle to the death! "Rock", "Paper" or "Sissors"?'
  );
  switch (playerPrompt.toLowerCase()) {
    case 'rock':
      return 'rock';
      break;
    case 'paper':
      return 'paper';
      break;
    case 'sissors':
      return 'sissors';
      break;
    default:
      alert(promptText);
      playerInput(playerPrompt);
  }
}
let playerSelection = playerInput();
console.log(`${playerSelection}: player`);

// game rules and play
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return `It's a tie, you both chose ${playerSelection}`;
  }
  if (playerSelection == 'rock' && computerSelection == 'paper') {
    return `Computer chose ${computerSelection} and you chose ${playerSelection}. You loose, Paper beats Rock!`;
  }
  if (playerSelection == 'paper' && computerSelection == 'rock') {
    return `Computer chose ${computerSelection} and you chose ${playerSelection}. You win, Paper beats Rock!`;
  }
  if (playerSelection == 'rock' && computerSelection == 'sissors') {
    return `Computer chose ${computerSelection} and you chose ${playerSelection}. You win, Rock beats Sissors!`;
  }
  if (playerSelection == 'sissors' && computerSelection == 'rock') {
    return `Computer chose ${computerSelection} and you chose ${playerSelection}. You loose, Rock beats Sissors!`;
  }
  if (playerSelection == 'sissors' && computerSelection == 'paper') {
    return `Computer chose ${computerSelection} and you chose ${playerSelection}. You win, Sissors beat Paper!`;
  }
  if (playerSelection == 'paper' && computerSelection == 'sissors') {
    return `Computer chose ${computerSelection} and you chose ${playerSelection}. You loose, Sissors beat Paper!`;
  }
  return playRound;
}

// variable holding the round results
let gameResults = playRound(playerSelection, computerSelection);
console.log(gameResults);
