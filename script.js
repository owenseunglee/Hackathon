const questions = [
  {
    index: 1,
    question: "Question 1",
    choices: ["wrong", "wrong", "wrong", "correct"],
    correctAnswer: "correct",
  },
  {
    index: 2,
    question: "Question 2",
    choices: ["correct", "wrong", "wrong", "wrong"],
    correctAnswer: "correct",
  },
  {
    index: 3,
    question: "Question 3",
    choices: ["wrong", "correct", "wrong", "wrong"],
    correctAnswer: "correct",
  },
  {
    index: 4,
    question: "Question 4",
    choices: ["wrong", "wrong", "correct", "wrong"],
    correctAnswer: "correct",
  },
  {
    index: 5,
    question: "Question 5",
    choices: ["correct", "wrong", "wrong", "wrong"],
    correctAnswer: "correct",
  },
];

const restartBtn = document.getElementById("restart-btn");
const choices = document.querySelectorAll(".child-container");
const question = document.getElementById("question");
const gameEndPopup = document.querySelector(".game-end-popup");
const overlay = document.querySelector(".overlay");
let currentQuestionIndex = 0;
let score = 0;

let displayScore = document.createElement("div");
displayScore.className = "display-score";
displayScore.textContent = score;
document.body.appendChild(displayScore);

let activeThumbsUp = document.querySelector(".thumbs-up-active");
let activeThumbsDown = document.querySelector(".thumbs-down-active");
const restartLevel = document.querySelector('.restart-icon')


let timer;
let timerElement = document.getElementById('timer');

function startTimer(){
  var sec = 10;
  timer = setInterval(()=>{
    timerElement.innerHTML = sec;
    if (sec == 0) {
      clearInterval(timer);
      if (currentQuestionIndex < questions.length) {
        startTimer();
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
  activeThumbsDown.style.transform = "translateX(0vw)";
  clearInterval(timer);
  updateQuestion();
  startTimer();

  setTimeout(function () {
    activeThumbsDown.style.transform = "translateX(50vw)";
  }, 1000);

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
  shuffleArray(questions);
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
  if (currentQuestionIndex < questions.length) {
    Array.from(choices).forEach((choiceElement, index) => {
      choiceElement.textContent =
        questions[currentQuestionIndex].choices[index];
      question.textContent = questions[currentQuestionIndex].question;
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
      questions[currentQuestionIndex].choices[index] ===
      questions[currentQuestionIndex].correctAnswer
    ) {
      correctAnswer();
    } else {
      let correctChoice = Array.from(choices).find((choice) =>
        choice.textContent.includes(questions[currentQuestionIndex].correctAnswer)
      );

      console.log(correctChoice);
      wrongAnswer();
    }
    updateQuestion();
  });
});

startTimer();
updateQuestion();

restartLevel.addEventListener('click', () => {
  resetLevel()
})