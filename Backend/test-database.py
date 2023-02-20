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


# get_data_from_table("`3D Print`")


# INSERT INTO partSubmission.Drivetrain
# (Drivetrain_Mechanism, Drivetrain_NumofPartsNeedToBeMachined, Drivetrain_SizeOfPart, Drivetrain_TypeofStock, Drivetrain_ThicknessExtrusion, Drivetrain_ThicknessPlate, Drivetrain_MaterialPlate, Drivetrains_LengthInInches, Drivetrain_PartNumber, Drivetrain_Date, Drivetrain_Photo)
# VALUES('bvbcn', 'fgfff', 'sssss', 'ssses', 'dsgfd', 'gfgdf', 'dgmdfgh', 'ssssdgwe', 'sdfgdsf', 'dsfsdfsdf', 'sdgsdf');

def insert_drivetrain_data(Mechanism, NumOfPartsNeededToBeMachined, SizeOfPart, TypeofStock, ThicknessExtrusion, ThicknessPlate, MaterialPlate, LengthInInches, PartNumber, Date, Photo):
    request = f"INSERT INTO partSubmission.Drivetrain (Drivetrain_Mechanism, Drivetrain_NumofPartsNeedToBeMachined, Drivetrain_SizeOfPart, Drivetrain_TypeofStock, Drivetrain_ThicknessExtrusion, Drivetrain_ThicknessPlate, Drivetrain_MaterialPlate, Drivetrains_LengthInInches, Drivetrain_PartNumber, Drivetrain_Date, Drivetrain_Photo ) VALUES('{Mechanism}', '{NumOfPartsNeededToBeMachined}', '{SizeOfPart}', '{TypeofStock}', '{ThicknessExtrusion}', '{ThicknessPlate}', '{MaterialPlate}', '{LengthInInches}', '{PartNumber}', '{Date}', '{Photo }');"
    mycursor.execute(request)
    mydb.commit()
    rows = mycursor.fetchall()
    print(rows)


insert_drivetrain_data("Forebar", "5", "1/8", "Money",
                       "1/10", "0.5", "Wood", "7", "55", "2023", ".png")
