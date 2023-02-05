// const hobbies = ["sports", "Cooking"];

// hobbies.push("Coding");

// hobbies.unshift("Cricket");

// console.log(hobbies);
//console.log(hobbies.pop());

// console.log(hobbies.shift());

///////Splice//////////

// console.log(hobbies);
// hobbies.splice(1, 1);
// console.log("hobbiesSpliced", hobbies);

// console.log(hobbies);
// const newHobbies = [1, 2, 5, 6, "Hello World!"];
// const removedElements = newHobbies;
// console.log("removedElements", removedElements);

////////Splice End////////////
const testResults = ["My", "name", "is", "akash"];

const copiedResults = testResults.concat([-3, -1]);
console.log("copiedResults", copiedResults);
testResults.push(5.4);

console.log("testResults", testResults);
console.log(testResults.indexOf("name", "is"));

const newObjElements = [{ name: "akash" }, { name: "divya" }];

console.log(newObjElements.indexOf({ name: "akash" }));

//const manual = newObjElements.find((element,index,array) => {});
//anonymous function

const manual = newObjElements.find((person, idx, persons) => {
  return person.name === "divya";
});

manual.person = "Anna";

console.log("manual", manual, newObjElements);
const maxIdex = newObjElements.findIndex((person, index, persons) => {
  return person.name === "divya";
});

console.log("maxIdex", maxIdex);
