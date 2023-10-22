const cs_questions = [
  {
    index: 1,
    topic: "Computer Science",
    question: "What is the primary function of an operating system?",
    choices: ["Running software applications", "Managing hardware resources and providing user interfaces", "Storing data and files", "Controlling the flow of electricity within the computer"],
    correctAnswer: "Managing hardware resources and providing user interfaces",
  },
  {
    index: 2,
    topic: "Computer Science",
    question: "What does RAM stand for in the context of computer hardware?",
    choices: ["Random Access Memory", "Read-Only Memory", "Randomly Allocated Module", "Rapid Application Management"],
    correctAnswer: "Random Access Memory",
  },
  {
    index: 3,
    topic: "Computer Science",
    question: "Which of these languages is commonly used for front-end web development?",
    choices: ["Java", "Python", "HTML", "SQL"],
    correctAnswer: "HTML",
  },
  {
    index: 4,
    topic: "Computer Science",
    question: "What does HTTP stand for in the context of web communication?",
    choices: ["Hypersonic Text Processing", "Hyperlink Text Transmission", "High-Tech Transfer Procedure", "Hypertext Transfer Protocol"],
    correctAnswer: "Hypertext Transfer Protocol",
  },
  {
    index: 5,
    topic: "Computer Science",
    question: "What is the purpose of a compiler in programming?",
    choices: ["	To execute the program", "To debug the program", "To convert the high-level programming code into machine code", "To store data temporarily during program execution"],
    correctAnswer: "To convert the high-level programming code into machine code",
  },
  {
    index: 6,
    topic: "Computer Science",
    question: "What is the primary purpose of an API?",
    choices: ["To design user interfaces for mobile apps", "To provide a set of functions and protocols for building and interacting with software applications", "To organize and store data on a web server", "To optimize website performance for search engines"],
    correctAnswer: "To provide a set of functions and protocols for building and interacting with software applications	",
  },
  {
    index: 7,
    topic: "Computer Science",
    question: "Which of these is not a type of loop?",
    choices: ["for loop", "do-for loop", "while loop", "do-while loop"],
    correctAnswer: "do-for loop",
  },
  {
    index: 8,
    topic: "Computer Science",
    question: "Which data structure exhibits LIFO behavior?",
    choices: ["stack", "queue", "linked list", "binary tree"],
    correctAnswer: "stack",
  },
  {
    index: 9,
    topic: "Computer Science",
    question: "Which of the following is NOT a feature of object-oriented programming?",
    choices: ["polymorphism", "inheritance", "encapsulation", "iteration"],
    correctAnswer: "iteration",
  },
  {
    index: 10,
    topic: "Computer Science",
    question: "An unexpected error or event during program execution that produces an error message is called a(n) ________.",
    choices: ["syntax", "loop", "exception", "iterator"],
    correctAnswer: "exception",
  },
];

const history_questions = [
  {
    index: 1,
    topic: "History",
    question: "Who was the first American to win a Nobel Peace Prize?",
    choices: ["Theodore Roosevelt", "Benjamin Franklin", "Thomas Edison", "F. Scott Fitzgerald"],
    correctAnswer: "Theodore Roosevelt",
  },
  {
    index: 2,
    topic: "History",
    question: "When was the Declaration of Independence signed?",
    choices: ["January 6, 1778", "August 2, 1776", "September 18, 1776", "July 23, 1774"],
    correctAnswer: "August 2, 1776",
  },
  {
    index: 3,
    topic: "History",
    question: "What was the first permanent English settlement in America?",
    choices: ["Roanoke", "Providence", "Jamestown", "Plymouth"],
    correctAnswer: "Jamestown",
  },
  {
    index: 4,
    topic: "History",
    question: "The _______ Compromise regulated the expansion of slavery in the U.S.",
    choices: ["Michigan", "Minnesota", "Missouri", "Mississippi"],
    correctAnswer: "Missouri",
  },
  {
    index: 5,
    topic: "History",
    question: "Who were the Axis Powers in World War II?",
    choices: ["France, the U.K., and the U.S.", "the U.S., the U.K., and the U.S.S.R", "Austria-Hungary, Germany, and the Ottoman Empire", "Germany, Japan, and Italy"],
    correctAnswer: "Germany, Japan, and Italy",
  },
  {
    index: 6,
    topic: "History",
    question: "Which civilization built the pyramids?",
    choices: ["Ancient Egypt", "Ancient Rome", "Ancient Greece", "Ancient China"],
    correctAnswer: "Egypt",
  },
  {
    index: 7,
    topic: "History",
    question: "Which Chinese dynasty built the Great Wall?",
    choices: ["Han", "Ming", "Qin", "Tang"],
    correctAnswer: "Qin",
  },
  {
    index: 8,
    topic: "History",
    question: "Which African leader was the first Black president of South Africa?",
    choices: ["Nelson Mandela", "Haile Selassie", "Kwame Nkrumah", "Patrice Lumumba"],
    correctAnswer: "Nelson Mandela",
  },
  {
    index: 9,
    topic: "History",
    question: "What is the name of the Incan citadel located in modern-day Peru?",
    choices: ["Cusco", "Machu Picchu", "Chichen Itza", "Teotihuacan"],
    correctAnswer: "Machu Picchu",
  },
  {
    index: 10,
    topic: "History",
    question: "Which European cultural and intellectual movement began in the 14th century?",
    choices: ["The Enlightenment", "The Industrial Revolution", "The Reformation", "The Renaissance"],
    correctAnswer: "The Renaissance",
  },
];

const vocab_questions = [
  {
    index: 1,
    topic: "Vocabulary",
    question: "Someone who is reluctant is _______.",
    choices: ["willing", "hesitant", "lucky", "excited"],
    correctAnswer: "hesitant",
  },
  {
    index: 2,
    topic: "Vocabulary",
    question: "If something is available in large quantities, it is _______.",
    choices: ["scarce", "abundant", "scant", "absolute"],
    correctAnswer: "abundant",
  },
  {
    index: 3,
    topic: "Vocabulary",
    question: "What is the meaning of 'contradict?'",
    choices: ["to agree with", "to support", "to assert the opposite", "to emphasize"],
    correctAnswer: "to assert the opposite",
  },
  {
    index: 4,
    topic: "Vocabulary",
    question: "Dull is to glamorous as _______ is to luxurious.",
    choices: ["austere", "audacious", "opulent", "magnificent"],
    correctAnswer: "austere",
  },
  {
    index: 5,
    topic: "Vocabulary",
    question: "What does ambiguous mean?",
    choices: ["misleading", "transparent", "driven", "unclear"],
    correctAnswer: "unclear",
  },
  {
    index: 6,
    topic: "Vocabulary",
    question: "Someone who is well-spoken is ________.",
    choices: ["elegant", "eloquent", "elusive", "elemental"],
    correctAnswer: "eloquent",
  },
  {
    index: 7,
    topic: "Vocabulary",
    question: "A harsh mixture of sounds can be called a ________.",
    choices: ["cacophony", "euphony", "symphony", "harmony"],
    correctAnswer: "cacophony",
  },
  {
    index: 8,
    topic: "Vocabulary",
    question: 'Which word is NOT a synonym for "big"?',
    choices: ["diminutive", "enormous", "gargantuan", "mammoth"],
    correctAnswer: "diminutive",
  },
  {
    index: 9,
    topic: "Vocabulary",
    question: "What does quixotic mean?",
    choices: ["stingy and cruel", "generous and kind", "practical and achievable", "idealistic and unrealistic"],
    correctAnswer: "idealistic and unrealistic",
  },
  {
    index: 10,
    topic: "Vocabulary",
    question: "Amicable is to friendly as ________ is to hostile.",
    choices: ["benevolent", "beatific", "belligerent", "benign"],
    correctAnswer: "belligerent",
  },
];

const math_questions = [
  {
    index: 1,
    topic: "Math",
    question: "What is the value of pi rounded to two decimal places?",
    choices: ["3.14", "4.13", "1.43", "3.41"],
    correctAnswer: "3.14",
  },
  {
    index: 2,
    topic: "Math",
    question: "What is the square root of 81?",
    choices: ["7", "8", "9", "10"],
    correctAnswer: "9",
  },
  {
    index: 3,
    topic: "Math",
    question: "What is 53 % 6?",
    choices: ["7", "5", "3", "1"],
    correctAnswer: "5",
  },
  {
    index: 4,
    topic: "Math",
    question: "Which side is opposite to the right angle in a right triangle?",
    choices: ["adjacent", "hypotenuse", "opposite", "none of the above"],
    correctAnswer: "hypotenuse",
  },
  {
    index: 5,
    topic: "Math",
    question: "What is the value of the golden ratio?",
    choices: ["1.414", "2.718", "3.142", "1.618"],
    correctAnswer: "1.618",
  },
  {
    index: 6,
    topic: "Math",
    question: "The distance from the center of a circle to any points on its circumference is called the ________.",
    choices: ["3.14", "4.13", "1.43", "3.41"],
    correctAnswer: "3.14",
  },
  {
    index: 7,
    topic: "Math",
    question: "What does the slope of a line represent?",
    choices: ["The line's length", "The line's y-intercept", "The ratio of the vertical change to the horizontal change of the line", "The line's angle of inclination"],
    correctAnswer: "The ratio of the vertical change to the horizontal change of the line",
  },
  {
    index: 8,
    topic: "Math",
    question: "If you roll two six-sided dice, what is the probability of getting a sum of 7?",
    choices: ["1/3", "1/6", "1/12", "1/36"],
    correctAnswer: "1/36",
  },
  {
    index: 9,
    topic: "Math",
    question: "If 3x - 7 = 20, what is the value of x?",
    choices: ["6.33", "9", "9.5", "12"],
    correctAnswer: "9",
  },
  {
    index: 10,
    topic: "Math",
    question: "What is the value of 5!?",
    choices: ["15", "20", "60", "120"],
    correctAnswer: "120",
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
  const timerClock = document.getElementById('timerClock')
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
        timerClock.style.background = 'red'
      }
      if (sec == 0) {
        clearInterval(timer);
        if (currentQuestionIndex < current_topic.length) {
          timerElement.classList.remove('blink')
          startTimer();
          timerClock.style.background = 'black'
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
    clearInterval(timer)
    startTimer();
  });
}
