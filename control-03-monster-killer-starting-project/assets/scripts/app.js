const ATTACK_VALUE = 10;

const STRONG_ATTACK_HANDLER = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
let logEvent = [];

const MODE_ATTACK = "ATTACK"; //MODE_ATTACK = 0
const STRONG_MODE_ATTACK = "STRONG ATTACK"; // STRONG_MODE_ATTACK  = 1

const LOG_EVENT_PLAYER_ATTACK = "PLAYER ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER STRONG ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER HEAL";
const LOG_EVENT_GAME_OVER = "GAME OVER";

function getMaxLifeValues() {
  const enteredValue = prompt("Maximum Life  for you and the Monster", "100");

  const parsedValue = parseInt(enteredValue);

  if (isNaN(parsedValue) || parsedValue <= 0) {
    throw { message: "Invalid user Input, not a number" };
  }

  return parsedValue;
}

let chosenMaxLife;

try {
  chosenMaxLife = getMaxLifeValues();
} catch (error) {
  console.log(error);
  chosenMaxLife = 100;
  alert("You entered something wrong.!");
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(eve, val, currMonsterHealth, playerHealth) {
  let logEntry;

  logEntry = {
    event: eve,
    value: val,
    finalMonsterHealth: currMonsterHealth,
    finalPlayerHealth: playerHealth,
  };

  if (eve === LOG_EVENT_PLAYER_ATTACK) {
    logEntry.target = "MONSTER";
  } else if (eve === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logEntry.target = "MONSTER";
  } else if (eve === LOG_EVENT_MONSTER_ATTACK) {
    logEntry.target = "PLAYER";
  } else if (eve === LOG_EVENT_PLAYER_HEAL) {
    logEntry.target = "PLAYER";
  } else if (eve === LOG_EVENT_GAME_OVER) {
  }

  logEvent.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;

  resetGame(chosenMaxLife);
}
function endRound() {
  const initialPLayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPLayerHealth;
    setPlayerHealth(initialPLayerHealth);
    alert("You would be dead but bonus life saved you");
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You Won");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("Monster Won");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("you have a draw");
  }

  if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  let maxDamage;
  let logEvent;
  if (mode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
    logEvent = LOG_EVENT_PLAYER_ATTACK;
  } else if (mode === STRONG_MODE_ATTACK) {
    maxDamage = STRONG_ATTACK_HANDLER;
    logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  }

  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;

  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
  endRound();

  // const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  // currentPlayerHealth -= playerDamage;

  // if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
  //   alert("You Won");
  // } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
  //   alert("Monster Won");
  // } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
  //   alert("You have a draw");
  // }
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(STRONG_MODE_ATTACK);
  // const damage = dealMonsterDamage(STRONG_ATTACK_HANDLER);
  // currentMonsterHealth -= damage;

  // const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  // currentPlayerHealth -= playerDamage;

  // if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
  //   alert("You Won");
  // } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
  //   alert("Monster Won");
  // } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
  //   alert("You have a draw");
  // }
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal to more than your max initial Health ");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }

  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;

  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

function printLogHandler() {
  // for (let i = 0; i < 3; i++) {
  //   console.log("i", i);
  // }

  // for (let i = 9; i < 10; ) {
  //   console.log(i);
  //   i++;
  // }

  // For of Loop

  // const hobbies = ["Sports", "cooking", "coading", "working"];

  // let favoriteHobby;

  // for (const hobby of hobbies) {
  //   favoriteHobby = hobby;
  // }
  // console.log("favoriteHobby", favoriteHobby);

  // Nested FOr Loop
  // let sum = 0;
  // for (let i = 0; i < 3; i++) {
  //   for (let j = 5; j > 2; j--) {
  //     sum = sum + j + i;
  //   }
  // }

  // console.log("sum", sum);

  // For for continue

  // let sum = 0;
  // for (let k = 0; k < 5; k++) {
  //   for (let j = 0; j < 2; j++) {
  //     sum = sum + k + j;
  //     continue;
  //   }
  // }

  // console.log(sum);

  //For with continue
  // let sum = 0;
  // for (let k = 0; k < 5; k++) {
  //   for (let j = 0; j < 2; j++) {
  //     if (k >= 2) {
  //       continue;
  //     }

  //     sum = sum + k + j;
  //   }
  // }

  // console.log(sum);

  // For loop
  // for (let i = 0; i < logEvent.length; i++) {
  //   console.log(logEvent[i]);
  // }
  // console.log("logEvent", logEvent.length);
  // console.log("logEve", logEvent);

  // "For of" Loop
  // let i = 0;
  // for (const logEnt of logEvent) {
  //   console.log(logEnt);
  //   i++;
  //   console.log(i);
  // }

  let i = 0;
  for (const logEnt of logEvent) {
    console.log(`#${i}`);
    for (const key in logEnt) {
      console.log(`${key}  => ${logEnt[key]}`);
    }

    i++;
  }
}
attackBtn.addEventListener("click", attackHandler);

strongAttackBtn.addEventListener("click", strongAttackHandler);

healBtn.addEventListener("click", healPlayerHandler);

logBtn.addEventListener("click", printLogHandler);
