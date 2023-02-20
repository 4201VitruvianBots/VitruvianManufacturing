-- partSubmission.`Auxiliary Systems` definition

CREATE TABLE partSubmission.`Auxiliary Systems` (
	AS_Mechanism varchar(100) NULL,
	AS_NumofPartMachined varchar(100) NULL,
	AS_SizeOfPart varchar(100) NULL,
	AS_TypeOfStock varchar(100) NULL,
	AS_ThicknessExtrusion varchar(100) NULL,
	AS_ThicknessPlate varchar(100) NULL,
	AS_MaterialPlate varchar(100) NULL,
	AS_LengthInInches varchar(100) NULL,
	AS_PartNumber varchar(100) NULL,
	AS_Date varchar(100) NULL,
	AS_Photo varchar(100) NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;
