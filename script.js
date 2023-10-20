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


let container = document.querySelector('.container')
let choices = document.getElementsByClassName('child-container')

choices.map((choice) => {
    console.log('choice', choice)
})



questions.map((element) => {
  console.log(element.key);
  console.log(element.choices);
  const correctAnswer = element.correctAnswer
  for (let choice of element.choices) {
    choice == correctAnswer ? console.log("correct") : console.log("incorrect");
  }
});

