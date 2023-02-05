let name1 = {
  firstName: "Akash",
  lastName: "Kumar",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + state
  );
};

printFullName.call(name1, "kolkata");

let name2 = {
  firstName: "cristiano",
  lastName: "ronaldo",
};

printFullName.call(name2, "portugal");
////////////////////////// //// get the results in the array //////////////////////////
printFullName.apply(name1, ["delhi", "cg"]);

//////////Now for the bind method///////////

let bindMyFullName = printFullName.bind(name2, ["goa", "delli"]);

console.log(bindMyFullName);

bindMyFullName();
