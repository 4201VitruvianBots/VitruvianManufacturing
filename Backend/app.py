from flask import Flask
app = Flask(__name__)


@app.route("/")
def home():
    return "Hello world!"


@app.route("/api/parts", methods=["GET"])
def parts():
    return "request.form"


@app.route("/api/parts", methods=["POST"])
def newParts():
    return "Hello!"
