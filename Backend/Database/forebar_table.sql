-- partSubmission.Forebar definition

CREATE TABLE partSubmission.Forebar (
	Forebar_Mechanism varchar(100) NULL,
	Forebar_NumofPartsNeedMachined varchar(100) NULL,
	Forebar_SizeOfPart varchar(100) NULL,
	Forebar_TypeOfStock varchar(100) NULL,
	Forebar_ThicknessExtrusion varchar(100) NULL,
	Forebar_ThicknessPlate varchar(100) NULL,
	Forebar_MaterialPlate varchar(100) NULL,
	Forebar_LengthInInches varchar(100) NULL,
	Forebar_PartNumber varchar(100) NULL,
	Forebar_Date varchar(100) NULL,
	Forebar_Photos varchar(100) NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;
DROP TABLE IF EXISTS partSubmission.Forebar;