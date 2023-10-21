const cs_questions = [
  {
    index: 1,
    topic: "Computer Science",
    question: "CS Question 1",
    choices: ["wrong", "wrong", "wrong", "correct"],
    correctAnswer: "correct",
  },
  {
    index: 2,
    topic: "Computer Science",
    question: "Question 2",
    choices: ["correct", "wrong", "wrong", "wrong"],
    correctAnswer: "correct",
  },
  {
    index: 3,
    topic: "Computer Science",
    question: "Question 3",
    choices: ["wrong", "correct", "wrong", "wrong"],
    correctAnswer: "correct",
  },
  {
    index: 4,
    topic: "Computer Science",
    question: "Question 4",
    choices: ["wrong", "wrong", "correct", "wrong"],
    correctAnswer: "correct",
  },
  {
    index: 5,
    topic: "Computer Science",
    question: "Question 5",
    choices: ["correct", "wrong", "wrong", "wrong"],
    correctAnswer: "correct",
  },
];

const history_questions = [
  {
    index: 1,
    topic: "History",
    question: "History Question 1",
    choices: ["wrong", "wrong", "wrong", "correct"],
    correctAnswer: "correct",
  },
  {
    index: 2,
    topic: "History",
    question: "Question 2",
    choices: ["correct", "wrong", "wrong", "wrong"],
    correctAnswer: "correct",
  },
  {
    index: 3,
    topic: "History",
    question: "Question 3",
    choices: ["wrong", "correct", "wrong", "wrong"],
    correctAnswer: "correct",
  },
  {
    index: 4,
    topic: "History",
    question: "Question 4",
    choices: ["wrong", "wrong", "correct", "wrong"],
    correctAnswer: "correct",
  },
  {
    index: 5,
    topic: "History",
    question: "Question 5",
    choices: ["correct", "wrong", "wrong", "wrong"],
    correctAnswer: "correct",
  },
];

const vocab_questions = [
  {
    index: 1,
    topic: "Vocabulary",
    question: "Vocab Question 1",
    choices: ["wrong", "wrong", "wrong", "correct"],
    correctAnswer: "correct",
  },
  {
    index: 2,
    topic: "Vocabulary",
    question: "Question 2",
    choices: ["correct", "wrong", "wrong", "wrong"],
    correctAnswer: "correct",
  },
  {
    index: 3,
    topic: "Vocabulary",
    question: "Question 3",
    choices: ["wrong", "correct", "wrong", "wrong"],
    correctAnswer: "correct",
  },
  {
    index: 4,
    topic: "Vocabulary",
    question: "Question 4",
    choices: ["wrong", "wrong", "correct", "wrong"],
    correctAnswer: "correct",
  },
  {
    index: 5,
    topic: "Vocabulary",
    question: "Question 5",
    choices: ["correct", "wrong", "wrong", "wrong"],
    correctAnswer: "correct",
  },
];

const math_questions = [
  {
    index: 1,
    topic: "Math",
    question: "Math Question 1",
    choices: ["wrong", "wrong", "wrong", "correct"],
    correctAnswer: "correct",
  },
  {
    index: 2,
    topic: "Math",
    question: "Question 2",
    choices: ["correct", "wrong", "wrong", "wrong"],
    correctAnswer: "correct",
  },
  {
    index: 3,
    topic: "Math",
    question: "Question 3",
    choices: ["wrong", "correct", "wrong", "wrong"],
    correctAnswer: "correct",
  },
  {
    index: 4,
    topic: "Math",
    question: "Question 4",
    choices: ["wrong", "wrong", "correct", "wrong"],
    correctAnswer: "correct",
  },
  {
    index: 5,
    topic: "Math",
    question: "Question 5",
    choices: ["correct", "wrong", "wrong", "wrong"],
    correctAnswer: "correct",
  },
];

const categories = [
  cs_questions,
  history_questions,
  vocab_questions,
  math_questions,
];

let current_topic = null;
const topics = document.querySelectorAll(".topic-container");
topics.forEach((topic) => {
  topic.addEventListener("click", () => {
    const topicTitle = topic.querySelector(".topic-title").textContent;
    for (let category of categories) {
      if (
        topicTitle.trim().toLowerCase() ==
        category[0].topic.trim().toLowerCase()
      ) {
        current_topic = category;
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
  const restartBtn = document.getElementById("restart-btn");
  const choices = document.querySelectorAll(".child-container");
  const question = document.getElementById("question");
  const gameEndPopup = document.querySelector(".game-end-popup");
  const overlay = document.querySelector(".overlay");
  const restartLevel = document.querySelector(".restart-icon");
  let currentQuestionIndex = 0;
  let score = 0;

  let displayScore = document.createElement("div");
  displayScore.className = "display-score";
  displayScore.textContent = score;
  document.body.appendChild(displayScore);

  let activeThumbsUp = document.querySelector(".thumbs-up-active");
  let activeThumbsDown = document.querySelector(".thumbs-down-active");

  let timer;
  let timerElement = document.getElementById("timer");

  function startTimer() {
    var sec = 10;
    timer = setInterval(() => {
      timerElement.innerHTML = sec;
      if (sec <= 0) {
        clearInterval(timer);
        currentQuestionIndex++;
        updateQuestion();
        if (currentQuestionIndex < questions.length) {
          startTimer();
        }
      }
      sec--;
    }, 1000);
  }

  function correctAnswer() {
    score++;
    currentQuestionIndex++;
    displayScore.textContent = score;
    activeThumbsUp.style.transform = "translateX(15vw)";
    setTimeout(function () {
      activeThumbsUp.style.transform = "translateX(0vw)";
    }, 1000);
    clearInterval(timer);
    updateQuestion();
    startTimer();
  }

  function wrongAnswer() {
    currentQuestionIndex++;
    activeThumbsDown.style.transform = "translateX(0vw)";
    setTimeout(function () {
      activeThumbsDown.style.transform = "translateX(50vw)";
    }, 1000);
    clearInterval(timer);
    updateQuestion();
    startTimer();
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
    updateQuestion();
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
        question.textContent = current_topic[currentQuestionIndex].question;
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
  });
}
