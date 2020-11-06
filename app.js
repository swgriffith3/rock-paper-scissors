// variable holding score
let pScore = 0;
let cScore = 0;

playGame();

// function to play game
function playGame() {
  //loop to play 5 rounds
  for (let i = 0; i < 5; i++) {
    // Create random number between 1 and 3 &
    // Asign random number to rock, paper, or scissors
    function computerPlay() {
      let randomNum = Math.floor(Math.random() * (4 - 1) + 1);

      if (randomNum === 1) {
        randomNum = 'rock';
      }
      if (randomNum === 2) {
        randomNum = 'paper';
      }
      if (randomNum === 3) {
        randomNum = 'scissors';
      }
      return randomNum;
    }

    // Variable holding the computers pick; rock, paper or scissors
    let computerSelection = computerPlay();

    // prompt asking player for input
    function playerInput() {
      let promptText = "Please choose 'Rock', 'Paper' or 'Scissors'";
      let playerPrompt = prompt(
        'Battle to the death! "Rock", "Paper" or "Scissors"?'
      );
      if (playerPrompt.toLowerCase() == 'rock') {
        return 'rock';
      }
      if (playerPrompt.toLowerCase() == 'paper') {
        return 'paper';
      }
      if (playerPrompt.toLowerCase() == 'scissors') {
        return 'scissors';
      }
      if (
        playerPrompt.toLowerCase() != 'rock' ||
        playerPrompt.toLowerCase() != 'paper' ||
        playerPrompt.toLowerCase() != 'scissors'
      ) {
        alert(promptText);
        return playerInput();
      }
    }

    // variable holding players selection
    let playerSelection = playerInput();

    // game rules and play
    function playRound(playerSelection, computerSelection) {
      if (playerSelection == computerSelection) {
        return 'This round is a TIE!';
      }
      if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You LOOSE this round, Paper beats Rock.';
      }
      if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You WIN this round! Paper beats Rock.';
      }
      if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You WIN this round! Rock beats Scissors.';
      }
      if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You LOOSE this round, Rock beats Scissors.';
      }
      if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You WIN this round! Scissors beat Paper.';
      }
      if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You LOOSE this round, Scissors beat Paper.';
      }
      return playRound;
    }

    // variable holding the round results
    let roundResults = playRound(playerSelection, computerSelection);

    // variables for score keeping
    let playerPoint = 'WIN';
    let computerPoint = 'LOOSE';
    let playerPointCounter = roundResults[roundResults.search(playerPoint)];
    let computerPointCounter = roundResults[roundResults.search(computerPoint)];

    // player scorekeeper
    function playerScore() {
      if (playerPointCounter === 'W') {
        pScore++;
        return pScore;
      }
    }

    // computer scorekeeper
    function computerScore() {
      if (computerPointCounter === 'L') {
        cScore++;
        return cScore;
      }
    }

    playerScore();
    computerScore();

    console.log(
      `The computer chose ${computerSelection.toUpperCase()} and you chose ${playerSelection.toUpperCase()}`
    );
    console.log(
      `${roundResults}\n-----------------------------------------------------`
    );
  }
}
let gameOver = 'The game is over and';

// final score output
function finalScore(playerScore, computerScore) {
  if (pScore > cScore) {
    console.log(
      `${gameOver} you WIN! You scored ${pScore} points and the computer scored ${cScore} points.`
    );
  } else if (pScore < cScore) {
    console.log(
      `${gameOver} you LOOSE. You scored ${pScore} points and the computer scored ${cScore} points.`
    );
  } else {
    console.log(
      `${gameOver} it's a TIE. You scored ${pScore} points and the computer scored ${cScore} points.`
    );
  }
}

finalScore();
console.log(`\n-Refresh page to play again-`);
