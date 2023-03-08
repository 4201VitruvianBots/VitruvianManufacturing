-- PrinterStatus.`Printer Status` definition

CREATE TABLE PrinterStatus.`Printer Status` (
    NameOfPrinter varchar(100) NULL,
    StatusOfPrinter varchar(100) NULL,
    IssueOfPrinter varchar(100) NULL,
        `Date` varchar(100) NULL,
    Photos varchar(100) NULL
)
ENGINE = InnoDB
DEFAULT CHARSET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci
DROP TABLE IF EXISTS PrinterStatus.`Printer Status`
