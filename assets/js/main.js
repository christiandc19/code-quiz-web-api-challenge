var mainEl = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var questionHere = document.getElementById("questions-here");
var nextButton = document.getElementById("next-button");

// ARRAY OF QUESTIONS
var questions = [
  "Question 1: Which operator is used to assign a value to a variable?",
  "Question 2: Inside which HTML element do we put the JavaScript?",
  "Question 3: Which event occurs when the user clicks on an HTML element?",
  "Question 4: Which HTML attribute is used to define inline styles?",
  "Question 5: Which character is used to indicate an end tag?",
  "Question 6: Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
  "Question 7: How do you insert a comment in a CSS file?",
  "Question 8: In HTML, which attribute is used to specify that an input field must be filled out?",
  "Question 9: Which CSS property is used to change the text color of an element?",
  "Question 10: Which CSS property controls the text size?"
];

var finalScore = 0;

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

  
// FIRST QUESTION
  var firstQuestion = function() {
      questionHere.innerHTML = questions[0];
      startButton.remove();
      
      $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 btn-block answer' data-task='0'>A. * </button>");
      $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='1'>B. X </button>");
      $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='2'>C. = </button>");
      $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='3'>D. - </button>");

            $('.answer').click(function() {
              var id = $(this).attr('data-task'); // $(this) refers to button that was clicked
              if (id == "2") {
                $("#result").html("<h4 class='text-success'>Correct!</h4>");
                finalScore = finalScore + 1;
              } else {
                $("#result").html("<h4 class='text-danger'>Wrong!</h4>")
              }
              secondQuestion();
            });
  }


// SECOND QUESTION
  var secondQuestion = function() {
    $(".result").remove(); // <h4> where the result of the choice is being displayed.
    $('.answer').remove(); // Buttons of the previous questions is removed.

    questionHere.innerHTML = questions[1];
    $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='0'>A. script tag </button>");
    $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='1'>B. style tag </button>");
    $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='2'>C. js tag </button>");
    $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='3'>D. javascript tag </button>");

    $('.answer').click(function() {
      var id = $(this).attr('data-task'); // $(this) refers to button that was clicked
      if (id == "0") {
        $("#result").html("<h4 class='text-success'>Correct!</h4>")
        finalScore = finalScore + 1;
      } else {
        $("#result").html("<h4 class='text-danger'>Wrong!</h4>")
      }
      thirdQuestion()
    });
}  

// THIRD QUESTION
var thirdQuestion = function() {
$(".result").remove(); // <h4> where the result of the choice is being displayed.
$('.answer').remove(); // Buttons of the previous questions is removed.

questionHere.innerHTML = questions[2];
$(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='0'>A. onmouseclick</button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='1'>B. onmouseover</button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='2'>C. onclick</button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='3'>D. onchange</button>");

  $('.answer').click(function() {
    var id = $(this).attr('data-task'); // $(this) refers to button that was clicked
    if (id == "0") 
    {
      $("#result").html("<h4 class='text-success'>Correct!</h4>")
      finalScore = finalScore + 1;
    } else {
      $("#result").html("<h4 class='text-danger'>Wrong!</h4>")
    }
    fourthQuestion();
  });
}  

// FOURTH QUESTION
var fourthQuestion = function() {
  $('.answer').remove();

  questionHere.innerHTML = questions[3];
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='0'>A. class </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='1'>B. styles </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='2'>C. font </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='3'>D. style </button>");
  // nextButton.addEventListener("click", fifthQuestion);

  $('.answer').click(function() {
    var id = $(this).attr('data-task'); // $(this) refers to button that was clicked
    if (id == "3") {
      $("#result").html("<h4 class='text-success'>Correct!</h4>")
      finalScore = finalScore + 1;
    } else {
      $("#result").html("<h4 class='text-danger'>Wrong!</h4>")}
    fifthQuestion();
  });
}

// FIFTH QUESTION
var fifthQuestion = function() {
  $('.answer').remove();

  questionHere.innerHTML = questions[4];
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='0'>A. / </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='1'>B. < </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='2'>C. ^ </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='3'>D. * </button>");

  $('.answer').click(function() {
    var id = $(this).attr('data-task'); // $(this) refers to button that was clicked
    if (id == "0") {
      $("#result").html("<h4 class='text-success'>Correct!</h4>")
      finalScore = finalScore + 1;
    } else {
      $("#result").html("<h4 class='text-danger'>Wrong!</h4>")}
      sixthQuestion();
  });
}  

// SIXTH QUESTION
var sixthQuestion = function() {
  $('.answer').remove();

  questionHere.innerHTML = questions[5];
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='0'>A. src </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='1'>B. longdesc </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='2'>C. alt </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='3'>D. title </button>");

  $('.answer').click(function() {
    var id = $(this).attr('data-task'); // $(this) refers to button that was clicked
    if (id == "2") {
      $("#result").html("<h4 class='text-success'>Correct!</h4>")
      finalScore = finalScore + 1;
    } else {
      $("#result").html("<h4 class='text-danger'>Wrong!</h4>")}
      seventhQuestion();
  });
}  

// SEVENTH QUESTION
var seventhQuestion = function() {
  $('.answer').remove();

  questionHere.innerHTML = questions[6];
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='0'>A. /* this is a comment */ </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='1'>B. ' this is a comment </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='2'>C. // this is a comment // </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='3'>D. // this is a comment </button>");

  $('.answer').click(function() {
    var id = $(this).attr('data-task'); // $(this) refers to button that was clicked
    if (id == "0") {
      $("#result").html("<h4 class='text-success'>Correct!</h4>")
      finalScore = finalScore + 1;
    } else {
      $("#result").html("<h4 class='text-danger'>Wrong!</h4>")}
      eightQuestion();
  });
}  

// EIGHT QUESTION
var eightQuestion = function() {
  $('.answer').remove();

  questionHere.innerHTML = questions[7];
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='0'>A. validate </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='1'>B. required </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='2'>C. placeholder </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='3'>D. formvalidate </button>");

  $('.answer').click(function() {
    var id = $(this).attr('data-task'); // $(this) refers to button that was clicked
    if (id == "2") {
      $("#result").html("<h4 class='text-success'>Correct!</h4>")
      finalScore = finalScore + 1;
    } else {
      $("#result").html("<h4 class='text-danger'>Wrong!</h4>")}
      ninethQuestion();
  });
}  

// NINETH QUESTION
var ninethQuestion = function() {
  $('.answer').remove();

  questionHere.innerHTML = questions[8];
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='0'>A. text-color </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='1'>B. fgcolor </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='2'>C. color </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='3'>D. font-color </button>");

  $('.answer').click(function() {
    var id = $(this).attr('data-task'); // $(this) refers to button that was clicked
    if (id == "2") {
      $("#result").html("<h4 class='text-success'>Correct!</h4>")
      finalScore = finalScore + 1;
    } else {
      $("#result").html("<h4 class='text-danger'>Wrong!</h4>")}
      tenthQuestion();
  });
}  

// TENTH QUESTION
var tenthQuestion = function() {
  $('.answer').remove();

  questionHere.innerHTML = questions[9];
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='0'>A. font-size </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='1'>B. text-size </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='2'>C. text-style </button>");
  $(".mainBox").append("<button class='btn-primary d-block px-3 m-2 answer' data-task='3'>D. font-style </button>");

  $('.answer').click(function() {
    var id = $(this).attr('data-task'); // $(this) refers to button that was clicked
    if (id == "0") {
      $("#result").html("<h4 class='text-success'>Correct!</h4>");
      finalScore = finalScore + 1;
    } else {
      $("#result").html("<h4 class='text-danger'>Wrong!</h4>")}
      allDone();
  });
} 

function allDone() {
  questionHere.remove();
  
  $(".result").remove(); // <h4> where the result of the choice is being displayed.
  $('.answer').remove(); // Buttons of the previous questions is removed.
  $("#intro-header").html("<h4 class='text-success'>All Done!</h4>");
  $("#intro-header").append("Your Final Score is: " + finalScore);
  $("#intro-header").append("<br>");
  $("#intro-header").append("<p class='text-success m-3 d-inline'>Enter Your Initials</p>");
  $("#intro-header").append("<input class='mt-3 d-inline'></input>");
  $("#intro-header").append("<button class='px-3 mr-3 btn-primary mx-auto'>Submit</button>");



}

  startButton.addEventListener("click", countdown);

