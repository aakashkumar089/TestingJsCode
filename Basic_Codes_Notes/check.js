// var text = "log out";

// function logit() {
//   var text = "logged in";
// }

// logit();
// console.log(text);

const radius = [3, 1, 4, 5];

const radius2 = [2.4, 5, 6];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const calculate = function (akash, logic) {
  console.log("_radius", akash);
  const output = [];

  for (let i = 0; i < akash.length; i++) {
    output.push(logic(radius[i]));
  }

  return output;
};
console.log("calculate", calculate(radius2, area));

const applyMap = radius2.map(area);

console.log("applyMap", applyMap);
// console.log("circum", calculate(radius, circumference));

// const calculateArea = function (_radius) {
//   const output = [];
//   for (let i = 0; i < _radius.length; i++) {
//     output.push(Math.PI * _radius[i] * _radius[i]);
//   }

//   return output;
// };

// console.log("final", calculateArea(radius));

// const calCircumference = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };

// console.log("circumference", calCircumference(radius));

/////////////////////////////////////////////////////////////////////////////
// function demo() {
//   console.log("Hello demo");
// }
// function
// event
// loop
// conditions
// var
// let
// const
// sessionStorage
// localStorage
