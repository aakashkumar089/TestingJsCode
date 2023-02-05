getname();
console.log(x);
var x = 7;

function getname() {
  console.log("Learning Js");
}

console.log(getname);

///

var foo;
console.log(foo); //undefined

foo = "foo";

console.log(foo); // Giving Output

//We declared a variable to let

//console.log(bar); //Uncaught ReferenceError: Cannot access 'bar' before initialization

let bar = "barring1";

console.log(bar); //perfect o/p

//Now we are assigning the variable
bar = "bar";
foo = "foo";

////////////////////////////////////////////////////

foobar();

function foobar(foo = "foo", bar = foo) {
  console.log("barr", bar);
}

/////////////////////////////////////

resetScore();
drawGameBoard();
populateGameBoard();
startGame();

function resetScore() {
  console.log("Resetting score");
}

function drawGameBoard() {
  console.log("Drawing board");
}

function populateGameBoard() {
  console.log("Populating board");
}

function startGame() {
  console.log("Starting game");
}
