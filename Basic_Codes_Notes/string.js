const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

const newResult = add(5, 5);
currentResult = ((newResult + 10) * 3) / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3/2 - 1`; // Template Literal ${defaultResult}

console.log(currentResult, calculationDescription);

//////////////////////
