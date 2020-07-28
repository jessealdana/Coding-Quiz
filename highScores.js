function printHighscores() {
    // either get scores from localstorage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    // sort highscores in descending order
    highscores.sort(function(a, b) {
      return b.finalScore - a.finalScore;
    });
  
    highscores.forEach(function(finalScore) {
      // create li tag for each high score so it can show in the list
      var liTag = document.createElement("li");
      liTag.textContent = finalScore.initials + " - " + finalScore.finalScore;
  
      // add each entry to the highScores page
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
  }
  
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
  document.getElementById("clear").onclick = clearHighscores;
  
  // run function when page loads
  printHighscores();