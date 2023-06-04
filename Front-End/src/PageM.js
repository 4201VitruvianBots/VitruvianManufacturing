import "./App.css";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Page(props) {
    return (
        <div className={props.selected ? "page selected" : "page"} id={props.id}>
            {props.children}
        </div>
    );
}

function NewDate(props) {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker name={props.name} selected={startDate} onChange={(date) => setStartDate(date)} />
    );
};

function DrivetrainDataTable(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        const url = "http://127.0.0.1:5000/api/drivetrain";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setAdvice(json);
                setIsLoaded(true);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);
    if (isLoaded) {
        return (
            < Page selected={props.selected} id="DrivetrainDataTable" >
                <div>
                    <br></br>
                    <p className="selection-label" id="Drive-Train-Data-Table">Drivetrain Data Tables</p>
                    <div className="textArea">
                        <table border="1" width="100%">
                            <tbody>
                                <tr>
                                    <th>Mechanism</th>
                                    <th>Number Of Parts</th>
                                    <th>Size Of Part</th>
                                    <th>Type Of Stock</th>
                                    <th> Thickness (Extrusion)</th>
                                    <th> Thickness (Plate)</th>
                                    <th> Material (Plate)</th>
                                    <th>  Length in Inches</th>
                                    <th>  Part Number</th>
                                    <th> Date</th>
                                </tr>
                                {
                                    advice.map(row => (
                                        <tr>
                                            <td>{row[0]}</td>
                                            <td>{row[1]}</td>
                                            <td>{row[2]}</td>
                                            <td>{row[3]}</td>
                                            <td>{row[4]}</td>
                                            <td>{row[5]}</td>
                                            <td>{row[6]}</td>
                                            <td>{row[7]}</td>
                                            <td>{row[8]}</td>
                                            <td>{row[9]}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Page >
        )
    }
    else {
        return (
            <div>Loading....</div>
        )

    }
}

function BumpersDataTable(props) {
    const [advice, setAdvice] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const url = "http://127.0.0.1:5000/api/bumpers";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setAdvice(json);
                setIsLoaded(true);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
    if (isLoaded) {
        return (
            <Page selected={props.selected} id="BumpersDataTable">
                <div>
                    <br></br>
                    <p className="selection-label" id="Bumpers-Data-Table">Bumpers Data Tables</p>
                    <div className="textArea">
                        <table border="1" width="100%">
                            <tbody>
                                <tr>
                                    <th>Mechanism</th>
                                    <th>Number Of Parts</th>
                                    <th>Size Of Part</th>
                                    <th>Type Of Stock</th>
                                    <th> Thickness (Extrusion)</th>
                                    <th> Thickness (Plate)</th>
                                    <th> Material (Plate)</th>
                                    <th>  Length in Inches</th>
                                    <th>  Part Number</th>
                                    <th> Date</th>
                                </tr>
                                {
                                    advice.map(row => (
                                        <tr>
                                            <td>{row[0]}</td>
                                            <td>{row[1]}</td>
                                            <td>{row[2]}</td>
                                            <td>{row[3]}</td>
                                            <td>{row[4]}</td>
                                            <td>{row[5]}</td>
                                            <td>{row[6]}</td>
                                            <td>{row[7]}</td>
                                            <td>{row[8]}</td>
                                            <td>{row[9]}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>


                    </div>
                </div>
            </Page >
        )
    }
    else {
        return (
            <div>Loading....</div>
        )
    }
}

function ElevatorDataTable(props) {
    const [advice, setAdvice] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const url = "http://127.0.0.1:5000/api/elevator";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setAdvice(json);
                setIsLoaded(true);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);
    if (isLoaded) {
        return (
            <Page selected={props.selected} id="ElevatorDataTable">
                <div>
                    <br></br>
                    <p className="selection-label" id="Elevator-Data-Table">Elevator Data Tables</p>
                    <div className="textArea">
                        <table border="1" width="100%">
                            <tbody>
                                <tr>
                                    <th>Mechanism</th>
                                    <th>Number Of Parts</th>
                                    <th>Size Of Part</th>
                                    <th>Type Of Stock</th>
                                    <th> Thickness (Extrusion)</th>
                                    <th> Thickness (Plate)</th>
                                    <th> Material (Plate)</th>
                                    <th>  Length in Inches</th>
                                    <th>  Part Number</th>
                                    <th> Date</th>
                                </tr>
                                {
                                    advice.map(row => (
                                        <tr>
                                            <td>{row[0]}</td>
                                            <td>{row[1]}</td>
                                            <td>{row[2]}</td>
                                            <td>{row[3]}</td>
                                            <td>{row[4]}</td>
                                            <td>{row[5]}</td>
                                            <td>{row[6]}</td>
                                            <td>{row[7]}</td>
                                            <td>{row[8]}</td>
                                            <td>{row[9]}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Page>
        )
    }
    else {
        return (
            <div>Loading....</div>
        )
    }
}

function IntakeDataTable(props) {
    const [advice, setAdvice] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const url = "http://127.0.0.1:5000/api/intake";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setAdvice(json);
                setIsLoaded(true);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);
    if (isLoaded) {
        return (
            <Page selected={props.selected} id="IntakeDataTable">
                <div>
                    <br></br>
                    <p className="selection-label" id="Intake-Data-Table">Intake Data Tables</p>
                    <div className="textArea">
                        <table border="1" width="100%">
                            <tbody>
                                <tr>
                                    <th>Mechanism</th>
                                    <th>Number Of Parts</th>
                                    <th>Size Of Part</th>
                                    <th>Type Of Stock</th>
                                    <th> Thickness (Extrusion)</th>
                                    <th> Thickness (Plate)</th>
                                    <th> Material (Plate)</th>
                                    <th>  Length in Inches</th>
                                    <th>  Part Number</th>
                                    <th> Date</th>
                                </tr>
                                {
                                    advice.map(row => (
                                        <tr>
                                            <td>{row[0]}</td>
                                            <td>{row[1]}</td>
                                            <td>{row[2]}</td>
                                            <td>{row[3]}</td>
                                            <td>{row[4]}</td>
                                            <td>{row[5]}</td>
                                            <td>{row[6]}</td>
                                            <td>{row[7]}</td>
                                            <td>{row[8]}</td>
                                            <td>{row[9]}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Page>
        )
    }
    else {
        return (
            <div>Loading....</div>
        )

    }
}

function AuxiliarySystemsDataTable(props) {
    const [advice, setAdvice] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const url = "http://127.0.0.1:5000/api/auxiliary-systems";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setAdvice(json);
                setIsLoaded(true);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);
    if (isLoaded) {
        return (
            <Page selected={props.selected} id="AuxiliarySystemsDataTable">
                <div>
                    <br></br>
                    <p className="selection-label" id="Auxiliary-Systems-Data-Table">Auxiliary Systems Data Tables</p>
                    <div className="textArea">
                        <table border="1" width="100%">
                            <tbody>
                                <tr>
                                    <th>Mechanism</th>
                                    <th>Number Of Parts</th>
                                    <th>Size Of Part</th>
                                    <th>Type Of Stock</th>
                                    <th> Thickness (Extrusion)</th>
                                    <th> Thickness (Plate)</th>
                                    <th> Material (Plate)</th>
                                    <th>  Length in Inches</th>
                                    <th>  Part Number</th>
                                    <th> Date</th>
                                </tr>
                                {
                                    advice.map(row => (
                                        <tr>
                                            <td>{row[0]}</td>
                                            <td>{row[1]}</td>
                                            <td>{row[2]}</td>
                                            <td>{row[3]}</td>
                                            <td>{row[4]}</td>
                                            <td>{row[5]}</td>
                                            <td>{row[6]}</td>
                                            <td>{row[7]}</td>
                                            <td>{row[8]}</td>
                                            <td>{row[9]}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Page>
        )
    }
    else {
        return (
            <div>Loading....</div>
        )

    }
}

function ForebarDataTable(props) {
    const [advice, setAdvice] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const url = "http://127.0.0.1:5000/api/forebar";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setAdvice(json);
                setIsLoaded(true);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);
    if (isLoaded) {
        return (
            <Page selected={props.selected} id="ForebarDataTable">
                <div>
                    <br></br>
                    <p className="selection-label" id="Forebar-Data-Table">Forebar Data Tables</p>
                    <div className="textArea">
                        <table border="1" width="100%">
                            <tbody>
                                <tr>
                                    <th>Mechanism</th>
                                    <th>Number Of Parts</th>
                                    <th>Size Of Part</th>
                                    <th>Type Of Stock</th>
                                    <th> Thickness (Extrusion)</th>
                                    <th> Thickness (Plate)</th>
                                    <th> Material (Plate)</th>
                                    <th>  Length in Inches</th>
                                    <th>  Part Number</th>
                                    <th> Date</th>
                                </tr>
                                {
                                    advice.map(row => (
                                        <tr>
                                            <td>{row[0]}</td>
                                            <td>{row[1]}</td>
                                            <td>{row[2]}</td>
                                            <td>{row[3]}</td>
                                            <td>{row[4]}</td>
                                            <td>{row[5]}</td>
                                            <td>{row[6]}</td>
                                            <td>{row[7]}</td>
                                            <td>{row[8]}</td>
                                            <td>{row[9]}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Page>
        )
    }
    else {
        return (
            <div>Loading....</div>
        )
    }
}

function ThreeDPrintDataTable(props) {
    const [advice, setAdvice] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const url = "http://127.0.0.1:5000/api/3DPrint";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setAdvice(json);
                setIsLoaded(true);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);
    if (isLoaded) {
        return (
            <Page selected={props.selected} id="ThreeDPrintDataTable">
                <div>
                    <br></br>
                    <p className="selection-label" id="Three-D-Print-Data-Table">3D Print Data Tables</p>
                    <div className="textArea">
                        <table border="1" width="100%">
                            <tbody>
                                <tr>
                                    <th>Mechanism</th>
                                    <th>Number Of Parts</th>
                                    <th>Size Of Part</th>
                                    <th>Type Of Stock</th>
                                    <th> Thickness (Extrusion)</th>
                                    <th> Thickness (Plate)</th>
                                    <th> Material (Plate)</th>
                                    <th>  Length in Inches</th>
                                    <th>  Part Number</th>
                                    <th> Date</th>
                                </tr>
                                {
                                    advice.map(row => (
                                        <tr>
                                            <td>{row[0]}</td>
                                            <td>{row[1]}</td>
                                            <td>{row[2]}</td>
                                            <td>{row[3]}</td>
                                            <td>{row[4]}</td>
                                            <td>{row[5]}</td>
                                            <td>{row[6]}</td>
                                            <td>{row[7]}</td>
                                            <td>{row[8]}</td>
                                            <td>{row[9]}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Page >
        )
    }
    else {
        return (
            <div>Loading....</div>
        )

    }
}

function SavePage(props) {
    return (
        <Page selected={props.selected} id="Save ">
            <p className="section-label" id="Save ">Save</p>
            <div className="textArea">
                <input type="submit" value="Submit" />
            </div>
        </Page>
    );
}
export { ThreeDPrintDataTable, ForebarDataTable, AuxiliarySystemsDataTable, IntakeDataTable, ElevatorDataTable, BumpersDataTable, DrivetrainDataTable, SavePage, NewDate };