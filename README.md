<!--4/29-->
I've finally been able to get the components of the multiple choice quiz - their 
questions and answers - to render to the screen one after the other by using a 
javascript function and without hard-coding the text into the HTML.  I've discarded
the extra HTML question pages. Currently, my index.html file represents my Start
Page and it links to the questions which are rendered on a second page.However, 
i've not been able yet to achieve the functionalities required to demonstrate 
compentence in adding event listeners so that a page loads only after the previous 
question has been answered or in handling local storage by creating a high score page.  

<!--4/26-->
So far I've tried to recreate the functionality of the demo by making sure that all 
the components seen in the slides are represented by HTML and CSS.  I broke it out 
across separate HTML pages for each question.  However, I now realize that it would 
probably be more efficient to write a function that loops through the array of questions on a single page.

<!--4/25/20--> 
This app will be created in HTML, CSS and JS.  There will be several pages of HTML.  The opening page will feature a header comprised of a button on the left for high scores and a timer on the right.  These two features will be common to all pagesof this program. There will be an h1 element for the name of the game and a <p>
element with an explanation of the rules.  A button below will start the game.

Clicking the start game button will link to a second HTML page.  That page will 
display a multiple choice question as a <p> element centered on the page.  Four
buttons below will represent possible answers.  Clicking the right answer (if) will initiate 
an onclick event that will record the correct answer as a score.  It will also link 
the player to another page with another question.  Clicking the wrong answer (else)
will reduce the timer by ten seconds and link the player to the next page.

When the timer reaches zero, the game ends and the a page is displayed with the 
player's score and a form for the player's initials.  When the player fills out 
the form and clicks the submit button, the score is stored locally and added to 
a list of high scores.  

By clicking the high score button a player is directed to a page with an ordered
list of scores and the players that achieved them.  From this page the player can 
choose to click a button to clear highscores or another to replay the game.-->