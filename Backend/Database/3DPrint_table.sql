-- partSubmission.`3D Print` definition

CREATE TABLE IF NOT EXISTS partSubmission.`3D Print` (
	`3DPrint_Mechanism` varchar(100) NULL,
	`3DPrint_NumberOfPartMachined` varchar(100) NULL,
	`3DPrint_SizeOfPart` varchar(100) NULL,
	`3DPrint_TypeOfStock` varchar(100) NULL,
	`3DPrint_Thickness-Extrusion` varchar(100) NULL,
	`3DPrint_ThicknessPlate` varchar(100) NULL,
	`3DPrint_MaterialPlate` varchar(100) NULL,
	`3DPrint_LengthInInches` varchar(100) NULL,
	`3DPrint_PartNumber` varchar(100) NULL,
	`3DPrint_Date` varchar(100)  NULL,
	`3DPrint_Photos` varchar(100) NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;