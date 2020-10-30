// Create random number between 1 and 3 &
// Asign random number to rock, paper, or sissors
function computerPlay() {
  let randomNum = Math.floor(Math.random() * (4 - 1) + 1);

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
console.log(computerSelection);

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

// variable holding players selection
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
let roundResults = playRound(playerSelection, computerSelection);

let playerPoint = 'win';
let computerPoint = 'loose';
let playerPointCounter = roundResults[roundResults.search(playerPoint)];
let computerPointCounter = roundResults[roundResults.search(computerPoint)];

function playerScore() {
  let pScore = 0;

  if (playerPointCounter === 'w') {
    pScore++;
    return pScore;
  }
}

function computerScore() {
  let cScore = 0;
  if (computerPointCounter === 'l') {
    cScore++;
    return cScore;
  }
}

let playerTotal = playerScore();
let computerTotal = computerScore();

console.log(playerPointCounter);
console.log(computerPointCounter);
console.log(`${playerTotal}: player points`);
console.log(`${computerTotal}: computer points`);

console.log(`Computer pick: ${computerSelection}`);
console.log(`Your pick: ${playerSelection}`);
console.log(roundResults);
