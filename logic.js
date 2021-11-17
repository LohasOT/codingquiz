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
let elem = document.getElementById('time');

let time = 50;

let feedback = document.getElementById('feedback');
// timer function
function starttimer() {

  let time = setInterval(countdown, 1000);
}
function countdown() {
  if (time === 0) {
    clearInterval(elem);
    quizend();
  } else {
    elem.innerHTML = time + ' seconds remaining';
    time--;
  }
}
function quizend() {
  // stop timer
  clearInterval(elem);

}
// function for when click on right or wrong answers
function onchoice(event) {

  if (event.target.innerHTML == (questions[0].answer)) {

    feedback.textContent = "Right!";

    nextquestion();

  } else {

    time -= 15;

    feedback.textContent = "Wrong!";
  }

  nextquestion();
}
// function for when click on right or wrong answers question 2
function onchoice2(event) {

  if (event.target.innerHTML == (questions[1].answer)) {

    feedback.textContent = "Right!";

    next2question();

  } else {

    time -= 15;

    feedback.textContent = "Wrong!";
  }

  next2question();
}
// function for when click on right or wrong answers question 3
function onchoice3(event) {

  if (event.target.innerHTML == (questions[2].answer)) {

    feedback.textContent = "Right!";

    next3question();

  } else {

    time -= 15;

    feedback.textContent = "Wrong!";
  }

  next3question();
}
// function for when click on right or wrong answers question 4
function onchoice4(event) {

  if (event.target.innerHTML == (questions[3].answer)) {

    feedback.textContent = "Right!";

    next4question();

  } else {

    time -= 15;

    feedback.textContent = "Wrong!";
  }

  next4question();
}
// starting the quiz
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
// getting next question function
function nextquestion() {

  document.getElementById('answer').innerHTML = ""

  document.getElementById('questions').innerHTML = "";

  document.getElementById('questions').append(questions[1].title);


  for (let i = 0; i < questions[1].choices.length; i++) {

    let questionnn = document.createElement('div')

    questionnn.addEventListener('click', onchoice2)

    questionnn.innerHTML = `

     <button class="btn">${questions[1].choices[i]}</button>

     <hr>
     `
    document.getElementById('answer').append(questionnn)

  }
}
function next2question() {

  document.getElementById('answer').innerHTML = ""

  document.getElementById('questions').innerHTML = "";

  document.getElementById('questions').append(questions[2].title);


  for (let i = 0; i < questions[2].choices.length; i++) {

    let questionnn = document.createElement('div')

    questionnn.addEventListener('click', onchoice3)

    questionnn.innerHTML = `

     <button class="btn">${questions[2].choices[i]}</button>

     <hr>
     `
    document.getElementById('answer').append(questionnn)

  }
}
function next3question() {

  document.getElementById('answer').innerHTML = ""

  document.getElementById('questions').innerHTML = "";

  document.getElementById('questions').append(questions[3].title);


  for (let i = 0; i < questions[3].choices.length; i++) {

    let questionnn = document.createElement('div')

    questionnn.addEventListener('click', onchoice4)

    questionnn.innerHTML = `

     <button class="btn">${questions[3].choices[i]}</button>

     <hr>
     `
    document.getElementById('answer').append(questionnn)

  }
}
// starting the quiz when clicked on start button
document.getElementById('start').addEventListener('click', event => {

  document.getElementById("start").style.display = "none";

  starttimer()

  countdown()

  newquiz()

})

