from flask import Flask, request
app = Flask(__name__)


@app.route("/")
def home():
    return "Hello world!"


@app.route("/api/parts", methods=["GET"])
def parts():

    return "request.form"


@app.route("/api/parts", methods=["POST"])
def newParts():
    print(request.form)
    return "Hello!"


if __name__ == "__main__":
    app.run()
