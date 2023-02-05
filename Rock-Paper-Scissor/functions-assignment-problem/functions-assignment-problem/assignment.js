function sayHello(name) {
  console.log("Hi " + name);
}

sayHello("Divya ");

const newArrowFn = (name) => {
  return `Hi ${name}`;
};

const func = newArrowFn("Akash");

console.log(func);

const newArrowFn2 = (name2) => {
  return `Hi ${name2}`;
};

const func2 = newArrowFn("Hello WOrld");

console.log(func2);

const sayHello1 = (name, phrase) => console.log(phrase + " is " + name);

const sayHello2 = () => console.log("Her name is Nora");

const sayHello3 = (name) => {
  return "Hi" + name;
};

sayHello1("Akash", "My name");

sayHello2();

const op = sayHello3(" Hello");

console.log(op);

//////////////////////////////////////////////

function checkInput(cb, ...strings) {
  let hasEmptyText = false;

  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
    if (!hasEmptyText) {
      cb();
    }
  }
}

checkInput(
  () => {
    console.log("All not Empty");
  },
  "Hello",
  "world!"
);

/////////////////////////////////

let name = {
  firstName: "Akash",
  lastName: "Kumar",

  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

name.printFullName();
