let currentQuestionIndex = 0;

const questions = [
    {
        key: 1,
        question: 'Who was the 16th President of the United States?',
        answer1: 'wrong',
        answer2: 'wrong',
        answer3: 'correct',
        answer4: 'wrong',
        correctAnswer: 'correct'
    },
    {
        key: 2,
        question: 'Who was the 16th President of the United States?',
        answer1: 'wrong',
        answer2: 'correct',
        answer3: 'wrong',
        answer4: 'wrong',
        correctAnswer: 'correct'
    },
];

function displayQuestion(question) {
    const userSelectedAnswer = 'correct'; 
    if (userSelectedAnswer === question.correctAnswer) {
        console.log('Correct');
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion(questions[currentQuestionIndex]);
        } else {
            console.log('correct');
        }
    } else {
        console.log('wrong');
    }
}

displayQuestion(questions[currentQuestionIndex]);


let score = 0