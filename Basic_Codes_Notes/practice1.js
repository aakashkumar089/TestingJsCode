var newObj = {
  a: "Hello Js",
  b: 45,
  c: true,
};

console.log(newObj.a);
console.log(newObj.b);
console.log(newObj.c);

console.log(newObj["a"]);
console.log(newObj["b"]);
console.log(newObj["c"]);

// for Each
const integers = [1, 5, 10];
integers.forEach(function (item, index) {
  console.log(item, index);
  return item * 2;
});

console.log("integers", integers);

const newint = [2, 4, 6];
const ultranew = newint.map(function (item) {
  return item * 2;
});

console.log("ultranew", ultranew);

const othernewint = newint.map((akash) => {
  return akash * 2;
});

console.log("othernewint", othernewint);

var a = 10;
a = 11;

console.log("a", a);

const cars = [100, 200, 300];
const increasedPrice = cars.map((price) => {
  return price * 2;
});

console.log("increasedPrice", increasedPrice);
