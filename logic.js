// list of all questions, choices, and answers
const questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];

let timeLeft = 50;

let elem = document.getElementById('time');

let time = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft === 0) {
    clearTimeout(elem);
    quizend();
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}
function quizend() {
  // stop timer
  clearInterval(elem);

}
function onchoice(event) {
  if (event.target.innerHTML == (questions[0].answer)) { nextquestion() }
  else if (event.target.innerHTML !== (questions[0].answer)) { timeLeft -= 15; } { nextquestion() }
}
const newquiz = () => {

  document.getElementById("start").style.display = "none";

  document.getElementById('questions').append(questions[0].title);

  for (let i = 0; i < questions[0].choices.length; i++) {
    let questionnn = document.createElement('div')

    questionnn.addEventListener('click', onchoice)

    questionnn.innerHTML = `

     <button class="btn">${questions[0].choices[i]}</button>

     <hr>
     `
    document.getElementById('answer').append(questionnn)
  }
}

function nextquestion() {
  document.getElementById('answer').innerHTML = ""

  document.getElementById('questions').innerHTML = "";

  document.getElementById('questions').append(questions[1].title);


  for (let i = 0; i < questions[1].choices.length; i++) {

    let questionnn = document.createElement('div')

    questionnn.addEventListener('click', onchoice)

    questionnn.innerHTML = `

     <button class="btn">${questions[1].choices[i]}</button>

     <hr>
     `
    document.getElementById('answer').append(questionnn)

  }
}
document.getElementById('start').addEventListener('click', event => {

  document.getElementById("start").style.display = "none";

  countdown()

  newquiz()

})

