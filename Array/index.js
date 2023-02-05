const moreArray = new Array(5, 2);

console.log(moreArray);

const yetMoreArray = Array.of(1, 2, 3);

console.log(yetMoreArray);

const listItems = document.querySelectorAll("li");
console.log(listItems);

const arrayListItems = Array.from(listItems);

console.log(arrayListItems);

const hobbies = ["cooking", "food", "fooding", "sports"];

console.log(hobbies);

const newArrayTypes = [30, "Hello World", { moreDetails: [] }];

const analyticsData = [
  [1, 1.2],
  [-5.4, 2.11],
];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

console.log(newArrayTypes[2]);
