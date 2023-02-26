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


function SignIn(props) {
    return (
        <Page selected={props.selected} className="page" id="sign-in">
            <div className="textArea">
                {/* <h3>Sign in</h3>
                {/* <label htmlFor="username">Your username</label> */}
                {/* <br></br>

                <input type="text" placeholder="Enter Username" name="username" required></input>

                <input type="password" placeholder="Enter Password" name="pswrd" required /> */}
                {/* <label for="username">Username:</label> */}
                {/* <input type="text" id="username" name="username"/> */}
                <h1>Sign in</h1>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" required="required" />
                <br></br>
                <br></br>
                {/* <label for="pwd">Password:</label>
                <input type="password" id="pwd" name="pwd"></input> */}
                <br></br>
                <input type="submit" value="Submit" />
                {/* <body class="light">     */}

                {/* </body> */}
            </div>
        </Page>
    );
}



function DrivetrainDataTable(props) {
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        const url = "http://127.0.0.1:5000/api/drivetrain";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setAdvice(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Page selected={props.selected} id="DrivetrainDataTable">
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
                                <th> Thickness (Extrusion)</th>
                                <th> Thickness (Plate)</th>
                                <th> Material (Plate)</th>
                                <th>  Length in Inches</th>
                                <th>  Part Number</th>
                                <th> Date</th>
                            </tr>
                            <tr>
                                <td>{advice[0]}</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                            </tr>
                            <tr>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                            </tr>
                            <tr>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                            </tr>
                            <tr>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                            </tr>
                            <tr>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                            </tr>
                        </tbody>

                    </table>

                </div>
            </div>
        </Page>
    )
}

function BumpersDataTable(props) {
    return (
        <Page selected={props.selected} id="BumpersDataTable">
            <div>
                <br></br>

                <p className="selection-label" id="Bumpers-Data-Table">Bumpers Data Tables</p>
                <div className="textArea">
                    <table border="1" width="100%">
                        <tr>
                            <th>Mechanism</th>
                            <th>Number Of Parts</th>
                            <th>Size Of Part</th>
                            <th> Thickness (Extrusion)</th>
                            <th> Thickness (Plate)</th>
                            <th> Material (Plate)</th>
                            <th>  Length in Inches</th>
                            <th>  Part Number</th>
                            <th> Date</th>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                    </table>

                </div>
            </div>
        </Page>
    )
}

function ElevatorDataTable(props) {
    return (
        <Page selected={props.selected} id="ElevatorDataTable">
            <div>
                <br></br>

                <p className="selection-label" id="Elevator-Data-Table">Elevator Data Tables</p>
                <div className="textArea">
                    <table border="1" width="100%">
                        <tr>
                            <th>Mechanism</th>
                            <th>Number Of Parts</th>
                            <th>Size Of Part</th>
                            <th> Thickness (Extrusion)</th>
                            <th> Thickness (Plate)</th>
                            <th> Material (Plate)</th>
                            <th>  Length in Inches</th>
                            <th>  Part Number</th>
                            <th> Date</th>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                    </table>

                </div>
            </div>
        </Page>
    )
}

function IntakeDataTable(props) {
    return (
        <Page selected={props.selected} id="IntakeDataTable">
            <div>
                <br></br>

                <p className="selection-label" id="Intake-Data-Table">Intake Data Tables</p>
                <div className="textArea">
                    <table border="1" width="100%">
                        <tr>
                            <th>Mechanism</th>
                            <th>Number Of Parts</th>
                            <th>Size Of Part</th>
                            <th> Thickness (Extrusion)</th>
                            <th> Thickness (Plate)</th>
                            <th> Material (Plate)</th>
                            <th>  Length in Inches</th>
                            <th>  Part Number</th>
                            <th> Date</th>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                    </table>

                </div>
            </div>
        </Page>
    )
}

function AuxiliarySystemsDataTable(props) {
    return (
        <Page selected={props.selected} id="AuxiliarySystemsDataTable">
            <div>
                <br></br>

                <p className="selection-label" id="Auxiliary-Systems-Data-Table">Auxiliary Systems Data Tables</p>
                <div className="textArea">
                    <table border="1" width="100%">
                        <tr>
                            <th>Mechanism</th>
                            <th>Number Of Parts</th>
                            <th>Size Of Part</th>
                            <th> Thickness (Extrusion)</th>
                            <th> Thickness (Plate)</th>
                            <th> Material (Plate)</th>
                            <th>  Length in Inches</th>
                            <th>  Part Number</th>
                            <th> Date</th>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                    </table>

                </div>
            </div>
        </Page>
    )
}

function ForebarDataTable(props) {
    return (
        <Page selected={props.selected} id="ForebarDataTable">
            <div>
                <br></br>

                <p className="selection-label" id="Forebar-Data-Table">Forebar Data Tables</p>
                <div className="textArea">
                    <table border="1" width="100%">
                        <tr>
                            <th>Mechanism</th>
                            <th>Number Of Parts</th>
                            <th>Size Of Part</th>
                            <th> Thickness (Extrusion)</th>
                            <th> Thickness (Plate)</th>
                            <th> Material (Plate)</th>
                            <th>  Length in Inches</th>
                            <th>  Part Number</th>
                            <th> Date</th>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                    </table>

                </div>
            </div>
        </Page>
    )
}

function ThreeDPrintDataTable(props) {
    return (
        <Page selected={props.selected} id="ThreeDPrintDataTable">
            <div>
                <br></br>

                <p className="selection-label" id="Three-D-Print-Data-Table">3D Print Data Tables</p>
                <div className="textArea">
                    <table border="1" width="100%">
                        <tr>
                            <th>Mechanism</th>
                            <th>Number Of Parts</th>
                            <th>Size Of Part</th>
                            <th> Thickness (Extrusion)</th>
                            <th> Thickness (Plate)</th>
                            <th> Material (Plate)</th>
                            <th>  Length in Inches</th>
                            <th>  Part Number</th>
                            <th> Date</th>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                    </table>
                </div>
            </div>
        </Page>
    )
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
export { SignIn, ThreeDPrintDataTable, ForebarDataTable, AuxiliarySystemsDataTable, IntakeDataTable, ElevatorDataTable, BumpersDataTable, DrivetrainDataTable, SavePage, NewDate };