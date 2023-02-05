const defaultValue = 0;
let currentResult = defaultValue;

let logEntry = [];

function getUserInputNumber() {
  return parseInt(userInput.value);
}

function outputResultOperation(operator, resultBeforeCalc, calcNum) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNum}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operation, initialNum, enteredNum, currentResult) {
  const entryObj = {
    operation: operation,
    initialNum: initialNum,
    numEnter: enteredNum,
    currResult: currentResult,
  };
  logEntry.push(entryObj);
  console.log(logEntry);

  console.log(entryObj.operation);
  console.log(entryObj.initialNum);
  console.log(entryObj.numEnter);
  console.log(entryObj.currResult);
}

function calculateResults(calculationType) {
  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBSTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE"
  ) {
    return;
  }

  // if (
  //   calculationType === "ADD" ||
  //   calculationType === "SUBSTRACT" ||
  //   calculationType === "MULTIPLY" ||
  //   calculationType === "DIVIDE"
  // ) {
  const enteredNum = getUserInputNumber();
  const initialNumber = currentResult;

  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNum;
    mathOperator = "+";
  } else if (calculationType === "SUBSTRACT") {
    currentResult -= enteredNum;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNum;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNum;
    mathOperator = "/";
  }
  outputResultOperation(mathOperator, initialNumber, enteredNum);
  writeToLog(calculationType, initialNumber, enteredNum, currentResult);
}

function add() {
  calculateResults("ADD");
  // logEntry.push(enteredNum); //Enter into Array
  // console.log("logEntry", logEntry);

  //Enter into Object

  // const entryObj = {
  //   operator: "ADD",
  //   initVal: initialNumber,
  //   finalVal: currentResult,
  //   enternum: enteredNum,
  // };

  // console.log("entryObj.operator", entryObj.operator);
  // console.log("entryObj.initval", entryObj.initVal);
  // console.log("entryObj.finalVal", entryObj.finalVal);
  // console.log("entryObj.enternum", entryObj.enternum);

  // logEntry.push(entryObj);
  // console.log("logEntry", logEntry);
}

function substract() {
  calculateResults("SUBSTRACT");
}

function multiply() {
  // const enteredNum = getUserInputNumber();
  // const initialNumber = currentResult;
  // currentResult = currentResult * enteredNum;
  // outputResultOperation("*", initialNumber, enteredNum);
  // writeToLog("MULTIPLY", initialNumber, enteredNum, currentResult);

  calculateResults("MULTIPLY");
}

function divide() {
  // const enteredNum = getUserInputNumber();
  // const initialNumber = currentResult;
  // currentResult = currentResult / enteredNum;
  // outputResultOperation("/", initialNumber, enteredNum);
  // writeToLog("DIVIDE", initialNumber, enteredNum, currentResult);

  calculateResults("DIVIDE");
}

addbtn.addEventListener("click", add);

subbtn.addEventListener("click", substract);

multbtn.addEventListener("click", multiply);

divbtn.addEventListener("click", divide);
