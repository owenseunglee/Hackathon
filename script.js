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
    choices: ["wrong", "wrong","correct", "wrong"],
    correctAnswer: "correct",
  },
  {
    index: 5,
    question: "Question 5",
    choices: ["correct", "wrong", "wrong", "wrong"],
    correctAnswer: "correct",
  },
];



const choices = document.querySelectorAll(".child-container");
const question = document.getElementById('question')
let currentQuestionIndex = 0;
let score = 0
let currentIndex = 0

let displayScore = document.createElement('div')
displayScore.className = 'display-score'
displayScore.textContent = score
document.body.appendChild(displayScore)


function incrementScore(){
  score++
  currentQuestionIndex++
  question.textContent = questions[currentQuestionIndex].question;
  displayScore.textContent = score
}

Array.from(choices).forEach((choiceElement, index) => {
  choiceElement.textContent = questions[currentQuestionIndex].choices[index];
  question.textContent = questions[currentQuestionIndex].question;

  choiceElement.addEventListener("click", () => {
    if (questions[currentQuestionIndex].choices[index] === questions[currentQuestionIndex].correctAnswer) {
      console.log("Correct!");
      incrementScore()
    } else {
      console.log("Incorrect!");
    }
    if (currentQuestionIndex <= questions.length) {
      Array.from(choices).forEach((choiceElement, index) => {
        choiceElement.textContent = questions[currentQuestionIndex].choices[index];
      });
    } else {
      console.log('Quiz Completed');
    }
  });
});

