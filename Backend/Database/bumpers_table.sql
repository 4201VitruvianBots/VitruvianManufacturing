-- partSubmission.Bumpers definition

CREATE TABLE partSubmission.Bumpers (
	Bumpers_Mechanism varchar(100) NULL,
	Bumpers_NumofPartsNeedToBeMachined varchar(100) NULL,
	Bumpers_SizeOfPart varchar(100) NULL,
	Bumpers_TypeofStock varchar(100) NULL,
	Bumpers_ThicknessExtrusion varchar(100) NULL,
	Bumpers_ThicknessPlate varchar(100) NULL,
	Bumpers_MaterialPlate varchar(100) NULL,
	Bumpers_LengthInInches varchar(100) NULL,
	Bumpers_PartNumber varchar(100) NULL,
	Bumpers_Date varchar(100) NULL,
	Bumpers_Photo varchar(100) NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;
DROP TABLE IF EXISTS partSubmission.Bumpers;