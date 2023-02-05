const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// if (randomNumber >= 0.7) {
//   alert("Number is greater than 0.7");
// } else {
//   alert("less than 0.7");
// }

const numArray = [1, 2, 3, 4, 5];

let favArray;
for (let newArr of numArray) {
  favArray = newArr;
}

console.log("favArray", favArray);

//

for (let i = 0; i <= numArray.length; i++) {
  console.log(numArray[i]);
}

let counter = 0;
while (counter < numArray.length) {
  console.log(numArray[counter]);
  counter++;
}

// let reverseArr = 0;
// while (reverseArr < numArray.length) {
//   console.log(numArray.reverse[reverseArr]);
//   reverseArr--;
// }

//
for (let i = numArray.length - 1; i >= 0; i++) {
  console.log(numArray[i]);
}
