const game_startbtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT_CHOICE = ROCK;

const PLAYER_WIN = "PLAYER WON";
const MATCH_DRAW = "MATCH DRAW";
const COMP_WON = "COMPUTER WON";

let gameIsRunning = false;
const start = function () {
  console.log("Starting Game...!");
};

const getPlayerChoice = function () {
  const selectItem = prompt(
    `Enter your choice ${ROCK} , ${PAPER} or ${SCISSOR}..!`,
    ""
  ).toUpperCase();

  if (selectItem !== ROCK && selectItem !== PAPER && selectItem !== SCISSOR) {
    alert(`Invalid choice. Hence we are entering ${DEFAULT_CHOICE}`);
    return DEFAULT_CHOICE;
  }

  return selectItem;
};
const getCompChoice = function () {
  const computeItem = Math.random();
  if (computeItem <= 0.37) {
    return ROCK;
  } else if (computeItem <= 0.66) {
    return PAPER;
  } else {
    return SCISSOR;
  }
};

const gameResult = function (pchoice, cChoice) {
  if (
    (pchoice === ROCK && cChoice === PAPER) ||
    (pchoice === SCISSOR && cChoice === PAPER) ||
    (pchoice === ROCK && cChoice === SCISSOR)
  ) {
    return PLAYER_WIN;
  } else if (pchoice === cChoice) {
    return MATCH_DRAW;
  } else {
    return COMP_WON;
  }
};

game_startbtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;

  const player = getPlayerChoice();
  console.log("player", player);

  const computerChoice = getCompChoice();
  console.log("computerChoice", computerChoice);

  const whoWon = gameResult(player, computerChoice);

  console.log("whoWon", whoWon);

  let message = `you picked ${player} and computer picked ${computerChoice}`;

  if (whoWon === MATCH_DRAW) {
    message = message + " hence match draw";
  } else if (whoWon === PLAYER_WIN) {
    message = message + " hence player won";
  } else {
    message = message + " computer Won";
  }

  alert(message);

  gameIsRunning = false;
});

// not included in game

const sumUp = (...number) => {
  let sum = 0;
  for (const num of number) {
    sum += num;
  }

  return sum;
};

const SubtractDown = function () {
  let diff = 0;
  for (const num of arguments) {
    diff -= num;
  }
  return diff;
};

console.log(sumUp(1, 2, 3, 45, 2, 3));

console.log(SubtractDown(20, 10, 8, 7, 5, 2, 1));
