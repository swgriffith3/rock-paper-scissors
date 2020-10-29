// Create random number between 1 and 3 &
// Asign random number to rock, paper, or sissors
function computerPlay() {
  let randomNum = Math.floor(Math.random() * (4 - 1) + 1);
  console.log(randomNum);
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
let computerSelection = computerPlay();

// prompt asking player for input

function playerInput() {
  let promptText = 'You did not choose Rock, Paper or Sissors';
  let playerPrompt = prompt(
    'Battle to the death! "Rock", "Paper" or "Sissors"?'
  );
  if (playerPrompt.toLowerCase() == 'rock') {
    return 'rock';
  }
  if (playerPrompt.toLowerCase() == 'paper') {
    return 'paper';
  }
  if (playerPrompt.toLowerCase() == 'sissors') {
    return 'sissors';
  }
  if (
    playerPrompt.toLowerCase() != 'rock' ||
    playerPrompt.toLowerCase() != 'paper' ||
    playerPrompt.toLowerCase() != 'sissors'
  ) {
    alert(promptText);
  }
  playerInput();
}

let playerSelection = playerInput();

// game rules and play
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  }
  if (playerSelection == 'rock' && computerSelection == 'paper') {
    return 'You loose.. Paper beats Rock.';
  }
  if (playerSelection == 'paper' && computerSelection == 'rock') {
    return 'You win! Paper beats Rock.';
  }
  if (playerSelection == 'rock' && computerSelection == 'sissors') {
    return 'You win! Rock beats Sissors.';
  }
  if (playerSelection == 'sissors' && computerSelection == 'rock') {
    return 'You loose.. Rock beats Sissors.';
  }
  if (playerSelection == 'sissors' && computerSelection == 'paper') {
    return 'You win! Sissors beat Paper.';
  }
  if (playerSelection == 'paper' && computerSelection == 'sissors') {
    return 'You loose.. Sissors beat Paper.';
  }
  return playRound;
}

// variable holding the round results
let gameResults = playRound(playerSelection, computerSelection);

console.log(`Computer pick: ${computerSelection}`);
console.log(`Your pick: ${playerSelection}`);
console.log(gameResults);
