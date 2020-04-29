//timer counts down to zero.  When it reaches zero the Game Over message displays
var questionsArray = [
  {
    question: "In computer coding the origin of the term 'boolean', meaning a variable with two possible values called 'true and 'false', has been attributed to which member of the Teen Titans whose catch phrase is 'BOO-YEAH'?",
    choices: ["Raven", "Robin", "Cyborg", "Starfire"],
    answer: 2,
  },
  {
    question: "The owner of the New England Patriots is in need of a quarterback. To choose Blake Bortles from the array ['Blake Bortles', 'Tom Brady', 'Y.A. Tittle', 'The Gipper'], which index should he select?",
    choices: ["Blake Bortles", "Tom Brady", "Y.A. Tittle", "The Gipper"],
    answer: 0,
  },
  {
    question: "In the coded world of the Matrix, which of the following elements will NOT give life to an HTML document?",
    choices: ["h1", "ul", "air", "div"],
    answer: 2,
  },
  {
    question: "The acronym HTML stands for which of the following?",
    choices: ["Hypo Telemetric Marqee Language", "Head Table Menu Language", "Hyper Text Markup Legos", "None of the above"],
    answer: 3,
  }

]


/*var timerEl = document.querySelector(".timer");
var headerEl = document.getElementById("header");

var secondsLeft = 2;

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

setTime();*/

// a for loop for the questions array

  //variables for everything on the html page 
    var score = 0
    var container = document.querySelector("#container");
    var question1El = document.querySelector(".Question");
    var questionNumber = document.querySelector("#questionNumber");
    var questionBody = document.querySelector("#questionBody");
    var buttonList = document.querySelector("#buttons");
    var incorrect = document.querySelector("button1");
    var correct = document.querySelector("button2");
    var button1 = document.querySelector("#button1");
    var button2 = document.querySelector("#button2");
    var button3 = document.querySelector("#button3");
    var button4 = document.querySelector("#button4");
    var currentQuestionIndex = 0
console.log(questionNumber);
//todo turn code below into a function to write the question to the screen based on the current index.  Check if users answer was right. If current question index is larger than the length of the array it's game over
    question1El.children[0].textContent = "Question 1";
    question1El.children[1].textContent = "In computer coding the origin of the term 'Boolean', meaning a variable with two possible values called 'True' and 'False', has been attributed to which member of the Teen Titans whose catch phrase is 'Boo-YEAH'?"
    button1.textContent = "A. Raven";
    button2.textContent = "B. Robin";
    button3.textContent = "C. Cyborg";
    button4.textContent = "D. Starfire";


  for (var i = 0; i < questions.Length; i++) {
      console.log(questions[i]);
      //Do something

    incorrect.addEventListener("click", function(event) {
    document.getElementById("Message").innerHTML = "Incorrect, please try again.";
    });

    correct.addEventListener("click", function(event) {
    document.getElementById("Message2").innerHTML = "Correct!";
    });

    function incorrect() {
    document.getElementById("Message").innerHTML = "Incorrect, please try again.";
    console.log("Message")
    }

    function correct() {
    document.getElementById("Message2").innerHTML = "Correct!";
    document.getElementById("score").innerHTML = "score: " + 10;
    }
  }


