let randomNum = Math.floor(Math.random() * (10 - 1) + 1);

function computerPlay(randomNum) {
  if (randomNum <= 3) {
    randomNum = 'Rock';
  }
  if (randomNum >= 4 && randomNum <= 6) {
    randomNum = 'Paper';
  }
  if (randomNum >= 7) {
    randomNum = 'Sissors';
  }
  return randomNum;
}

let compPick = computerPlay(randomNum);

console.log(randomNum);
console.log(compPick);
