import "./App.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
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

function PartHub(props) {
    return (
        <Page selected={props.selected} id="PartHub">
            <div>
                <p className="section-label" id="Part Hub">Select a Mechanism</p>
                <div className="textArea">
                    <label className="item-label" htmlFor="Competition"><strong>Select a Mechanism</strong> </label>
                    <select name="PartHub_ SelectaMechanism" id="Competition" defaultValue="Choose" required="required">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="DriveTrain">DriveTrain</option>
                        <option value="Elevator">Elevator</option>
                        <option value="Auxiliary Systems">Auxiliary Systems</option>
                        <option value="Bumpers">Bumpers</option>
                        <option value="Intake">Intake</option>
                        <option value="Forebar">Forebar</option>
                        <option value="3DPrint">3D Print</option>

                    </select>
                    <br></br>
                    <div>
                    </div>

                </div>
            </div>
        </Page>
    );
}

function Drivetrain(props) {
    return (
        <Page selected={props.selected} id="DriveTrain">
            <div>
                <p className="section-label" id="DriveTrain">Drivetrain</p>
                <div className="textArea">

                    <input type="text" id="Mechanism" name="drivetrain_Mechanism" placeholder="Mechanism" className="text-input" required="required"/>
                    <br></br>
                    <input type="text" id="NumberOfParts" name="drivetrain_NumberOfParts" placeholder="Number of parts that need to be machined" className="text-input" required="required" />
                    <br></br>
                    <label className="SizeOfPart" name="drivetrain_SizeOfParts" htmlFor="SizeOfPart"><strong>Size Of Part</strong> </label>
                    <select name="drivetrain_SizeOfPart" id="SizeOfPart" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here! </option>
                        <option value="1*1">1x1</option>
                        <option value="1x2">1x2</option>
                        <option value="1.5x1.5">1.5x1.5</option>
                        <option value="2x2">2x2</option>
                        <option value="L-Bracket ">L-Bracket</option>
                        <option value="Shaft">Shaft</option>
                    </select>
                    <br></br>
                    <label className="TypeOfStock" htmlFor="TypeOfStock"><strong>Type of Stock</strong> </label>
                    <select name="drivetrain_TypeOfPart" id="TypeOfPart" defaultValue="" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>
                    </select>
                    <br></br>
                    <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                    <select name="drivetrain_Thickness(Extrusion)" id="Thickness (Extrusion)" defaultValue="" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>
                    </select>

                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="drivetrain_Thickness(Plate)" id="Thickness (Plate)" defaultValue="" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                    </select>

                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate)</strong> </label>
                    <select name="drivetrain_Material(Plate)" id="Material  (Plate)" defaultValue="" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                        <option value="PETG">PETG</option>
                        <option value="PLA">PLA</option>
                        <option value="ONYX">ONYX</option>
                    </select>
                    <br></br>

                    <input type="text" id="LengthInInches" name="drivetrain_LengthInInches" placeholder="Length in Inches" className="text-input" required="required" />
                    <br></br>
                    <input type="text" id="PartNumber" name="drivetrain_PartNumber" placeholder="Part Number" className="text-input" required="required" />
                    <br></br>
                    <input type='text' id="WDYN" name="drivetrain_WDYN" placeholder="When do you need the part by" className="text-input" required="required" />
                    <br></br>
                    <input type='text' id="WDYN" name="WDYN" placeholder="When do you need the part by" className="text-input" required="required" />
                    <h4>When do you need the part done by?</h4>

                    <NewDate name="drivetrain_cal" />
                    {/* <label for="avatar">Choose a profile picture:</label>

                </div>
            </div>
        </Page >
    );
}
function DrivetrainPhotos(props) {
    return (
        <Page selected={props.selected} id="DrivetrainPhotos">
            <div>

                <p className="section-label" id="Drive-Train-Photos">Drivetrain Photos</p>
                <div className="textArea">
                    <input type="file" required="required"
                        id="avatar" name="drivetrainphotos_avatar"
                        accept="image/png, image/jpeg"></input>
                </div>
            </div>
        </Page>
    );
}

function Bumpers(props) {
    return (
        <Page selected={props.selected} id="Bumpers">
            <div>
                <p className="section-label" id="Bumpers">Bumpers</p>
                <div className="textArea">

                    <input type="text" id="Mechanism" name="bumpers_Mechanism" placeholder="Mechanism" className="text-input" required="required" />
                    <br></br>
                    <input type="text" id="NumberOfParts" name="bumpers_NumberOfParts" placeholder="Number of parts that need to be machined" className="text-input" required="required" />
                    <br></br>
                    <label className="SizeOfPart" htmlFor="SizeOfPart"><strong>Size Of Part</strong>  </label>
                    <select name="bumpers_SizeOfPart" id="SizeOfPart" defaultValue="Choose" className="form-control" required >
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1*1">1x1 </option>
                        <option value="1x2">1x2</option>
                        <option value="1.5x1.5">1.5x1.5</option>
                        <option value="2x2">2x2</option>
                        <option value="L-Bracket ">L-Bracket</option>
                        <option value="Shaft">Shaft</option>
                    </select>
                    <br></br>
                    <label className="TypeOfStock" htmlFor="TypeOfStock"><strong>Type of Stock</strong> </label>
                    <select name="bumpers_TypeOfStock" id="TypeOfPart" defaultValue="Choose" className="form-control" required >
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>
                        <option value="3D-Print">3D-Print</option>
                    </select>
                    <br></br>
                    <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                    <select name="bumpers_Thickness(Extrusion)" id="Thickness (Extrusion)" defaultValue="Choose" className="form-control"required >
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>
                    </select>
                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="bumpers_Thickness(Plate)" id="Thickness (Plate)" defaultValue="Choose" className="form-control" required >
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                    </select>
                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate) </strong> </label>
                    <select name="bumpers_Material(Plate)" id="Material  (Plate)" defaultValue="Choose" className="form-control" required >
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                        <option value="PETG">PETG</option>
                        <option value="PLA">PLA</option>
                        <option value="ONYX">ONYX</option>
                    </select>
                    <br></br>
                    <input type="text" id="LengthInInches" name="bumpers_LengthInInches" placeholder="Length in Inches" className="text-input" required="required" />
                    <br></br>
                    <input type="text" id="PartNumber" name="bumpers_PartNumber" placeholder="Part Number" className="text-input" required="required" />
                    <br></br>
                    <br></br>
                    <h4>When do you need the part done by?</h4>
                    <NewDate name="bumpers_date" />
                </div>
            </div>
        </Page>
    );
}
function BumperPhotos(props) {
    return (
        <Page selected={props.selected} id="Bumper-Photos">
            <div>
                <p className="section-label" id="Bumper-Photos">Bumper Photos</p>
                <div className="textArea">
                    <input type="file"
                        id="avatar" name="bumperphotos_avatar"
                        accept="image/*,.pdf"></input>
                </div>
            </div>
        </Page>
    );
}

function Elevator(props) {
    return (
        <Page selected={props.selected} id="Elevator">
            <div>
                <p className="section-label" id="Elevator">Elevator</p>
                <div className="textArea">

                    <input type="text" id="Mechanism" name="elevator_Mechanism" placeholder="Mechanism" className="text-input" required="required" />
                    <br></br>
                    <input type="text" id="NumberOfParts" name="elevator_NumberOfParts" placeholder="Number of parts that need to be machined" className="text-input" required="required" />
                    <br></br>
                    <label className="SizeOfPart" htmlFor="SizeOfPart"><strong>Size Of Part</strong> </label>
                    <select name="elevator_SizeOfPart" id="SizeOfPart" defaultValue="Choose" className="form-control">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1*1">1x1</option>
                        <option value="1x2">1x2</option>
                        <option value="1.5x1.5">1.5x1.5</option>
                        <option value="2x2">2x2</option>
                        <option value="L-Bracket ">L-Bracket</option>
                        <option value="Shaft">Shaft</option>
                    </select>
                    <br></br>
                    <label className="TypeOfStock" htmlFor="TypeOfStock"><strong>Type of Stock</strong> </label>
                    <select name="elevator_TypeOfStock" id="TypeOfPart" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>
                    </select>
                    <br></br>
                    <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>

                    <select name="elevator_Thickness(Extrusion)" id="Thickness (Extrusion)" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>
                    </select>
                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="elevator_Thickness(Plate)" id="Thickness (Plate)" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                    </select>
                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate)</strong> </label>
                    <select name="elevator_Material(Plate)" id="Material  (Plate)" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                        <option value="PETG">PETG</option>
                        <option value="PLA">PLA</option>
                        <option value="ONYX">ONYX</option>
                    </select>
                    <br></br>
                    <input type="text" id="LengthInInches" name="elevator_LengthInInches" placeholder="Length in Inches" className="text-input" required="required" />
                    <br></br>
                    <input type="text" id="PartNumber" name="elevator_PartNumber" placeholder="Part Number" className="text-input" required="required" />
                    <br></br>
                    <br></br>
                    <h4>When do you need the part done by?</h4>
                    <NewDate name="elevator_date" />
                </div>
            </div>
        </Page>
    );
}
function ElevatorPhotos(props) {
    return (
        <Page selected={props.selected} id="Elevator-Photos">
            <div>

                <p className="section-label" id="Elevators Photos">Elevator Photos</p>
                <div className="textArea">
                    <input type="file"
                        id="avatar" name="elevatorphotos_avatar"
                        accept="image/*,.pdf"></input>
                </div>
            </div>
        </Page>
    );
}

function Intake(props) {
    return (
        <Page selected={props.selected} id="Intake">
            <div>
                <p className="section-label" id="Intake">Intake</p>
                <div className="textArea">
                    <input type="text" id="Mechanism" name="intake_Mechanism" placeholder="Mechanism" className="text-input" />
                    <br></br>
                    <input type="text" id="NumberOfParts" name="intake_NumberOfParts" placeholder="Number of parts that need to be machined" className="text-input" />
                    <br></br>
                    <label className="SizeOfPart" htmlFor="SizeOfPart"><strong>Size Of Part</strong> </label>
                    <select name="intake_SizeOfPart" id="SizeOfPart" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1*1">1x1</option>
                        <option value="1x2">1x2</option>
                        <option value="1.5x1.5">1.5x1.5</option>
                        <option value="2x2">2x2</option>
                        <option value="L-Bracket ">L-Bracket</option>
                        <option value="Shaft">Shaft</option>
                    </select>
                    <br></br>
                    <label className="TypeOfStock" htmlFor="TypeOfStock"><strong>Type of Stock</strong> </label>
                    <select name="intake_TypeOfStock" id="TypeOfPart" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>
                    </select>
                    <br></br>
                    <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                    <select name="intake_Thickness(Extrusion)" id="Thickness (Extrusion)" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>
                    </select>
                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="intake_Thickness(Plate)" id="Thickness (Plate)" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                    </select>
                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate)</strong> </label>
                    <select name="intake_Material(Plate)" id="Material  (Plate)" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                        <option value="PETG">PETG</option>
                        <option value="PLA">PLA</option>
                        <option value="ONYX">ONYX</option>
                    </select>
                    <br></br>

                    <input type="text" id="LengthInInches" name="intake_LengthInInches" placeholder="Length in Inches" className="text-input" required="required"/>
                    <br></br>
                    <input type="text" id="PartNumber" name="intake_PartNumber" placeholder="Part Number" className="text-input" required="required" />
                    <br></br>
                    <h4>When do you need the part done by?</h4>
                    <NewDate name="intake_date" />
                    {/* <label for="avatar">Choose a profile picture:</label>
                </div>
            </div>
        </Page>
    );
}
function IntakePhotos(props) {
    return (
        <Page selected={props.selected} id="Intake-Photos">
            <div>

                <p className="section-label" id="Intake-Photos">Intake Photos</p>
                <div className="textArea">
                    <input type="file"
                        id="avatar" name="intakephotos_avatar"
                        accept="image/*,.pdf"></input>
                </div>
            </div>
        </Page>
    );
}

function AuxiliarySystems(props) {
    return (
        <Page selected={props.selected} id="AuxiliarySystems">
            <div>
                <p className="section-label" id="AuxiliarySystems">Auxiliary Systems</p>
                <div className="textArea">
                    <input type="text" id="Mechanism" name="AuxiliarySystems_mechanism" placeholder="Mechanism" className="text-input" />
                    <br></br>
                    <input type="text" id="NumberOfParts" name="AuxiliarySystems_NumberOfParts" placeholder="Number of parts that need to be machined" className="text-input" />
                    <br></br>
                    <label className="SizeOfPart" htmlFor="SizeOfPart"><strong>Size Of Part</strong> </label>
                    <select name="AuxiliarySystems_SizeOfPart" id="SizeOfPart" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1*1">1x1</option>
                        <option value="1x2">1x2</option>
                        <option value="1.5x1.5">1.5x1.5</option>
                        <option value="2x2">2x2</option>
                        <option value="L-Bracket ">L-Bracket</option>
                        <option value="Shaft">Shaft</option>
                    </select>
                    <br></br>
                    <label className="TypeOfStock" htmlFor="TypeOfStock"><strong>Type of Stock</strong> </label>
                    <select name="AuxiliarySystems_TypeOfStock" id="TypeOfPart" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>
                    </select>
                    <br></br>
                    <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                    <select name="AuxiliarySystems_Thickness(Extrusion)" id="Thickness (Extrusion)" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>
                    </select>
                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="AuxiliarySystems_Thickness(Plate)" id="Thickness (Plate)" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                    </select>
                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate)</strong> </label>
                    <select name="AuxiliarySystems_Material(Plate)" id="Material  (Plate)" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                        <option value="PETG">PETG</option>
                        <option value="PLA">PLA</option>
                        <option value="ONYX">ONYX</option>
                    </select>
                    <br></br>
                    <input type="text" id="LengthInInches" name="AuxiliarySystems_LengthInInches" placeholder="Length in Inches" className="text-input" required="required" />
                    <br></br>
                    <input type="text" id="PartNumber" name="AuxiliarySystems_PartNumber" placeholder="Part Number" className="text-input" required="required" />
                    <br></br>
                    <h4>When do you need the part done by?</h4>
                    <NewDate name="AuxiliarySystems_date" />
                </div>
            </div>
        </Page>
    );
}

function AuxiliarySystemsPhotos(props) {
    return (
        <Page selected={props.selected} id="AuxiliarySystems-Photos">
            <div>

                <p className="section-label" id="AuxiliarySystems-Photos">Auxiliary Systems Photos</p>
                <div className="textArea">
                    <input type="file"
                        id="avatar" name="AuxiliarySystemsPhotos_avatar"
                        accept="image/*,.pdf"></input>
                </div>
            </div>
        </Page>
    );
}

function Forebar(props) {
    return (
        <Page selected={props.selected} id="Forebar">
            <div>
                <p className="section-label" id="Forebar">Forebar</p>
                <div className="textArea">
                    <input type="text" id="Mechanism" name="Forebar_Mechanism" placeholder="Mechanism" className="text-input" required="required" />
                    <br></br>
                    <input type="text" id="NumberOfParts" name="Forebar_NumberOfParts" placeholder="Number of parts that need to be machined" className="text-input" required="required" />
                    <br></br>
                    <label className="SizeOfPart" htmlFor="SizeOfPart"><strong>Size Of Part</strong> </label>
                    <select name="Forebar_SizeOfPart" id="SizeOfPart" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1*1">1x1</option>
                        <option value="1x2">1x2</option>
                        <option value="1.5x1.5">1.5x1.5</option>
                        <option value="2x2">2x2</option>
                        <option value="L-Bracket ">L-Bracket</option>
                        <option value="Shaft">Shaft</option>
                    </select>
                    <br></br>
                    <label className="TypeOfStock" htmlFor="TypeOfStock"><strong>Type of Stock</strong> </label>
                    <select name="Forebar_TypeOfStock" id="TypeOfPart" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>
                    </select>
                    <br></br>
                    <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                    <select name="Forebar_Thickness(Extrusion)" id="Thickness (Extrusion)" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>
                    </select>
                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="Forebar_Thickness(Plate)" id="Thickness (Plate)" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                    </select>
                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate)</strong> </label>
                    <select name="Forebar_Material(Plate)" id="Material  (Plate)" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                        <option value="PETG">PETG</option>
                        <option value="PLA">PLA</option>
                        <option value="ONYX">ONYX</option>
                    </select>
                    <br></br>

                    <input type="text" id="LengthInInches" name="Forebar_LengthInInches" placeholder="Length in Inches" className="text-input" required="required" />
                    <br></br>
                    <input type="text" id="PartNumber" name="Forebar_PartNumber" placeholder="Part Number" className="text-input" required="required" />
                    <br></br>
                    <h4>When do you need the part done by?</h4>
                    <NewDate name="Forebar_date" />
                </div>
            </div>
        </Page>
    );
}

function ForebarPhotos(props) {
    return (
        <Page selected={props.selected} id="Forebar-Photos">
            <div>
                <p className="section-label" id="Forebar-Photos">Forebar Photos</p>
                <div className="textArea">
                    <input type="file"
                        id="avatar" name="Forebar_avatar"
                        accept="image/*,.pdf"></input>
                </div>
            </div>
        </Page>
    );
}
function ThreeDPrint(props) {
    return (
        <Page selected={props.selected} id="ThreeDPrint">
            <div>
                <p className="section-label" id="ThreeDPrint">3d Print</p>
                <div className="textArea">

                    <input type="text" id="Mechanism" name="ThreeDPrint_Mechanism" placeholder="Mechanism" className="text-input" required="required" />
                    <br></br>
                    <input type="text" id="NumberOfParts" name="ThreeDPrint_NumberOfParts" placeholder="Number of parts that need to be machined" className="text-input" required="required" />
                    <br></br>
                    <label className="SizeOfPart" htmlFor="SizeOfPart"><strong>Size Of Part</strong> </label>
                    <select name="ThreeDPrint_SizeOfPart" id="SizeOfPart" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1*1">1x1</option>
                        <option value="1x2">1x2</option>
                        <option value="1.5x1.5">1.5x1.5</option>
                        <option value="2x2">2x2</option>
                        <option value="L-Bracket ">L-Bracket</option>
                        <option value="Shaft">Shaft</option>
                    </select>
                    <br></br>
                    <label className="TypeOfStock" htmlFor="TypeOfStock"><strong>Type of Stock</strong> </label>
                    <select name="ThreeDPrint_TypeOfStock" id="TypeOfPart" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>
                    </select>
                    <br></br>

                    <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                    <select name="ThreeDPrint_Thickness(Extrusion)" id="Thickness (Extrusion)" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>
                    </select>

                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="ThreeDPrint_Thickness(Plate)" id="Thickness (Plate)" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                    </select>
                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate)</strong> </label>
                    <select name="ThreeDPrint_Material(Plate)" id="Material  (Plate)" defaultValue="Choose" className="form-control" required>
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                        <option value="PETG">PETG</option>
                        <option value="PLA">PLA</option>
                        <option value="ONYX">ONYX</option>
                        <option value="FiberGlass">FiberGlass</option>
                        <option value="HHST">HHST</option>
                        <option value="CarbonFiber">CarbonFiber</option>
                    </select>
                    <br></br>

                    <input type="text" id="LengthInInches" name="ThreeDPrint_LengthInInches" placeholder="Length in Inches" className="text-input" requiref />
                    <br></br>
                    <input type="text" id="PartNumber" name="ThreeDPrint_PartNumber" placeholder="Part Number" className="text-input"  required/>
                    <br></br>
                    <h4>When do you need the part done by?</h4>
                    <NewDate name="ThreeDPrint_date" />
                </div>
            </div>
        </Page>
    );
}

function ThreeDPrintPhotos(props) {
    return (
        <Page selected={props.selected} id="ThreeDPrint">
            <div>
                <p className="section-label" id="ThreeDPrint">3d Print Photos</p>
                <div className="textArea">
                    <input type="file"
                        id="avatar" name="ThreeDPrintPhotos_avatar"
                        accept="image/*,.pdf"></input>
                </div>
            </div>
        </Page>
    );
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
export { SignIn, Drivetrain, PartHub, SavePage, DrivetrainPhotos, Bumpers, BumperPhotos, Elevator, ElevatorPhotos, Intake, IntakePhotos, AuxiliarySystems, AuxiliarySystemsPhotos, Forebar, ForebarPhotos, NewDate, ThreeDPrint, ThreeDPrintPhotos };