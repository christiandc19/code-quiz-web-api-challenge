var mainEl = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var questionHere = document.getElementById("questions-here");
var newQuestionHere = document.getElementById("new-question");
var nextButton = document.getElementById("next-button");





var questions = [
  "This is question 1",
  "This is question 2",
  "This is question 3",
  "This is question 4",
  "This is question 5"
];


function countdown() {
    var timeLeft = 60;
  
    var timeInterval = setInterval(function() {
      timeLeft = timeLeft - 1;
      if (timeLeft === 0) {
        clearInterval(timeInterval);
      }
      timer.innerHTML = timeLeft;
    }, 1000);
    firstQuestion();
  };

  var secondQuestion = function() {
    questionHere.innerHTML = questions[1];
} 

  var firstQuestion = function() {
      questionHere.innerHTML = questions[0];
      startButton.remove();
      nextButton.addEventListener("click", secondQuestion);
  }

  var secondQuestion = function() {
    questionHere.innerHTML = questions[1];
    nextButton.addEventListener("click", thirdQuestion);
}  

var thirdQuestion = function() {
  questionHere.innerHTML = questions[2];
  nextButton.addEventListener("click", fourthQuestion);
}  

var fourthQuestion = function() {
  questionHere.innerHTML = questions[3];
  nextButton.addEventListener("click", fifthQuestion);
}  

var fifthQuestion = function() {
  questionHere.innerHTML = questions[4];
  nextButton.addEventListener("click", fifthQuestion);
}  


  startButton.addEventListener("click", countdown);

