var startButton = document.getElementById("start-button");
var questionHere = document.getElementById("questions-here");
var nextButton = document.getElementById("next-button");
var submitButton = document.getElementById("submit-score-btn"); //button
var initialEl = document.getElementById("initials"); //input form
var initialText =document.getElementById("display-initials"); //text
var scoreHereText = document.getElementById("score-here"); //text
var home = document.getElementById("go-back-btn");

// ARRAY OF QUESTIONS
var questions = [
  "Question 1: Which operator is used to assign a value to a variable?",
  "Question 2: Inside which HTML element do we put the JavaScript?",
  "Question 3: Which event occurs when the user clicks on an HTML element?",
  "Question 4: Which HTML attribute is used to define inline styles?",
  "Question 5: Which character is used to indicate an end tag?"
];

var timeLeft = 60;
var finalScore = timeLeft;

function countdown() {
    var timeInterval = setInterval(function() {
      timeLeft = timeLeft - 1;
      if (timeLeft === 0) {
        clearInterval(timeInterval);
      }
      timer.innerHTML = timeLeft;
    }, 1000);
    firstQuestion();
  };

// FIRST QUESTION
  var firstQuestion = function() {
      questionHere.innerHTML = questions[0];
      startButton.classList.add("noShow");

      
      $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='0'>A. * </button>");
      $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='1'>B. X </button>");
      $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='2'>C. = </button>");
      $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='3'>D. - </button>");

            $('.answer').click(function() {
              var id = $(this).attr('data-task'); // $(this) refers to button that was clicked
              if (id == "2") {
                $("#result").html("<h4 class='text-success'>Correct!</h4>");
              } else {
                $("#result").html("<h4 class='text-danger'>Wrong!</h4>")
                timeLeft = timeLeft - 10;
              }
              secondQuestion();
            });
  }

// SECOND QUESTION
  var secondQuestion = function() {
    $(".result").remove(); // <h4> where the result of the choice is being displayed.
    $('.answer').remove(); // Buttons of the previous questions is removed.

    questionHere.innerHTML = questions[1];
    $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='0'>A. script tag </button>");
    $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='1'>B. style tag </button>");
    $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='2'>C. js tag </button>");
    $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='3'>D. javascript tag </button>");

    $('.answer').click(function() {
      var id = $(this).attr('data-task'); // $(this) refers to button that was clicked
      if (id == "0") {
        $("#result").html("<h4 class='text-success'>Correct!</h4>")
      } else {
        $("#result").html("<h4 class='text-danger'>Wrong!</h4>")
        timeLeft = timeLeft - 10;
        if (timeLeft <= 0) {
          allDone()
        }
      }
      thirdQuestion()
    });
}  

// THIRD QUESTION
var thirdQuestion = function() {
$(".result").remove(); // <h4> where the result of the choice is being displayed.
$('.answer').remove(); // Buttons of the previous questions is removed.

questionHere.innerHTML = questions[2];
  $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='0'>A. onmouseclick</button>");
  $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='1'>B. onmouseover</button>");
  $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='2'>C. onclick</button>");
  $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='3'>D. onchange</button>");

  $('.answer').click(function() {
    var id = $(this).attr('data-task'); // $(this) refers to button that was clicked
    if (id == "2") 
    {
      $("#result").html("<h4 class='text-success'>Correct!</h4>")
    } else {
      $("#result").html("<h4 class='text-danger'>Wrong!</h4>")
      timeLeft = timeLeft - 10;
    }
    fourthQuestion();
  });
}  

// FOURTH QUESTION
var fourthQuestion = function() {
  $('.answer').remove();

  questionHere.innerHTML = questions[3];
  $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='0'>A. class </button>");
  $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='1'>B. styles </button>");
  $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='2'>C. font </button>");
  $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='3'>D. style </button>");
  // nextButton.addEventListener("click", fifthQuestion);

  $('.answer').click(function() {
    var id = $(this).attr('data-task'); // $(this) refers to button that was clicked
    if (id == "3") {
      $("#result").html("<h4 class='text-success'>Correct!</h4>")
    } else {
      $("#result").html("<h4 class='text-danger'>Wrong!</h4>")}
      timeLeft = timeLeft - 10;
      fifthQuestion();
  });
}

// FIFTH QUESTION
var fifthQuestion = function() {
  $('.answer').remove();

  questionHere.innerHTML = questions[4];
  $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='0'>A. / </button>");
  $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='1'>B. < </button>");
  $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='2'>C. ^ </button>");
  $(".mainBox").append("<button class='border border-dark btn btn-info btn btn-info btn-lg btn-block w-50 m-2 answer' data-task='3'>D. * </button>");

  $('.answer').click(function() {
    var id = $(this).attr('data-task'); // $(this) refers to button that was clicked
    if (id == "0") {
      $("#result").html("<h4 class='text-success'>Correct!</h4>")
      finalScore = finalScore + 1;
    } else {
      $("#result").html("<h4 class='text-danger'>Wrong!</h4>")
      timeLeft = timeLeft - 10;
    }
      allDone();
  });
}  

function allDone() {
    $('#timer').remove();
    var container1 = document.getElementById("main-container1");
        container1.classList.add("noShow");
    var container2 = document.getElementById("main-container2");
        container2.classList.remove("noShow");

    scoreHereText.textContent = "Your Final Score is: " + timeLeft;
}

function submitScore() {
    // container1.classList.add("noShow");
    // container2.classList.add("noShow");

    var container2 = document.getElementById("main-container2");
    container2.classList.add("noShow");

    var container3 = document.getElementById("main-container3");
    container3.classList.remove("noShow");

  var initial = initialEl.value;
  initialText.innerHTML = initial + " Your Score Is: " + timeLeft;
  console.log(initial);
  localStorage.setItem("playerName", initial);
}

function backToStart() {
  var container3 = document.getElementById("main-container3");
  container3.classList.add("noShow");
  var container1 = document.getElementById("main-container1");
  container1.classList.remove("noShow");
}

startButton.addEventListener("click", countdown);
submitButton.addEventListener("click", submitScore);
home.addEventListener("click", countdown);
