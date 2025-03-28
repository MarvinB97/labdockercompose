from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "if you don´t see the message try to add /api to your URL ☻"})
@app.route("/api", methods=["GET"])
def my_service():
    return jsonify({"message": "Hello, from service4 Santiago Balladales Scarpetta-2510051"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5004)
