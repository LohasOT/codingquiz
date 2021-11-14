

let timerEl = document.getElementById("time");

let questionsEl = document.getElementById("questions");

document.getElementById('start').addEventListener('click', event => {
  document.getElementById("starting").style.display = "none";

  let timeLeft = 80;

  let elem = document.getElementById('score');

  let timerId = setInterval(countdown, 1000);

  timerEl.textContent = time;

  function countdown() {
    if (timeLeft == -1) {
      clearTimeout(timerId);
      doSomething();
    }
  })

