//an array to hold the questions, each broken into three parts that are common to all questions
var questionsArray = [
  {
    question: "In computer coding the origin of the term 'boolean', meaning a variable with two possible values called 'true' and 'false', has been attributed to which member of the Teen Titans whose catch phrase is 'BOO-YAH'?",
    choices: ["Raven", "Robin", "Cyborg", "Starfire"],
    answer: "Cyborg",
  },
  {
    question: "The owner of the New England Patriots is in need of a quarterback. To choose Blake Bortles from the array ['Blake Bortles', 'Tom Brady', 'Y.A. Tittle', 'The Gipper'], which index should he select?",
    choices: ["0", "1", "2", "3"],
    answer: "0",
  },
  {
    question: "In the coded world of the Matrix, which of the following elements will NOT give life to an HTML document?",
    choices: ["h1", "ul", "air", "div"],
    answer: "air",
  },
  {
    question: "The acronym HTML stands for which of the following?",
    choices: ["Hypo Telemetric Marqee Language", "Head Table Menu Language", "Hyper Text Markup Legos", "None of the above"],
    answer: "None of the above",
  }

]


//timer counts down to zero.  When it reaches zero the endQuiz function runs
var timerEl = document.querySelector(".timer");
var headerEl = document.getElementById("header");

var secondsLeft = 40;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time:" + secondsLeft + "secs"
    console.log(timerEl)

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      quizEnd();
    }

  }, 1000);
}

setTime();

  //variables for everything on the html page 
    let score = 0
    var scoreEl = document.getElementById("score");
    var startButton = document.getElementById("startButton");
    var submitButton = document.getElementById("submit");
    var container = document.getElementById("container");
    var questionEl = document.querySelector("question");
    var questionBodyEl = document.getElementById("questionBody");
    var choicesEl = document.getElementById("choices");
    var endScreenEl = document.getElementById("end-screen");
    var initialsEl = document.getElementById("initials");
    var currentQuestionIndex = 0


//todo turn code below into a function to write the question to the screen based on the current index.  Check if users answer was right. If current question index is larger than the length of the array it's game over
  
function getQuestion() {
  // hide the gameEnd elements until the quiz is over
  var endScreenEl = document.getElementById("end-screen").style.visibility = "hidden";
  var currentQuestion = questionsArray[currentQuestionIndex];

  // grab the body of the first question so that it can be written to the screen
  var questionBodyEl = document.getElementById("questionBody");
  questionBodyEl.textContent = currentQuestion.question;
 
  // remove the previous question's choices
  choices.innerHTML = "";

  // create a button for each choice for each question and connect the click of each button to the text of a specific choice
  currentQuestion.choices.forEach(function(choice,i) {
  var choiceNode = document.createElement("button");
  choiceNode.setAttribute("class", "choice");
  choiceNode.setAttribute("value", choice)

  choiceNode.textContent = choice;

  choiceNode.onclick = guessClick;

  choicesEl.appendChild(choiceNode);
  })
}

function guessClick() {
  // compare the answer and penalize time for wrong answers or increase the score for a correct answer
    if (this.value !== questionsArray[currentQuestionIndex].answer) {
      alert("incorrect")
      secondsLeft -= 10;
      if (secondsLeft< 0) {
        secondsLeft = 0;
      } 
      secondsLeft.textContent = timerEl
    } else  {
        score++
        scoreEl.textContent = "Score: " + score;
        alert("correct!")

        localStorage.setItem("score", score);
      };
      // increment to the next question
      currentQuestionIndex++

      // end the quiz if the user finishes early
      if (currentQuestionIndex == questionsArray.length) {
        quizEnd();
        } else {
          getQuestion()
      }
  }
    
 function quizEnd () {
  //  set timer to zero
   clearInterval(timerEl);

  //  reveal the gameEnd messages and final score 
   var endScreenEl = document.getElementById("end-screen").style.visibility = "visible";

   var finalScoreEl = document.getElementById("finalScore");
   finalScoreEl.textContent = score*1000000;

   console.log(finalScore)
  // hide the body of the last question
   var questionEl = document.getElementById("question").style.visibility = "hidden";
 }

getQuestion()

function saveHighscore() {
  // get value of input box
  var initials = initialsEl.value.trim();
 

  // confirm that the user logged an entry
  if (initials !== "") {
    // get saved scores from localstorage, or if it's the first entry, set to an empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // connect current user initials to their score
    var newScore = {
      finalScore: score*1000000,
      initials: initials
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // redirect highScore page
    window.location.href = "highScores.html";
  }
}

// user clicks button to submit initials
submitButton.onclick = saveHighscore;

