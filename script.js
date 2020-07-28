

//an array to hold the questions, each broken into three parts that are common to all questions
var questionsArray = [
  {
    question: "In computer coding the origin of the term 'boolean', meaning a variable with two possible values called 'true and 'false', has been attributed to which member of the Teen Titans whose catch phrase is 'BOO-YEAH'?",
    choices: ["Raven", "Robin", "Cyborg", "Starfire"],
    answer: "Cyborg",
  },
  {
    question: "The owner of the New England Patriots is in need of a quarterback. To choose Blake Bortles from the array ['Blake Bortles', 'Tom Brady', 'Y.A. Tittle', 'The Gipper'], which index should he select?",
    choices: ["Blake Bortles", "Tom Brady", "Y.A. Tittle", "The Gipper"],
    answer: "Blake Bortles",
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


//timer counts down to zero.  When it reaches zero the Game Over message displays
// console.log(questionsArray);
var timerEl = document.querySelector(".timer");
var headerEl = document.getElementById("header");

var secondsLeft = 20;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time:" + secondsLeft + "secs"
console.log(timerEl)

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      // document.getElementById("Message3").innerHTML = "Game Over"
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
    var questionNumberEl = document.getElementById("questionNumber");
    var questionBodyEl = document.getElementById("questionBody");
    var choicesEl = document.getElementById("choices");
    var endScreenEl = document.getElementById("end-screen");
    var initialsEl = document.getElementById("initials");
    // var buttons = document.querySelector(".buttons");
    // var button1 = document.getElementById("#button1");
    // var button2 = document.getElementById("#button2");
    // var button3 = document.getElementById("#button3");
    // var button4 = document.getElementById("#button4");
    var currentQuestionIndex = 0


//todo turn code below into a function to write the question to the screen based on the current index.  Check if users answer was right. If current question index is larger than the length of the array it's game over


    // questionNumber.textContent = "Question 1";
    // questionBody.textContent = "In computer coding the origin of the term 'Boolean', meaning a variable with two possible values called 'True' and 'False', has been attributed to which member of the Teen Titans whose catch phrase is 'Boo-YEAH'?"
    // button1.textContent = "A. Raven";
    // button2.textContent = "B. Robin";
    // button3.textContent = "C. Cyborg";
    // button4.textContent = "D. Starfire";

    // questionNumber.textContent = "Question 2";
    // questionBody.textContent = "The owner of the New England Patriots is in need of a quarterback. To choose Blake Bortles from the array ['Blake Bortles', 'Tom Brady', 'Y.A. Tittle', 'The Gipper'], which index should he select?"
    // button1.textContent = "A. 0";
    // button2.textContent = "B. 1";
    // button3.textContent = "C. 2";
    // button4.textContent = "D. 3";

    // questionNumber.textContent = "Question 3";
    // questionBody.textContent = "In the coded world of the Matrix, which of the following elements will NOT give life to an HTML document?"
    // button1.textContent = "A. h1";
    // button2.textContent = "B. ul";
    // button3.textContent = "C. air";
    // button4.textContent = "D. div";

    // questionNumber.textContent = "Question 4";
    // questionBody.textContent = "The acronym HTML stands for which of the following?"
    // button1.textContent = "A. Hypo Telemetric Marqee Language";
    // button2.textContent = "B. Head Table Menu Language";
    // button3.textContent = "C. Hyper Text Markup Legos";
    // button4.textContent = "D. None of the above";

  
function getQuestion() {
  var endScreenEl = document.getElementById("end-screen").style.visibility = "hidden";
  var currentQuestion = questionsArray[currentQuestionIndex];

  var questionBodyEl = document.getElementById("questionBody");
  questionBodyEl.textContent = currentQuestion.question;
 
  choices.innerHTML = "";

  currentQuestion.choices.forEach(function(choice,i) {
  var choiceNode = document.createElement("button");
  choiceNode.setAttribute("class", "choice");
  choiceNode.setAttribute("value", choice)

  choiceNode.textContent = i + 1 + "." + choice;

  choiceNode.onclick = guessClick;

 choicesEl.appendChild(choiceNode);
  })
}

function guessClick() {
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
      currentQuestionIndex++

      if (currentQuestionIndex === questionsArray.length) {
        quizEnd();
        } else {
          getQuestion()
      }
  }
    
 function quizEnd () {
   clearInterval(timerEl);

   var endScreenEl = document.getElementById("end-screen").style.visibility = "visible";
  //  endScreenEl.removeAttribute("class");

   var finalScoreEl = document.getElementById("finalScore");
   finalScoreEl.textContent = score*1000000;

   var questionEl = document.getElementById("question").style.visibility = "hidden";
 }
getQuestion()

function saveHighscore() {
  // get value of input box
  var initials = initialsEl.value.trim();

  // make sure value wasn't empty
  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // format new score object for current user
    var newScore = {
      score: finalScoreEl,
      initials: initials
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // redirect to next page
    window.location.href = "highScores.html";
  }
}

function checkForEnter(event) {
  // "13" represents the enter key
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// user clicks button to submit initials
submitButton.onclick = saveHighscore;

// user clicks button to start quiz

initialsEl.onkeyup = checkForEnter;
