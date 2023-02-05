function firstFunc() {
  return "Hello world";
}

let newfunc = alert(firstFunc());

function secondFunc(num1, num2) {
  const currentNum = num1 + num2;

  return currentNum;
}

alert(2, 3);

function newfunc2(name) {
  return alert(name);
}

alert("Akash");
////////////////////////////////////////

function greet() {
  alert("Greet User");
}

function greetUser(userName) {
  alert("Hii" + userName);
}

greet();

greetUser("Java Script");

////////////////////////

const submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("submitBtn").innerHTML = "Button Clicked";
}

//////////////////////

document.addEventListener("click", mynewFunc);

function mynewFunc() {
  document.getElementById("myP2").innerHTML =
    "I am working hard for lerning JS";
}
