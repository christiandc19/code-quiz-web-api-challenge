var mainEl = document.getElementById("timer");
var startButton = document.getElementById("start-button");

function countdown() {
    var timeLeft = 60;
  
    var timeInterval = setInterval(function() {
      timeLeft = timeLeft - 1;
      if (timeLeft === 0) {
        clearInterval(timeInterval);
      }
      timer.innerHTML = timeLeft;
    }, 1000);
  };
  

  startButton.addEventListener("click", countdown);