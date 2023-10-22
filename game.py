from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

cs_questions = {
    "Question_1" : {"index": 1, "question": "Question 1", "choices": ["wrong", "wrong", "wrong", "correct"], "correctAnswer": "correct"},
    "Question_2" : {"index": 2, "question": "Question 2", "choices": ["correct", "wrong", "wrong", "wrong"], "correctAnswer": "correct"},
    "Question_3" : {"index": 3, "question": "Question 3", "choices": ["wrong", "correct", "wrong", "wrong"], "correctAnswer": "correct"},
    "Question_4" : {"index": 4, "question": "Question 4", "choices": ["wrong", "wrong", "correct", "wrong"], "correctAnswer": "correct"},
    "Question_5" : {"index": 5, "question": "Question 5", "choices": ["correct", "wrong", "wrong", "wrong"], "correctAnswer": "correct"},
}

@app.route('/get-questions', methods=['GET'])
def questions():
    print(jsonify(cs_questions))
    return jsonify(cs_questions)

if __name__ == '__main__':
    app.run(host='localhost', port=3000, debug=True)