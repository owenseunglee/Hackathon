let currentQuestionIndex = 0;
const questions = [
  {
    index: 1,
    question: "Who was the 16th President of the United States?",
    choices: ["wrong", "wrong", "wrong", "correct"],
    correctAnswer: "correct",
  },
  {
    index: 2,
    question: "Who was the 16th President of the United States?",
    choices: ["correct", "wrong", "wrong", "wrong"],
    correctAnswer: "correct",
  },
  {
    index: 3,
    question: "Who was the 16th President of the United States?",
    choices: ["wrong", "correct", "wrong", "wrong"],
    correctAnswer: "correct",
  },
  {
    index: 4,
    question: "Who was the 16th President of the United States?",
    choices: ["wrong", "wrong","correct", "wrong"],
    correctAnswer: "correct",
  },
  {
    index: 5,
    question: "Who was the 16th President of the United States?",
    choices: ["correct", "wrong", "wrong", "wrong"],
    correctAnswer: "correct",
  },
];

const choices = document.querySelectorAll(".child-container");

Array.from(choices).forEach((choiceElement, index) => {
  choiceElement.textContent = questions[currentQuestionIndex].choices[index];

  choiceElement.addEventListener("click", () => {
    if (questions[currentQuestionIndex].choices[index] === questions[currentQuestionIndex].correctAnswer) {
      console.log("Correct!");
      currentQuestionIndex++;
    } else {
      console.log("Incorrect!");
    }
    if (currentQuestionIndex < questions.length) {
      Array.from(choices).forEach((choiceElement, index) => {
        choiceElement.textContent = questions[currentQuestionIndex].choices[index];
      });
    } else {
      console.log('Quiz Completed');
    }
  });
});
