import mysql.connector

from flask import Flask, request
from werkzeug.utils import secure_filename
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="my-secret-pw",
    database="PrinterStatus"
)

mycursor = mydb.cursor()

app = Flask(__name__)
