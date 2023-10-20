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
  
  const displayQuestion = (question) => {
      Array.from(choices).forEach((choiceElement, index) => {
  
         choiceElement.textContent = question.choices[index];
  
         choiceElement.addEventListener('click', () => {
              if (question.choices[index] === question.correctAnswer) { 
                  console.log("Correct!");
              } else {
                  console.log("Incorrect!");
              }
  
              currentQuestionIndex++;
              if (currentQuestionIndex < questions.length) {
                  displayQuestion(questions[currentQuestionIndex]);
              } else {
                  console.log("Quiz completed!");
              }
          });
      });
  };
  
  displayQuestion(questions[currentQuestionIndex]);

questions.map((element) => {
  console.log(element.key);
  console.log(element.choices);
  const correctAnswer = element.correctAnswer
  for (let choice of element.choices) {
    choice == correctAnswer ? console.log("correct") : console.log("incorrect");
  }
});

