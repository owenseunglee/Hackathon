from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

questions = [
  {
    "index": 1,
    "question": "Question 1",
    "choices": ["wrong", "wrong", "wrong", "correct"],
    "correctAnswer": "correct",
  },
  {
    "index": 2,
    "question": "Question 2",
    "choices": ["correct", "wrong", "wrong", "wrong"],
    "correctAnswer": "correct",
  },
  {
    "index": 3,
    "question": "Question 3",
    "choices": ["wrong", "correct", "wrong", "wrong"],
    "correctAnswer": "correct",
  },
  {
    "index": 4,
    "question": "Question 4",
    "choices": ["wrong", "wrong", "correct", "wrong"],
    "correctAnswer": "correct",
  },
  {
    "index": 5,
    "question": "Question 5",
    "choices": ["correct", "wrong", "wrong", "wrong"],
    "correctAnswer": "correct",
  },
];

@app.route('/get-questions', methods=['GET'])
def questions():
    if request.method == 'GET':
        if len(questions) > 0:
            return jsonify(questions)
        else:
            return'Nothing Found', 404

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)