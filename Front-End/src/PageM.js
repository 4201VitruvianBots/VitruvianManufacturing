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
             <div class="sidenav">
  <a href="#bumpers">Bumpers</a>
  <a href="#elevator">Elevator</a>
  <a href="#intake">Intake</a>
  <a href="#auxiliarysystems">Auxiliary Systems</a>
  <a href="#forebar">Forebar</a>
  <a href="#3DPrint">3D Print</a>
</div>

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
    const [isLoaded, setIsLoaded] = useState(false);
    const [advice, setAdvice] = useState("");
    <div class="sidenav">
    <a href="#bumpers">Bumpers</a>
    <a href="#elevator">Elevator</a>
    <a href="#intake">Intake</a>
    <a href="#auxiliarysystems">Auxiliary Systems</a>
    <a href="#forebar">Forebar</a>
    <a href="#3DPrint">3D Print</a>
  </div>

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
                 <div class="sidenav">
  <a href="#bumpers">Bumpers</a>
  <a href="#elevator">Elevator</a>
  <a href="#intake">Intake</a>
  <a href="#auxiliarysystems">Auxiliary Systems</a>
  <a href="#forebar">Forebar</a>
  <a href="#3DPrint">3D Print</a>
</div>
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
                 <div class="sidenav">
  <a href="#bumpers">Bumpers</a>
  <a href="#elevator">Elevator</a>
  <a href="#intake">Intake</a>
  <a href="#auxiliarysystems">Auxiliary Systems</a>
  <a href="#forebar">Forebar</a>
  <a href="#3DPrint">3D Print</a>
</div>
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
                 <div class="sidenav">
  <a href="#bumpers">Bumpers</a>
  <a href="#elevator">Elevator</a>
  <a href="#intake">Intake</a>
  <a href="#auxiliarysystems">Auxiliary Systems</a>
  <a href="#forebar">Forebar</a>
  <a href="#3DPrint">3D Print</a>
</div>
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
                 <div class="sidenav">
  <a href="#bumpers">Bumpers</a>
  <a href="#elevator">Elevator</a>
  <a href="#intake">Intake</a>
  <a href="#auxiliarysystems">Auxiliary Systems</a>
  <a href="#forebar">Forebar</a>
  <a href="#3DPrint">3D Print</a>
</div>
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
                 <div class="sidenav">
  <a href="#bumpers">Bumpers</a>
  <a href="#elevator">Elevator</a>
  <a href="#intake">Intake</a>
  <a href="#auxiliarysystems">Auxiliary Systems</a>
  <a href="#forebar">Forebar</a>
  <a href="#3DPrint">3D Print</a>
</div>
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
                 <div class="sidenav">
  <a href="#bumpers">Bumpers</a>
  <a href="#elevator">Elevator</a>
  <a href="#intake">Intake</a>
  <a href="#auxiliarysystems">Auxiliary Systems</a>
  <a href="#forebar">Forebar</a>
  <a href="#3DPrint">3D Print</a>
</div>
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
export { SignIn, ThreeDPrintDataTable, ForebarDataTable, AuxiliarySystemsDataTable, IntakeDataTable, ElevatorDataTable, BumpersDataTable, DrivetrainDataTable, SavePage, NewDate };