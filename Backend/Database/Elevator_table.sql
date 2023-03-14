-- partSubmission.Elevator definition
CREATE TABLE IF NOT EXISTS partSubmission.Elevator (
	Elevator_Mechanism varchar(100) NULL,
	Elevator_NumofPartsNeedMachined varchar(100) NULL,
	Elevator_SizeOfPart varchar(100) NULL,
	Elevator_TypeOfStock varchar(100) NULL,
	Elevator_ThicknessExtrusion varchar(100) NULL,
	Elevator_ThicknessPlate varchar(100) NULL,
	Elevator_MaterialPlate varchar(100) NULL,
	Elevator_LengthInInches varchar(100) NULL,
	Elevator_PartNumber varchar(100) NULL,
	Elevator_Date varchar(100) NULL,
	Elevator_Photos varchar(100) NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;
