// ///////////Spread Method/////////

// const marks = [10.22, 20.98, 5.63, 45.63, 100.58];

// const copiedMarks = [...marks];

// marks.push(111.99);

// console.log(marks, copiedMarks);

// console.log(Math.max(...marks));

const subjectMarks = [
  { name: "Max", age: 25 },
  { name: "Divya", age: 22 },
  { name: "Avinash", age: 25 },
];

const copiedPersonsMarks = subjectMarks.map((subjec) => ({
  name: subjec.name,
  age: subjec.age,
}));
const copiedSubjectMarks = [...subjectMarks];

subjectMarks.push({ name: "Liya", age: 25 });

subjectMarks[0].age = 60;
console.log(subjectMarks, copiedSubjectMarks);

// ////////////// Array destructuring  using Rest Operator ////////////////////

// const results = ["Guruvendra", "AMit", "Krishna", 52];

// const [firstPerson, secondPerson, ...others] = results;

// console.log(firstPerson, secondPerson, others);
// /////////////////////////////

// const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
// const { a, b, ...rest } = obj;

// // const a1 = obj.a;

// // const b1 = obj.b;

// console.log(a, b, rest);
// ///////////////////////////////////

// const numbers = [];

// const obj1 = { a: 1, b: 2 };

// ({ a: numbers[0], b: numbers[1] } = obj1);

// console.log(numbers);

// ///////////////////

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
