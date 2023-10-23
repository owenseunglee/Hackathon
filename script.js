fetch('http://localhost:3000/fetch-questions')
.then(response => response.json())
.then(data => {
let current_topic = null;
const topics = document.querySelectorAll(".topic-container");
topics.forEach((topic) => {
  topic.addEventListener("click", () => {
    const topicTitle = topic.querySelector(".topic-title").textContent;
    for(let category in data){
      if (
        topicTitle.trim().toLowerCase() ==
        data[category][0].topic.trim().toLowerCase()
      ) {
        current_topic = data[category];
        console.log(topicTitle);
        localStorage.setItem("current_topic", JSON.stringify(current_topic));
        window.location.href = "gameboard.html";
      }
    }
  });
});

if (window.location.pathname.includes("homepage.html")) {
  localStorage.removeItem("current_topic");
}

if (window.location.pathname.includes("gameboard.html")) {
  const current_topic = JSON.parse(localStorage.getItem("current_topic"));
  shuffleArray(current_topic);
  const restartBtn = document.getElementById("restart-btn");
  const choices = document.querySelectorAll(".child-container");
  const question = document.getElementById("question");
  const questionText = document.createElement('p')
  const gameEndPopup = document.querySelector(".game-end-popup");
  const overlay = document.querySelector(".overlay");
  const restartLevel = document.querySelector(".restart-icon");
  const timerClock = document.getElementById('timer')
  let currentQuestionIndex = 0;
  let score = 0;

  let displayScore = document.createElement("div");
  displayScore.className = "display-score";
  displayScore.textContent = score;
  document.body.appendChild(displayScore);

  let activeThumbsUp = document.querySelector(".thumbs-up-active");
  let activeThumbsDown = document.querySelector(".thumbs-down-active");

  let timer;
  let timerElement = document.getElementById('timer');
  
  function startTimer(){
    var sec = 10;
    timer = setInterval(()=>{
      timerElement.innerHTML = sec;
      if (sec <= 5){
        timerElement.classList.add('blink')
        timerClock.style.color = 'red'
      }
      if (sec == 0) {
        clearInterval(timer);
        if (currentQuestionIndex < current_topic.length) {
          timerElement.classList.remove('blink')
          startTimer();
          timerClock.style.color = 'black'
          currentQuestionIndex++
          updateQuestion()
        }
      }
      sec--;
    }, 1000)
  }

  function correctAnswer() {
    score++;
    currentQuestionIndex++;
    displayScore.textContent = score;
    activeThumbsUp.style.transform = "translateX(15vw)";
    clearInterval(timer);
    updateQuestion();
    startTimer();
    setTimeout(function () {
      activeThumbsUp.style.transform = "translateX(0vw)";
    }, 1000);
  }

  function wrongAnswer() {
    currentQuestionIndex++;
    activeThumbsDown.style.scale = 1
    activeThumbsDown.style.transform = "translateX(0vw)";
    clearInterval(timer);
    updateQuestion();
    startTimer();
    setTimeout(function () {
      activeThumbsDown.style.transform = "translateX(50vw)";
    }, 1000);
    setTimeout(function () {
      activeThumbsDown.style.scale = 0
    }, 1500);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function restartGame() {
    gameEndPopup.classList.add("hide");
    overlay.classList.add("hide");
    score = 0;
    displayScore.textContent = score;
    currentQuestionIndex = 0;
    shuffleArray(current_topic);
    startTimer();
    updateQuestion()
  }

  function resetLevel() {
    score = 0;
    displayScore.textContent = score;
    currentQuestionIndex = 0;
    updateQuestion();
  }

  function gameFinished() {
    clearInterval(timer);
    gameEndPopup.classList.remove("hide");
    overlay.classList.remove("hide");
  }

  function updateQuestion() {
    if (currentQuestionIndex < current_topic.length) {
      Array.from(choices).forEach((choiceElement, index) => {
        choiceElement.textContent =
          current_topic[currentQuestionIndex].choices[index];
          questionText.classList = 'question-text'
        question.appendChild(questionText)
        questionText.textContent = current_topic[currentQuestionIndex].question;
      });
    } else {
      gameFinished();
    }
  }

  restartBtn.addEventListener("click", function () {
    restartGame();
    updateQuestion();
  });

  Array.from(choices).forEach((choiceElement, index) => {
    choiceElement.addEventListener("click", () => {
      if (
        current_topic[currentQuestionIndex].choices[index] ===
        current_topic[currentQuestionIndex].correctAnswer
      ) {
        correctAnswer();
      } else {
        let correctChoice = Array.from(choices).find((choice) =>
          choice.textContent.includes(
            current_topic[currentQuestionIndex].correctAnswer
          )
        );
        console.log(correctChoice);
        wrongAnswer();
      }
      updateQuestion();
    });
  });

  // Reloads page for current question
  startTimer();
  updateQuestion();
  
  restartLevel.addEventListener("click", () => {
    resetLevel();
    clearInterval(timer)
    startTimer();
  });
}
})