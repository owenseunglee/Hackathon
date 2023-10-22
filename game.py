from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

cs_questions = [
    {
        "index": 1,
        "topic": "Computer Science",
        "question": "What is the primary function of an operating system?",
        "choices": ["Running software applications", "Managing hardware resources and providing user interfaces", "Storing data and files", "Controlling the flow of electricity within the computer"],
        "correctAnswer": "Managing hardware resources and providing user interfaces",
    },
    {
        "index": 2,
        "topic": "Computer Science",
        "question": "What does RAM stand for in the context of computer hardware?",
        "choices": ["Random Access Memory", "Read-Only Memory", "Randomly Allocated Module", "Rapid Application Management"],
        "correctAnswer": "Random Access Memory",
    },
    {
        "index": 3,
        "topic": "Computer Science",
        "question": "Which of these languages is commonly used for front-end web development?",
        "choices": ["Java", "Python", "HTML", "SQL"],
        "correctAnswer": "HTML",
    },
    {
        "index": 4,
        "topic": "Computer Science",
        "question": "What does HTTP stand for in the context of web communication?",
        "choices": ["Hypersonic Text Processing", "Hyperlink Text Transmission", "High-Tech Transfer Procedure", "Hypertext Transfer Protocol"],
        "correctAnswer": "Hypertext Transfer Protocol",
    },
    {
        "index": 5,
        "topic": "Computer Science",
        "question": "What is the purpose of a compiler in programming?",
        "choices": ["To execute the program", "To debug the program", "To convert the high-level programming code into machine code", "To store data temporarily during program execution"],
        "correctAnswer": "To convert the high-level programming code into machine code",
    },
    {
        "index": 6,
        "topic": "Computer Science",
        "question": "What is the primary purpose of an API?",
        "choices": ["To design user interfaces for mobile apps", "To provide a set of functions and protocols for building and interacting with software applications", "To organize and store data on a web server", "To optimize website performance for search engines"],
        "correctAnswer": "To provide a set of functions and protocols for building and interacting with software applications",
    },
    {
        "index": 7,
        "topic": "Computer Science",
        "question": "Which of these is not a type of loop?",
        "choices": ["for loop", "do-for loop", "while loop", "do-while loop"],
        "correctAnswer": "do-for loop",
    },
    {
        "index": 8,
        "topic": "Computer Science",
        "question": "Which data structure exhibits LIFO behavior?",
        "choices": ["stack", "queue", "linked list", "binary tree"],
        "correctAnswer": "stack",
    },
    {
        "index": 9,
        "topic": "Computer Science",
        "question": "Which of the following is NOT a feature of object-oriented programming?",
        "choices": ["polymorphism", "inheritance", "encapsulation", "iteration"],
        "correctAnswer": "iteration",
    },
    {
        "index": 10,
        "topic": "Computer Science",
        "question": "An unexpected error or event during program execution that produces an error message is called a(n) ________.",
        "choices": ["syntax", "loop", "exception", "iterator"],
        "correctAnswer": "exception",
    },
]

history_questions = [
    {
        "index": 1,
        "topic": "History",
        "question": "Who was the first American to win a Nobel Peace Prize?",
        "choices": ["Theodore Roosevelt", "Benjamin Franklin", "Thomas Edison", "F. Scott Fitzgerald"],
        "correctAnswer": "Theodore Roosevelt",
    },
    {
        "index": 2,
        "topic": "History",
        "question": "When was the Declaration of Independence signed?",
        "choices": ["January 6, 1778", "August 2, 1776", "September 18, 1776", "July 23, 1774"],
        "correctAnswer": "August 2, 1776",
    },
    {
        "index": 3,
        "topic": "History",
        "question": "What was the first permanent English settlement in America?",
        "choices": ["Roanoke", "Providence", "Jamestown", "Plymouth"],
        "correctAnswer": "Jamestown",
    },
    {
        "index": 4,
        "topic": "History",
        "question": "The _______ Compromise regulated the expansion of slavery in the U.S.",
        "choices": ["Michigan", "Minnesota", "Missouri", "Mississippi"],
        "correctAnswer": "Missouri",
    },
    {
        "index": 5,
        "topic": "History",
        "question": "Who were the Axis Powers in World War II?",
        "choices": ["France, the U.K., and the U.S.", "the U.S., the U.K., and the U.S.S.R", "Austria-Hungary, Germany, and the Ottoman Empire", "Germany, Japan, and Italy"],
        "correctAnswer": "Germany, Japan, and Italy",
    },
    {
        "index": 6,
        "topic": "History",
        "question": "Which civilization built the pyramids?",
        "choices": ["Ancient Egypt", "Ancient Rome", "Ancient Greece", "Ancient China"],
        "correctAnswer": "Egypt",
    },
    {
        "index": 7,
        "topic": "History",
        "question": "Which Chinese dynasty built the Great Wall?",
        "choices": ["Han", "Ming", "Qin", "Tang"],
        "correctAnswer": "Qin",
    },
    {
        "index": 8,
        "topic": "History",
        "question": "Which African leader was the first Black president of South Africa?",
        "choices": ["Nelson Mandela", "Haile Selassie", "Kwame Nkrumah", "Patrice Lumumba"],
        "correctAnswer": "Nelson Mandela",
    },
    {
        "index": 9,
        "topic": "History",
        "question": "What is the name of the Incan citadel located in modern-day Peru?",
        "choices": ["Cusco", "Machu Picchu", "Chichen Itza", "Teotihuacan"],
        "correctAnswer": "Machu Picchu",
    },
    {
        "index": 10,
        "topic": "History",
        "question": "Which European cultural and intellectual movement began in the 14th century?",
        "choices": ["The Enlightenment", "The Industrial Revolution", "The Reformation", "The Renaissance"],
        "correctAnswer": "The Renaissance",
    },
]

vocab_questions = [
    {
        "index": 1,
        "topic": "Vocabulary",
        "question": "Someone who is reluctant is _______.",
        "choices": ["willing", "hesitant", "lucky", "excited"],
        "correctAnswer": "hesitant",
    },
    {
        "index": 2,
        "topic": "Vocabulary",
        "question": "If something is available in large quantities, it is _______.",
        "choices": ["scarce", "abundant", "scant", "absolute"],
        "correctAnswer": "abundant",
    },
    {
        "index": 3,
        "topic": "Vocabulary",
        "question": "What is the meaning of 'contradict?'",
        "choices": ["to agree with", "to support", "to assert the opposite", "to emphasize"],
        "correctAnswer": "to assert the opposite",
    },
    {
        "index": 4,
        "topic": "Vocabulary",
        "question": "Dull is to glamorous as _______ is to luxurious.",
        "choices": ["austere", "audacious", "opulent", "magnificent"],
        "correctAnswer": "austere",
    },
    {
        "index": 5,
        "topic": "Vocabulary",
        "question": "What does ambiguous mean?",
        "choices": ["misleading", "transparent", "driven", "unclear"],
        "correctAnswer": "unclear",
    },
    {
        "index": 6,
        "topic": "Vocabulary",
        "question": "Someone who is well-spoken is ________.",
        "choices": ["elegant", "eloquent", "elusive", "elemental"],
        "correctAnswer": "eloquent",
    },
    {
        "index": 7,
        "topic": "Vocabulary",
        "question": "A harsh mixture of sounds can be called a ________.",
        "choices": ["cacophony", "euphony", "symphony", "harmony"],
        "correctAnswer": "cacophony",
    },
    {
        "index": 8,
        "topic": "Vocabulary",
        "question": 'Which word is NOT a synonym for "big"?',
        "choices": ["diminutive", "enormous", "gargantuan", "mammoth"],
        "correctAnswer": "diminutive",
    },
    {
        "index": 9,
        "topic": "Vocabulary",
        "question": "What does quixotic mean?",
        "choices": ["stingy and cruel", "generous and kind", "practical and achievable", "idealistic and unrealistic"],
        "correctAnswer": "idealistic and unrealistic",
    },
    {
        "index": 10,
        "topic": "Vocabulary",
        "question": "Amicable is to friendly as ________ is to hostile.",
        "choices": ["benevolent", "beatific", "belligerent", "benign"],
        "correctAnswer": "belligerent",
    },
]

math_questions = [
    {
        "index": 1,
        "topic": "Math",
        "question": "What is the value of pi rounded to two decimal places?",
        "choices": ["3.14", "4.13", "1.43", "3.41"],
        "correctAnswer": "3.14",
    },
    {
        "index": 2,
        "topic": "Math",
        "question": "What is the square root of 81?",
        "choices": ["7", "8", "9", "10"],
        "correctAnswer": "9",
    },
    {
        "index": 3,
        "topic": "Math",
        "question": "What is 53 % 6?",
        "choices": ["7", "5", "3", "1"],
        "correctAnswer": "5",
    },
    {
        "index": 4,
        "topic": "Math",
        "question": "Which side is opposite to the right angle in a right triangle?",
        "choices": ["adjacent", "hypotenuse", "opposite", "none of the above"],
        "correctAnswer": "hypotenuse",
    },
    {
        "index": 5,
        "topic": "Math",
        "question": "What is the value of the golden ratio?",
        "choices": ["1.414", "2.718", "3.142", "1.618"],
        "correctAnswer": "1.618",
    },
    {
        "index": 6,
        "topic": "Math",
        "question": "The distance from the center of a circle to any points on its circumference is called the ________.",
        "choices": ["3.14", "4.13", "1.43", "3.41"],
        "correctAnswer": "3.14",
    },
    {
        "index": 7,
        "topic": "Math",
        "question": "What does the slope of a line represent?",
        "choices": ["The line's length", "The line's y-intercept", "The ratio of the vertical change to the horizontal change of the line", "The line's angle of inclination"],
        "correctAnswer": "The ratio of the vertical change to the horizontal change of the line",
    },
    {
        "index": 8,
        "topic": "Math",
        "question": "If you roll two six-sided dice, what is the probability of getting a sum of 7?",
        "choices": ["1/3", "1/6", "1/12", "1/36"],
        "correctAnswer": "1/36",
    },
    {
        "index": 9,
        "topic": "Math",
        "question": "If 3x - 7 = 20, what is the value of x?",
        "choices": ["6.33", "9", "9.5", "12"],
        "correctAnswer": "9",
    },
    {
        "index": 10,
        "topic": "Math",
        "question": "What is the value of 5!?",
        "choices": ["15", "20", "60", "120"],
        "correctAnswer": "120",
    },
]

categories = [cs_questions, math_questions, history_questions, vocab_questions]

@app.route('/fetch-questions', methods=['GET'])
def fetch_questions():
    return jsonify(categories)

if __name__ == '__main__':
    app.run(host='localhost', port=3000, debug=True)