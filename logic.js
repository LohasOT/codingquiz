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
  }
];

// declaring elements
let currentquestionindex = 0

let elem = document.getElementById('time');

let time = 50;

let feedback = document.getElementById('feedback');

let input = document.getElementById('input');

let submitscore = document.getElementById('submitscore');

let score = document.getElementById('score')

submitscore.addEventListener("click", event => {
  event.preventDefault()
  document.getElementById('name').value
})

// timer function

let timer

function starttimer() {

  timer = setInterval(countdown, 1000);
}
function countdown() {
  console.log(time)
  if (time === 0) {
    clearInterval(timer);
    quizend();
  } else {
    elem.innerHTML = time + ' seconds remaining';
    time--;
  }
}
function checkanswer(event) {
  if (event.target.innerHTML == (questions[currentquestionindex].answer)) {

    feedback.textContent = "Right!";

    nextquestion();

  } else {
    if (time - 15 <= 0) {
      time = 0

      elem.innerHTML = time + ' seconds remaining';
      quizend();
    } else { time -= 15; }

    feedback.textContent = "Wrong!";
  }

  nextquestion();

}
function quizend() {
  // stop timer
  clearInterval(timer);

  document.getElementById('answer').innerHTML = ""

  document.getElementById('questions').innerHTML = "";

  input.style.display = "block"

  submitscore.style.display = "block"

  score.style.display = "block"

}

// starting the quiz
const newquiz = () => {

  document.getElementById("start").style.display = "none";

  document.getElementById('questions').append(questions[currentquestionindex].title);

  for (let i = 0; i < questions[currentquestionindex].choices.length; i++) {
    let questionspace = document.createElement('div')

    questionspace.addEventListener('click', checkanswer)

    questionspace.innerHTML = `

     <button class="btn">${questions[currentquestionindex].choices[i]}</button>

     <hr>
     `
    document.getElementById('answer').append(questionspace)
  }
}
// getting next question function
function nextquestion() {

  document.getElementById('answer').innerHTML = ""

  document.getElementById('questions').innerHTML = "";

  currentquestionindex++

  document.getElementById('questions').append(questions[currentquestionindex].title);


  for (let i = 0; i < questions[currentquestionindex].choices.length; i++) {

    let questionspace = document.createElement('div')

    questionspace.addEventListener('click', checkanswer)

    questionspace.innerHTML = `

     <button class="btn">${questions[currentquestionindex].choices[i]}</button>

     <hr>
     `
    document.getElementById('answer').append(questionspace)

  }
}

// starting the quiz when clicked on start button
document.getElementById('start').addEventListener('click', event => {

  document.getElementById("start").style.display = "none";

  starttimer()

  countdown()

  newquiz()

})

