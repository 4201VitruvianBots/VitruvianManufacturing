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

-- partSubmission.`Auxiliary Systems` definition
CREATE TABLE IF NOT EXISTS partSubmission.`Auxiliary Systems` (
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

-- partSubmission.Bumpers definition
CREATE TABLE IF NOT EXISTS partSubmission.Bumpers (
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

-- partSubmission.Forebar definition
CREATE TABLE IF NOT EXISTS partSubmission.Forebar (
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

-- partSubmission.Intake definition
CREATE TABLE IF NOT EXISTS partSubmission.Intake (
	Intake_Mechanism varchar(100) NULL,
	Intake_NumofPartsNeedToMachined varchar(100) NULL,
	Intake_SizeOfPart varchar(100) NULL,
	Intake_TypeOfStock varchar(100) NULL,
	Intake_ThicknessExtrusion varchar(100) NULL,
	Intake_ThicknessPlate varchar(100) NULL,
	Intake_MaterialPlate varchar(100) NULL,
	Intake_LengthInInches varchar(100) NULL,
	Intake_PartNumber varchar(100) NULL,
	Intake_Date varchar(100) NULL,
	Intake_Photos varchar(100) NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;

-- partSubmission.Drivetrain definition
CREATE TABLE IF NOT EXISTS partSubmission.Drivetrain (
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