let currentQuestionIndex = 0;
const questions = [
    {
      key: 1,
      question: "Who was the 16th President of the United States?",
      choices: ["wrong", "wrong", "wrong", "correct"],
      correctAnswer: "correct",
    },
    {
      key: 2,
      question: "Who was the 16th President of the United States?",
      choices: ["correct", "wrong", "wrong", "wrong"],
      correctAnswer: "correct",
    },
  ];

  const choices = document.querySelectorAll('.child-container');
  Array.from(choices).map((choice) => {
      console.log(choice.textContent);
  });
  

questions.map((element) => {
  console.log(element.key);
  console.log(element.choices);
  const correctAnswer = element.correctAnswer
  for (let choice of element.choices) {
    choice == correctAnswer ? console.log("correct") : console.log("incorrect");
  }
});

