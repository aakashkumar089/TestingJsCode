var myDiv = document.getElementById("myDiv");

var myDiv2 = document.getElementById("myDiv2");

var myP = document.getElementById("myP");

var myP2 = document.getElementById("myP2");

myDiv.addEventListener("click", function () {
  myDiv.style.background = "lightblue";
});

function changeText() {
  myP2.textContent = "According";
}

// var submitBtn = document.getElementById("submitBtn");

// submitBtn.addEventListener("click", function () {
//   submitBtn.style.background = "lightblue";
// });

// function changeText
