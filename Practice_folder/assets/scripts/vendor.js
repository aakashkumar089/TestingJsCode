const userInput = document.getElementById("input-number");
const addbtn = document.getElementById("btn-add");
const subbtn = document.getElementById("btn-substract");
const multbtn = document.getElementById("btn-multiply");
const divbtn = document.getElementById("btn-divide");

const currentCalculationOutput = document.getElementById("current-calculation");
const currentResultOutput = document.getElementById("current-result");

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
