import mysql.connector
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="my-secret-pw",
    database="partSubmission"
)

mycursor = mydb.cursor()


def get_columns(table):
    mycursor.execute("SHOW COLUMNS FROM " + table)
    columnList = mycursor.fetchall()
    print(columnList)


# get_columns("partSubmission.Drivetrain")


def get_data_from_table(table):
    request = "SELECT * FROM " + table
    mycursor.execute(request)
    rows = mycursor.fetchall()
    print(rows)


get_data_from_table("`ThreeDPrint_Mechanism`")


# INSERT INTO partSubmission.Drivetrain
# (Drivetrain_Mechanism, Drivetrain_NumofPartsNeedToBeMachined, Drivetrain_SizeOfPart, Drivetrain_TypeofStock, Drivetrain_ThicknessExtrusion, Drivetrain_ThicknessPlate, Drivetrain_MaterialPlate, Drivetrains_LengthInInches, Drivetrain_PartNumber, Drivetrain_Date, Drivetrain_Photo)
# VALUES('bvbcn', 'fgfff', 'sssss', 'ssses', 'dsgfd', 'gfgdf', 'dgmdfgh', 'ssssdgwe', 'sdfgdsf', 'dsfsdfsdf', 'sdgsdf');

def insert_drivetrain_data(Mechanism, NumOfPartsNeededToBeMachined, SizeOfPart, TypeofStock, ThicknessExtrusion, ThicknessPlate, MaterialPlate, LengthInInches, PartNumber, Date, Photo):
    request = f"INSERT INTO partSubmission.Drivetrain (Drivetrain_Mechanism, Drivetrain_NumofPartsNeedToBeMachined, Drivetrain_SizeOfPart, Drivetrain_TypeofStock, Drivetrain_ThicknessExtrusion, Drivetrain_ThicknessPlate, Drivetrain_MaterialPlate, Drivetrains_LengthInInches, Drivetrain_PartNumber, Drivetrain_Date, Drivetrain_Photo ) VALUES('{Mechanism}', '{NumOfPartsNeededToBeMachined}', '{SizeOfPart}', '{TypeofStock}', '{ThicknessExtrusion}', '{ThicknessPlate}', '{MaterialPlate}', '{LengthInInches}', '{PartNumber}', '{Date}', '{Photo }');"
    mycursor.execute(request)
    mydb.commit()
    rows = mycursor.fetchall()
    print(rows)


# insert_drivetrain_data("Forebar", "5", "1/8", "Money",
#                        "1/10", "0.5", "Wood", "7", "55", "2023", ".png")
# INSERT INTO partSubmission.`3D Print`
# (`3DPrint_Mechanism`, `3DPrint_NumberOfPartMachined`, `3DPrint_SizeOfPart`, `3DPrint_TypeOfStock`, `3DPrint_Thickness-Extrusion`, `3DPrint_ThicknessPlate`, `3DPrint_MaterialPlate`, `3DPrint_LengthInInches`, `3DPrint_PartNumber`, `3DPrint_Date`, `3DPrint_Photos`)
# VALUES('222', '551', '41785', '2515', '0.4878', '15230', '579505', '5514', '888', '0.6', '1');


def insert_3D_Print_data(Mechanism, NumberOfPartsNeededToBeMachined, SizeOfPart, TypeofStock, ThicknessExtrusion, ThicknessPlate, MaterialPlate, LengthInInches, PartNumber, Date, Photo):
    request = f"INSERT INTO partSubmission.`3D Print` (`ThreeDPrint_Mechanism`, `ThreeDPrint_NumberOfParts`, `ThreeDPrint_SizeOfPart`, `ThreeDPrint_TypeOfStock`, `ThreeDPrint_Thickness(Extrusion)`, `3DPrint_ThicknessPlate`, `3DPrint_MaterialPlate`, `3DPrint_LengthInInches`, `3DPrint_PartNumber`, `3DPrint_Date`, `3DPrint_Photos`)VALUES('{Mechanism}', '{NumberOfPartsNeededToBeMachined}', '{SizeOfPart}', '{TypeofStock}', '{ThicknessExtrusion}', '{ThicknessPlate}', '{MaterialPlate}', '{LengthInInches}', '{PartNumber}', '{Date}', '{Photo}');"
    mycursor.execute(request)
    mydb.commit()
    rows = mycursor.fetchall()
    print(rows)


# insert_3D_Print_data("Forebar", "59", "01/8", "Mo^ney",
#                      "1/100", "0.05", "WoSod", "7V", "5S5", "2S023", ".png")


def insert_Auxiliary_System_data(Mechanism, NumOfPartsNeededToBeMachined, SizeOfPart, TypeofStock, ThicknessExtrusion, ThicknessPlate, MaterialPlate, LengthInInches, PartNumber, Date, Photo):
    request = f"INSERT INTO partSubmission.`Auxiliary Systems` (AS_Mechanism, AS_NumofPartMachined, AS_SizeOfPart, AS_TypeOfStock, AS_ThicknessExtrusion, AS_ThicknessPlate, AS_MaterialPlate, AS_LengthInInches, AS_PartNumber, AS_Date, AS_Photo) VALUES('{Mechanism}', '{NumOfPartsNeededToBeMachined}', '{SizeOfPart}', '{TypeofStock}', '{ThicknessExtrusion}', '{ThicknessPlate}', '{MaterialPlate}', '{LengthInInches}', '{PartNumber}', '{Date}', '{Photo}' );"
    mycursor.execute(request)
    mydb.commit()
    rows = mycursor.fetchall()
    print(rows)


# insert_Auxiliary_System_data("Forebar", "59", "01/8", "Mo^ney",
#                              "1/100", "0.05", "W8oSod", "7V", "5S5", "2S023", ".png")


def insert_Bumpers_data(Mechanism, NumOfPartsNeededToBeMachined, SizeOfPart, TypeofStock, ThicknessExtrusion, ThicknessPlate, MaterialPlate, LengthInInches, PartNumber, Date, Photo):
    request = f"INSERT INTO partSubmission.Bumpers(Bumpers_Mechanism, Bumpers_NumofPartsNeedToBeMachined, Bumpers_SizeOfPart, Bumpers_TypeofStock, Bumpers_ThicknessExtrusion, Bumpers_ThicknessPlate, Bumpers_MaterialPlate, Bumpers_LengthInInches, Bumpers_PartNumber, Bumpers_Date, Bumpers_Photo)VALUES('{Mechanism}', '{NumOfPartsNeededToBeMachined}', '{SizeOfPart}','{TypeofStock}', '{ThicknessExtrusion}', '{ThicknessPlate}', '{MaterialPlate}', '{LengthInInches}', '{PartNumber}', '{Date}', '{Photo}');"
    mycursor.execute(request)
    mydb.commit()
    rows = mycursor.fetchall()
    print(rows)


# insert_Bumpers_data("Foreba9r", "555009", "01/8", "Mo^ney",
#                     "1/100", "0.05", "W8oSod", "7V", "5S5", "2S023", ".png")


def insert_Drivetrain_data(Mechanism, NumOfPartsNeededToBeMachined, SizeOfPart, TypeofStock, ThicknessExtrusion, ThicknessPlate, MaterialPlate, LengthInInches, PartNumber, Date, Photo):
    request = f"INSERT INTO partSubmission.Drivetrain(Drivetrain_Mechanism, Drivetrain_NumofPartsNeedToBeMachined, Drivetrain_SizeOfPart, Drivetrain_TypeofStock, Drivetrain_ThicknessExtrusion, Drivetrain_ThicknessPlate, Drivetrain_MaterialPlate, Drivetrains_LengthInInches, Drivetrain_PartNumber, Drivetrain_Date, Drivetrain_Photo) VALUES('{Mechanism}', '{NumOfPartsNeededToBeMachined}', '{SizeOfPart}','{TypeofStock}', '{ThicknessExtrusion}', '{ThicknessPlate}', '{MaterialPlate}', '{LengthInInches}', '{PartNumber}', '{Date}', '{Photo}');"
    mycursor.execute(request)
    mydb.commit()
    rows = mycursor.fetchall()
    print(rows)


# insert_Drivetrain_data("Foreba9r", "555009", "01/8", "Mo^ney",
#                        "1/100", "0.0005", "W8oSod", "7V", "5S5", "2S023", ".png")


def insert_Elevator_data(Mechanism, NumOfPartsNeededToBeMachined, SizeOfPart, TypeofStock, ThicknessExtrusion, ThicknessPlate, MaterialPlate, LengthInInches, PartNumber, Date, Photo):
    request = f"INSERT INTO partSubmission.Elevator (Elevator_Mechanism, Elevator_NumofPartsNeedMachined, Elevator_SizeOfPart, Elevator_TypeOfStock, Elevator_ThicknessExtrusion, Elevator_ThicknessPlate, Elevator_MaterialPlate, Elevator_LengthInInches, Elevator_PartNumber, Elevator_Date, Elevator_Photos) VALUES('{Mechanism}', '{NumOfPartsNeededToBeMachined}', '{SizeOfPart}','{TypeofStock}', '{ThicknessExtrusion}', '{ThicknessPlate}', '{MaterialPlate}', '{LengthInInches}', '{PartNumber}', '{Date}', '{Photo}');"
    mycursor.execute(request)
    mydb.commit()
    rows = mycursor.fetchall()
    print(rows)


# insert_Elevator_data("Foreba9r", "555009", "01/8", "Mo^ney",
#                      "1/100", "0.05", "W8612oSod", "7V", "5S5", "2S023", ".png")


def insert_Forebar_data(Mechanism, NumOfPartsNeededToBeMachined, SizeOfPart, TypeofStock, ThicknessExtrusion, ThicknessPlate, MaterialPlate, LengthInInches, PartNumber, Date, Photo):
    request = f"INSERT INTO partSubmission.Forebar (Forebar_Mechanism, Forebar_NumofPartsNeedMachined, Forebar_SizeOfPart, Forebar_TypeOfStock, Forebar_ThicknessExtrusion, Forebar_ThicknessPlate, Forebar_MaterialPlate, Forebar_LengthInInches, Forebar_PartNumber, Forebar_Date, Forebar_Photos) VALUES('{Mechanism}', '{NumOfPartsNeededToBeMachined}', '{SizeOfPart}', '{TypeofStock}','{ThicknessExtrusion}', '{ThicknessPlate}', '{MaterialPlate}', '{LengthInInches}', '{PartNumber}', '{Date}', '{Photo}');"
    mycursor.execute(request)
    mydb.commit()
    rows = mycursor.fetchall()
    print(rows)


# insert_Forebar_data("Foreba9r", "555009", "01/8", "Mo^ney",
#                     "1/100", "0.05", "W8oSod", "7V", "5S5", "2S023", ".png")


def insert_Intake_data(Mechanism, NumOfPartsNeededToBeMachined, SizeOfPart, TypeofStock, ThicknessExtrusion, ThicknessPlate, MaterialPlate, LengthInInches, PartNumber, Date, Photo):
    request = f"INSERT INTO partSubmission.Intake (Intake_Mechanism, Intake_NumofPartsNeedToMachined, Intake_SizeOfPart, Intake_TypeOfStock, Intake_ThicknessExtrusion, Intake_ThicknessPlate, Intake_MaterialPlate, Intake_LengthInInches, Intake_PartNumber, Intake_Date, Intake_Photos) VALUES('{Mechanism}', '{NumOfPartsNeededToBeMachined}', '{SizeOfPart}','{TypeofStock}', '{ThicknessExtrusion}', '{ThicknessPlate}', '{MaterialPlate}', '{LengthInInches}', '{PartNumber}', '{Date}', '{Photo}');"
    mycursor.execute(request)
    mydb.commit()
    rows = mycursor.fetchall()
    print(rows)


insert_Intake_data("Foreba9r", "555009", "01/8", "Mo^ney",
                   "1/100", "0.05", "W8oSod", "7V", "5S5", "2S023", ".png")
