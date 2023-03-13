import mysql.connector
from flask import Flask, request
from flask_cors import CORS
from werkzeug.utils import secure_filename
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="my-secret-pw",
    database="partSubmission"
)

mycursor = mydb.cursor()

app = Flask(__name__)
CORS(app)


def get_data_from_table(table):
    request = "SELECT * FROM " + table
    mycursor.execute(request)
    rows = mycursor.fetchall()
    return rows


def insert_drivetrain_data(Mechanism, NumOfPartsNeededToBeMachined, SizeOfPart, TypeofStock, ThicknessExtrusion, ThicknessPlate, MaterialPlate, LengthInInches, PartNumber, Date, Photo):
    request = f"INSERT INTO partSubmission.Drivetrain (Drivetrain_Mechanism, Drivetrain_NumofPartsNeedToBeMachined, Drivetrain_SizeOfPart, Drivetrain_TypeofStock, Drivetrain_ThicknessExtrusion, Drivetrain_ThicknessPlate, Drivetrain_MaterialPlate, Drivetrains_LengthInInches, Drivetrain_PartNumber, Drivetrain_Date, Drivetrain_Photo ) VALUES('{Mechanism}', '{NumOfPartsNeededToBeMachined}', '{SizeOfPart}', '{TypeofStock}', '{ThicknessExtrusion}', '{ThicknessPlate}', '{MaterialPlate}', '{LengthInInches}', '{PartNumber}', '{Date}', '{Photo }');"
    mycursor.execute(request)
    mydb.commit()
    rows = mycursor.fetchall()
    print(rows)


def insert_3D_Print_data(Mechanism, NumberOfPartsNeededToBeMachined, SizeOfPart, TypeofStock, ThicknessExtrusion, ThicknessPlate, MaterialPlate, LengthInInches, PartNumber, Date, Photo):
    request = f"INSERT INTO partSubmission.`3D Print` (`3DPrint_Mechanism`, `3DPrint_NumberOfPartMachined`, `3DPrint_SizeOfPart`, `3DPrint_TypeOfStock`, `3DPrint_Thickness-Extrusion`, `3DPrint_ThicknessPlate`, `3DPrint_MaterialPlate`, `3DPrint_LengthInInches`, `3DPrint_PartNumber`, `3DPrint_Date`, `3DPrint_Photos`)VALUES('{Mechanism}', '{NumberOfPartsNeededToBeMachined}', '{SizeOfPart}', '{TypeofStock}', '{ThicknessExtrusion}', '{ThicknessPlate}', '{MaterialPlate}', '{LengthInInches}', '{PartNumber}', '{Date}', '{Photo}');"
    mycursor.execute(request)
    mydb.commit()
    rows = mycursor.fetchall()
    print(rows)


def insert_Auxiliary_System_data(Mechanism, NumOfPartsNeededToBeMachined, SizeOfPart, TypeofStock, ThicknessExtrusion, ThicknessPlate, MaterialPlate, LengthInInches, PartNumber, Date, Photo):
    request = f"INSERT INTO partSubmission.`Auxiliary Systems` (AS_Mechanism, AS_NumofPartMachined, AS_SizeOfPart, AS_TypeOfStock, AS_ThicknessExtrusion, AS_ThicknessPlate, AS_MaterialPlate, AS_LengthInInches, AS_PartNumber, AS_Date, AS_Photo) VALUES('{Mechanism}', '{NumOfPartsNeededToBeMachined}', '{SizeOfPart}', '{TypeofStock}', '{ThicknessExtrusion}', '{ThicknessPlate}', '{MaterialPlate}', '{LengthInInches}', '{PartNumber}', '{Date}', '{Photo}' );"
    mycursor.execute(request)
    mydb.commit()
    rows = mycursor.fetchall()
    print(rows)


def insert_Bumpers_data(Mechanism, NumOfPartsNeededToBeMachined, SizeOfPart, TypeofStock, ThicknessExtrusion, ThicknessPlate, MaterialPlate, LengthInInches, PartNumber, Date, Photo):
    request = f"INSERT INTO partSubmission.Bumpers(Bumpers_Mechanism, Bumpers_NumofPartsNeedToBeMachined, Bumpers_SizeOfPart, Bumpers_TypeofStock, Bumpers_ThicknessExtrusion, Bumpers_ThicknessPlate, Bumpers_MaterialPlate, Bumpers_LengthInInches, Bumpers_PartNumber, Bumpers_Date, Bumpers_Photo)VALUES('{Mechanism}', '{NumOfPartsNeededToBeMachined}', '{SizeOfPart}','{TypeofStock}', '{ThicknessExtrusion}', '{ThicknessPlate}', '{MaterialPlate}', '{LengthInInches}', '{PartNumber}', '{Date}', '{Photo}');"
    mycursor.execute(request)
    mydb.commit()
    rows = mycursor.fetchall()
    print(rows)


def insert_Drivetrain_data(Mechanism, NumOfPartsNeededToBeMachined, SizeOfPart, TypeofStock, ThicknessExtrusion, ThicknessPlate, MaterialPlate, LengthInInches, PartNumber, Date, Photo):
    request = f"INSERT INTO partSubmission.Drivetrain(Drivetrain_Mechanism, Drivetrain_NumofPartsNeedToBeMachined, Drivetrain_SizeOfPart, Drivetrain_TypeofStock, Drivetrain_ThicknessExtrusion, Drivetrain_ThicknessPlate, Drivetrain_MaterialPlate, Drivetrains_LengthInInches, Drivetrain_PartNumber, Drivetrain_Date, Drivetrain_Photo) VALUES('{Mechanism}', '{NumOfPartsNeededToBeMachined}', '{SizeOfPart}','{TypeofStock}', '{ThicknessExtrusion}', '{ThicknessPlate}', '{MaterialPlate}', '{LengthInInches}', '{PartNumber}', '{Date}', '{Photo}');"
    mycursor.execute(request)
    mydb.commit()
    rows = mycursor.fetchall()
    print(rows)


def insert_Elevator_data(Mechanism, NumOfPartsNeededToBeMachined, SizeOfPart, TypeofStock, ThicknessExtrusion, ThicknessPlate, MaterialPlate, LengthInInches, PartNumber, Date, Photo):
    request = f"INSERT INTO partSubmission.Elevator (Elevator_Mechanism, Elevator_NumofPartsNeedMachined, Elevator_SizeOfPart, Elevator_TypeOfStock, Elevator_ThicknessExtrusion, Elevator_ThicknessPlate, Elevator_MaterialPlate, Elevator_LengthInInches, Elevator_PartNumber, Elevator_Date, Elevator_Photos) VALUES('{Mechanism}', '{NumOfPartsNeededToBeMachined}', '{SizeOfPart}','{TypeofStock}', '{ThicknessExtrusion}', '{ThicknessPlate}', '{MaterialPlate}', '{LengthInInches}', '{PartNumber}', '{Date}', '{Photo}');"
    mycursor.execute(request)
    mydb.commit()
    rows = mycursor.fetchall()
    print(rows)


def insert_Forebar_data(Mechanism, NumOfPartsNeededToBeMachined, SizeOfPart, TypeofStock, ThicknessExtrusion, ThicknessPlate, MaterialPlate, LengthInInches, PartNumber, Date, Photo):
    request = f"INSERT INTO partSubmission.Forebar (Forebar_Mechanism, Forebar_NumofPartsNeedMachined, Forebar_SizeOfPart, Forebar_TypeOfStock, Forebar_ThicknessExtrusion, Forebar_ThicknessPlate, Forebar_MaterialPlate, Forebar_LengthInInches, Forebar_PartNumber, Forebar_Date, Forebar_Photos) VALUES('{Mechanism}', '{NumOfPartsNeededToBeMachined}', '{SizeOfPart}', '{TypeofStock}','{ThicknessExtrusion}', '{ThicknessPlate}', '{MaterialPlate}', '{LengthInInches}', '{PartNumber}', '{Date}', '{Photo}');"
    mycursor.execute(request)
    mydb.commit()
    rows = mycursor.fetchall()
    print(rows)


def insert_Intake_data(Mechanism, NumOfPartsNeededToBeMachined, SizeOfPart, TypeofStock, ThicknessExtrusion, ThicknessPlate, MaterialPlate, LengthInInches, PartNumber, Date, Photo):
    request = f"INSERT INTO partSubmission.Intake (Intake_Mechanism, Intake_NumofPartsNeedToMachined, Intake_SizeOfPart, Intake_TypeOfStock, Intake_ThicknessExtrusion, Intake_ThicknessPlate, Intake_MaterialPlate, Intake_LengthInInches, Intake_PartNumber, Intake_Date, Intake_Photos) VALUES('{Mechanism}', '{NumOfPartsNeededToBeMachined}', '{SizeOfPart}','{TypeofStock}', '{ThicknessExtrusion}', '{ThicknessPlate}', '{MaterialPlate}', '{LengthInInches}', '{PartNumber}', '{Date}', '{Photo}');"
    mycursor.execute(request)
    mydb.commit()
    rows = mycursor.fetchall()
    print(rows)


@app.route("/")
def home():
    return "Hello world!"


@app.route("/api/parts", methods=["GET"])
def parts():

    return "request.form"


@app.route("/api/machining", methods=["POST"])
def newMachining():
    print(request.form)
    return "Hello!"


@app.route("/api/elevator", methods=["POST"])
def ElevatorParts():
    print(request.form)
    print(request.form.get('elevator_Mechanism'))
    insert_Elevator_data(request.form.get('elevator_Mechanism'),
                         request.form.get('elevator_NumberOfParts'), request.form.get('elevator_SizeOfPart'), request.form.get('elevator_TypeOfStock'), request.form.get('elevator_Thickness(Extrusion)'), request.form.get('elevator_Thickness(Plate)'), request.form.get('elevator_Material(Plate)'), request.form.get('elevator_LengthInInches'), request.form.get('elevator_PartNumber'), request.form.get('elevator_date'), request.form.get('elevator_photos'))
    return "Hello!"


@app.route("/api/elevator", methods=["GET"])
def getelevatorparts():

    return get_data_from_table("Elevator")


@app.route("/api/drivetrain", methods=["POST"])
def DrivetrainParts():
    print(request.form)
    print(request.form.get('drivetrain_Mechanism'))
    insert_Drivetrain_data(request.form.get('drivetrain_Mechanism'),
                           request.form.get('drivetrain_NumberOfParts'), request.form.get('drivetrain_SizeOfPart'), request.form.get('drivetrain_TypeOfPart'), request.form.get('drivetrain_Thickness(Extrusion)'), request.form.get('drivetrain_Thickness(Plate)'), request.form.get('drivetrain_Material(Plate)'), request.form.get('drivetrain_LengthInInches'), request.form.get('drivetrain_PartNumber'), request.form.get('drivetrain_cal'), request.form.get('drivetrain_photos'))
    return "Hello!"


@app.route("/api/drivetrain", methods=["GET"])
def getdrivetrainparts():

    return get_data_from_table("Drivetrain")


@app.route("/api/bumpers", methods=["POST"])
def BumpersParts():
    print(request.form)
    print(request.form.get('bumpers_Mechanism'))
    insert_Bumpers_data(request.form.get('bumpers_Mechanism'),
                        request.form.get('bumpers_NumberOfParts'), request.form.get('bumpers_SizeOfPart'), request.form.get('bumpers_TypeOfStock'), request.form.get('bumpers_Thickness(Extrusion)'), request.form.get('bumpers_Thickness(Plate)'), request.form.get('bumpers_Material(Plate)'), request.form.get('bumpers_LengthInInches'), request.form.get('bumpers_PartNumber'), request.form.get('bumpers_date'), request.form.get('Bumpers_Photo'))
    return "Hello!"


@app.route("/api/bumpers", methods=["GET"])
def getbumpersparts():

    return get_data_from_table("Bumpers")


@app.route("/api/intake", methods=["POST"])
def IntakeParts():
    print(request.form)
    print(request.form.get('intake_Mechanism'))
    insert_Intake_data(request.form.get('intake_Mechanism'),
                       request.form.get('intake_NumberOfParts'), request.form.get('intake_SizeOfPart'), request.form.get('intake_TypeOfStock'), request.form.get('intake_Thickness(Extrusion)'), request.form.get('intake_Thickness(Plate)'), request.form.get('intake_Material(Plate)'), request.form.get('intake_LengthInInches'), request.form.get('intake_PartNumber'), request.form.get('intake_date'), request.form.get('Intake_Photos'))
    return "Hello!"


@app.route("/api/intake", methods=["GET"])
def getintakeparts():

    return get_data_from_table("Intake")


@app.route("/api/forebar", methods=["POST"])
def ForebarParts():
    print(request.form)
    print(request.form.get('Forebar_Mechanism'))
    insert_Forebar_data(request.form.get('Forebar_Mechanism'),
                        request.form.get('Forebar_NumberOfParts'), request.form.get('Forebar_SizeOfPart'), request.form.get('Forebar_TypeOfStock'), request.form.get('Forebar_Thickness(Extrusion)'), request.form.get('Forebar_Thickness(Plate)'), request.form.get('Forebar_Material(Plate)'), request.form.get('Forebar_LengthInInches'), request.form.get('Forebar_PartNumber'), request.form.get('Forebar_date'), request.form.get('Forebar_Photos'))
    return "Hello!"


@app.route("/api/forebar", methods=["GET"])
def getforebarparts():

    return get_data_from_table("Forebar")


@app.route("/api/auxiliary-systems", methods=["POST"])
def ASParts():
    print(request.form)
    print(request.form.get('AuxiliarySystems_mechanism'))
    insert_Auxiliary_System_data(request.form.get('AuxiliarySystems_mechanism'),
                                 request.form.get('AuxiliarySystems_NumberOfParts'), request.form.get('AuxiliarySystems_SizeOfPart'), request.form.get('AuxiliarySystems_TypeOfStock'), request.form.get('AuxiliarySystems_Thickness(Extrusion)'), request.form.get('AuxiliarySystems_Thickness(Plate)'), request.form.get('AuxiliarySystems_Material(Plate)'), request.form.get('AuxiliarySystems_LengthInInches'), request.form.get('AuxiliarySystems_PartNumber'), request.form.get('AuxiliarySystems_date'), request.form.get('AS_Photo'))
    return "Hello!"


@app.route("/api/auxiliary-systems", methods=["GET"])
def getaASparts():

    return get_data_from_table("`Auxiliary Systems`")


@app.route("/api/3DPrint", methods=["POST"])
def ThreeDParts():
    print(request.form)
    print(request.form.get('ThreeDPrint_Mechanism'))
    insert_3D_Print_data(request.form.get('ThreeDPrint_Mechanism'),
                         request.form.get('ThreeDPrint_NumberOfParts'), request.form.get('ThreeDPrint_SizeOfPart'), request.form.get('ThreeDPrint_TypeOfStock'), request.form.get('ThreeDPrint_Thickness(Extrusion)'), request.form.get('ThreeDPrint_Thickness(Plate)'), request.form.get('ThreeDPrint_Material(Plate)'), request.form.get('ThreeDPrint_LengthInInches'), request.form.get('ThreeDPrint_PartNumber'), request.form.get('ThreeDPrint_date'), request.form.get('3DPrint_Photos'))
    return "Hello!"


@app.route("/api/3DPrint", methods=["GET"])
def get3DPrintparts():

    return get_data_from_table("`3D Print`")


@ app.route('/uploader', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['my_file']
        f.save(secure_filename(f.filename))
        return 'file uploaded successfully'


if __name__ == "__main__":
    app.run()
