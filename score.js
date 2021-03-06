function printHighscores() {
  // either get scores from localstorage or set to empty array
  let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

  // sort highscores by score property in descending order
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function (score) {
    // create li tag for each high score
    let liTag = document.createElement("li");
    liTag.textContent = score.name + " - " + score.score;

    // display on page
    let olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });
}

function clearHighscores() {
  localStorage.removeItem("highscores");
  location.reload();
}

document.getElementById("clear").onclick = clearHighscores;

// run function when page loads
printHighscores();
