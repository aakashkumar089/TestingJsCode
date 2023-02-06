//This below cont variable = anonymous variable line is added at last

const anonymousValue =
  "Added later in above code and now i want this into object";

const person = {
  name: "John",
  age: 34,
  hobbies: ["Cooking", "Sports"],
  greet: function () {
    alert("Hello John!");
  },

  "working place": "Korba",
  "81095452.10": "Phone number",
  [anonymousValue]: "New Line",
};

(person.age = 50), console.log((person.isAdmin = true));

//delete person.age; //For delete the age completely
person.age = null; // means person's age is present but value is not present
console.log(person.age);
console.log(person["working place"]);
console.log(person["81095452.10"]);
console.log(person[anonymousValue]);
console.log(person); // At the end  the key's are automatically converted into strings
