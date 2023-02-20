import mysql.connector

from flask import Flask, request
from werkzeug.utils import secure_filename
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="my-secret-pw",
    database="<MY DATABASE>"
)

mycursor = mydb.cursor()

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


@app.route('/uploader', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['my_file']
        f.save(secure_filename(f.filename))
        return 'file uploaded successfully'


if __name__ == "__main__":
    app.run()
