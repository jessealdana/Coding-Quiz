//timer counts down to zero.  When it reaches zero the Game Over message displays
var timerEl = document.querySelector(".timer");
var headerEl = document.getElementById("header");

var secondsLeft = 30;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time:" + secondsLeft + "secs"
console.log(timerEl)
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      document.getElementById("Message3").innerHTML = "Game Over"
    }

  }, 1000);
}

setTime();

// a for loop for the questions array
var questions = ["Question 1", "Question 2", "Question 3", "Question 4"];
var score = 0

for (var i = 0; i < questions.Length; i++) {
  console.log(questions[i]);
  //Do something
}

function incorrect() {
  document.getElementById("Message").innerHTML = "Incorrect, please try again.";
  console.log("Message")
}

function correct() {
  document.getElementById("Message2").innerHTML = "Correct!";
  document.getElementById("score").innerHTML = "score: " + 10;
}

