import mysql.connector
from flask import Flask, request
from flask_cors import CORS
from werkzeug.utils import secure_filename
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="my-secret-pw",
    database="PrinterStatus"
)

mycursor = mydb.cursor()

app = Flask(__name__)
CORS(app)
def get_data_from_table(table):
    request = "SELECT * FROM " + table
    mycursor.execute(request)
    rows = mycursor.fetchall()
    return rows

@app.route("/")
def home():
    return "Hello world!"

def insert_PrinterStatus_data(NameOfPrinter, StatusOfPrinter, IssueOfPrinter, Date):
    request = f"INSERT INTO PrinterStatus.PrinterStatus (NameOfPrinter, StatusOfPrinter, IssueOfPrinter, NewDate) VALUES('{NameOfPrinter}', '{StatusOfPrinter}', '{IssueOfPrinter}','{Date}');"
    mycursor.execute(request)
    mydb.commit()
    rows = mycursor.fetchall()
    print(rows)



@app.route("/api/printer", methods=["GET"])
def Printer():
    return "request.form"


@app.route("/api/printer", methods=["POST"])
def PrinterStatus():
    print(request.form)
    return "Hello!"


@app.route("/api/printerStatus", methods=["POST"])
def Printer():
    print(request.form)
    print(request.form.get('elevator_Mechanism'))
    insert_PrinterStatus_data(request.form.get('NameOfPrinter'),
                         request.form.get('StatusOfPrinter'), request.form.get('IssueOfPrinter'), request.form.get('NewDate'))
    return "Hello!"


@app.route("/api/printer", methods=["GET"])
def getPrinterStatus():

    return get_data_from_table("PrinterStatus")

if __name__ == "__main__":
    app.run()