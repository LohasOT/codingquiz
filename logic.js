

document.getElementById('start').addEventListener('click', event => {
  document.getElementById("starting").style.display = "none";

  let timeLeft = 80;

  let elem = document.getElementById('time');

  let time = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == -1) {
      clearTimeout(elem);
      quizend();
    } else {
      elem.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
    }
    function quizend() {
      // stop timer
      clearInterval(elem);
    }
  }

})