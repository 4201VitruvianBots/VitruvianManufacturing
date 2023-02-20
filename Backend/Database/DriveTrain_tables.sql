-- partSubmission.Drivetrain definition

CREATE TABLE partSubmission.Drivetrain (
	Drivetrain_Mechanism varchar(100) NULL,
	Drivetrain_NumofPartsNeedToBeMachined varchar(100) NULL,
	Drivetrain_SizeOfPart varchar(100) NULL,
	Drivetrain_TypeofStock varchar(100) NULL,
	Drivetrain_ThicknessExtrusion varchar(100) NULL,
	Drivetrain_ThicknessPlate varchar(100) NULL,
	Drivetrain_MaterialPlate varchar(100) NULL,
	Drivetrains_LengthInInches varchar(100) NULL,
	Drivetrain_PartNumber varchar(100) NULL,
	Drivetrain_Date varchar(100) NULL,
	Drivetrain_Photo varchar(100) NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;
