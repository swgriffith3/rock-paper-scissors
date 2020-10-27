function computerPlay(min, max) {
  return Math.floor(Math.random() * (10 - 1) + 1);
}

function computerPick() {
  let rps;
  if (computerPlay <= 3) {
    rps = 'Rock';
  }
  if (computerPlay <= 6 && computerPlay >= 4) {
    rps = 'Paper';
  }
  if (computerPlay >= 7) {
    rps = 'Sissors';
  }

  return rps;
}

console.log(computerPlay());
console.log(computerPick());
