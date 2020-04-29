//an array to hold the questions, each broken into three parts that are common to all questions
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


//timer counts down to zero.  When it reaches zero the Game Over message displays
console.log(questionsArray);
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

  //variables for everything on the html page 
    var score = 0
    var container = document.querySelector("#container");
    var question1El = document.querySelector(".Question");
    var questionNumber = document.querySelector("#questionNumber");
    var questionBody = document.querySelector("#questionBody");

    var buttons = document.querySelector("#buttons");
    var button1 = document.querySelector("#button1");
    var button2 = document.querySelector("#button2");
    var button3 = document.querySelector("#button3");
    var button4 = document.querySelector("#button4");
    var currentQuestionIndex = 0
console.log(questionNumber);

//todo turn code below into a function to write the question to the screen based on the current index.  Check if users answer was right. If current question index is larger than the length of the array it's game over
    function renderquestionsArray() {
      currentQuestionIndex.textContent = questionsArray.length
      if (currentQuestionIndex > questionsArray.length) {
        document.getElementById("Message3").innerHTML = "Game Over"
      }
    }

    questionNumber.textContent = "Question 1";
    questionBody.textContent = "In computer coding the origin of the term 'Boolean', meaning a variable with two possible values called 'True' and 'False', has been attributed to which member of the Teen Titans whose catch phrase is 'Boo-YEAH'?"
    button1.textContent = "A. Raven";
    button2.textContent = "B. Robin";
    button3.textContent = "C. Cyborg";
    button4.textContent = "D. Starfire";

    questionNumber.textContent = "Question 2";
    questionBody.textContent = "The owner of the New England Patriots is in need of a quarterback. To choose Blake Bortles from the array ['Blake Bortles', 'Tom Brady', 'Y.A. Tittle', 'The Gipper'], which index should he select?"
    button1.textContent = "A. 0";
    button2.textContent = "B. 1";
    button3.textContent = "C. 2";
    button4.textContent = "D. 3";

    questionNumber.textContent = "Question 3";
    questionBody.textContent = "In the coded world of the Matrix, which of the following elements will NOT give life to an HTML document?"
    button1.textContent = "A. h1";
    button2.textContent = "B. ul";
    button3.textContent = "C. air";
    button4.textContent = "D. div";

    questionNumber.textContent = "Question 4";
    questionBody.textContent = "The acronym HTML stands for which of the following?"
    button1.textContent = "A. Hypo Telemetric Marqee Language";
    button2.textContent = "B. Head Table Menu Language";
    button3.textContent = "C. Hyper Text Markup Legos";
    button4.textContent = "D. None of the above";


    incorrect.addEventListener("click", function(event) {
    document.getElementById("Message").innerHTML = "Incorrect";
    });

    correct.addEventListener("click", function(event) {
    document.getElementById("Message2").innerHTML = "Correct!";
    });

    function incorrect() {
    document.getElementById("Message").innerHTML = "Incorrect";
    console.log("Message")
    }

    function correct() {
    document.getElementById("Message2").innerHTML = "Correct!";
    document.getElementById("score").innerHTML = "score: " + 10;
    }
  


