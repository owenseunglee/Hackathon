from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

with open("questions.json", "r") as json_file:
    questions_data = json.load(json_file)

@app.route('/fetch-questions', methods=['GET'])
def fetch_questions():
    return jsonify(questions_data)

if __name__ == '__main__':
    app.run(host='localhost', port=3000, debug=True)