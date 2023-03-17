import "./App.css";
import React, { useState } from "react";
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
                        <option value="Nothing">Nothing</option>

                    </select>
                    <br></br>
                    <label className="TypeOfStock" htmlFor="TypeOfStock"><strong>Type of Stock</strong> </label>
                    <select name="drivetrain_TypeOfPart" id="TypeOfPart" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <br></br>
                    <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                    <select name="drivetrain_Thickness(Extrusion)" id="Thickness (Extrusion)" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="drivetrain_Thickness(Plate)" id="Thickness (Plate)" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate)</strong> </label>
                    <select name="drivetrain_Material(Plate)" id="Material  (Plate)" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                        <option value="PETG">PETG</option>
                        <option value="PLA">PLA</option>
                        <option value="ONYX">ONYX</option>             
                        <option value="Nothing">Nothing</option>
                    </select>
                    <br></br>
                    <input type="text" id="LengthInInches" name="drivetrain_LengthInInches" placeholder="Length in Inches" className="text-input" required="required" />
                    <br></br>
                    {/* <input type="text" id="PartNumber" name="drivetrain_PartNumber" placeholder="Part Number" className="text-input" required="required" /> */}
                    <label className="PartName" htmlFor="PartName"><strong>Part Name</strong> </label>
                    <select name="drivetrain_PartName" id="Material  (Plate)" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="4201-23-P-0118">4201-23-P-0118</option>
                        <option value="4201-23-P-0117">4201-23-P-0117</option>
                        <option value="4201-23-P-0116">4201-23-P-0116</option>
                        <option value="4201-23-P-0101">4201-23-P-0101</option>
                        <option value="4201-23-P-0102">4201-23-P-0102</option>
                        <option value="4201-23-P-0103">4201-23-P-0103</option>             
                        <option value="4201-23-P-0104">4201-23-P-0104</option>
                        <option value="4201-23-P-0105">4201-23-P-0105</option>
                        <option value="4201-23-P-0112">4201-23-P-0112</option>
                        <option value="4201-23-P-0109">4201-23-P-0109</option>
                        <option value="4201-23-P-01100">4201-23-P-0110</option>
                        <option value="4201-23-P-0111">4201-23-P-0111</option>
                        <option value="4201-23-P-0113">4201-23-P-0113</option>
                    </select>
                    <br></br>
                    {/* <input type="radio" id="Low" name="Low" value="HTML" />
                    <label for="html">Low</label>
                    <input type="radio" id="Mid" name="Mid" value="Mid" />
                    <label for="Mid">Mid</label> */}
                    <h4>When do you need the part done by?</h4>
                    <NewDate name="drivetrain_cal" />
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
                    <input type="file" required="required " multiple
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
                    <input type="text" id="NumberOfParts" name="bumpers_NumberOfParts" placeholder="Number of parts that need to be machined" className="text-input" required="required" />
                    <br></br>
                    <label className="SizeOfPart" htmlFor="SizeOfPart"><strong>Size Of Part</strong>  </label>
                    <select name="bumpers_SizeOfPart" id="SizeOfPart" defaultValue="" className="form-control" required >
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1*1">1x1 </option>
                        <option value="1x2">1x2</option>
                        <option value="1.5x1.5">1.5x1.5</option>
                        <option value="2x2">2x2</option>
                        <option value="L-Bracket ">L-Bracket</option>
                        <option value="Shaft">Shaft</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <br></br>
                    <label className="TypeOfStock" htmlFor="TypeOfStock"><strong>Type of Stock</strong> </label>
                    <select name="bumpers_TypeOfStock" id="TypeOfPart" defaultValue="" className="form-control" required >
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>
                        <option value="3D-Print">3D-Print</option>
                        <option value="Nothing">Nothing</option>
                        </select>
                    <br></br>
                    <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                    <select name="bumpers_Thickness(Extrusion)" id="Thickness (Extrusion)" defaultValue="" className="form-control" required >
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="bumpers_Thickness(Plate)" id="Thickness (Plate)" defaultValue="" className="form-control" required >
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate) </strong> </label>
                    <select name="bumpers_Material(Plate)" id="Material  (Plate)" defaultValue="" className="form-control" required >
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                        <option value="PETG">PETG</option>
                        <option value="PLA">PLA</option>
                        <option value="ONYX">ONYX</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <br></br>
                    <input type="text" id="LengthInInches" name="bumpers_LengthInInches" placeholder="Length in Inches" className="text-input" required="required" />
                    <br></br>
                    <br></br>
                    <label className="Partame" htmlFor="PartName"><strong>Part Name </strong> </label>
                    <select name="bumpers_PartName" id="PartName" defaultValue="" className="form-control" required >
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="4201-23-P-0201">4201-23-P-0201</option>
                        <option value="4201-23-p-0204">4201-23-p-0204</option>
                        <option value="4201-23-P-0203">4201-23-P-0203</option>
                        <option value="4201-23-P-0202">4201-23-P-0202</option>
                        </select>
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
                    <input type="file" required="required" multiple
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
                    <input type="text" id="NumberOfParts" name="elevator_NumberOfParts" placeholder="Number of parts that need to be machined" className="text-input" required="required" />
                    <br></br>
                    <label className="SizeOfPart" htmlFor="SizeOfPart"><strong>Size Of Part</strong> </label>
                    <select name="elevator_SizeOfPart" id="SizeOfPart" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1*1">1x1</option>
                        <option value="1x2">1x2</option>
                        <option value="1.5x1.5">1.5x1.5</option>
                        <option value="2x2">2x2</option>
                        <option value="L-Bracket ">L-Bracket</option>
                        <option value="Shaft">Shaft</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <br></br>
                    <label className="TypeOfStock" htmlFor="TypeOfStock"><strong>Type of Stock</strong> </label>
                    <select name="elevator_TypeOfStock" id="TypeOfPart" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <br></br>
                    <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                    <select name="elevator_Thickness(Extrusion)" id="Thickness (Extrusion)" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>

                        <option value="Nothing">Nothing</option>
                    </select>
                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="elevator_Thickness(Plate)" id="Thickness (Plate)" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate)</strong> </label>
                    <select name="elevator_Material(Plate)" id="Material  (Plate)" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                        <option value="PETG">PETG</option>
                        <option value="PLA">PLA</option>
                        <option value="ONYX">ONYX</option>

                        <option value="Nothing">Nothing</option>
                    </select>
                    <br></br>
                    <input type="text" id="LengthInInches" name="elevator_LengthInInches" placeholder="Length in Inches" className="text-input" required="required" />
                    <br></br>
                    <label className="Partame" htmlFor="PartName"><strong>Part Name </strong> </label>
                    <select name="elevator_PartName" id="PartName" defaultValue="" className="form-control" required >
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="4201-23-P-0310">4201-23-P-0310</option>
                        <option value="4201-23-p-0309">4201-23-p-0309</option>
                        <option value="4201-23-P-0307">4201-23-P-0307</option>
                        <option value="4201-23-P-0308">4201-23-P-0308</option>
                        <option value="4201-23-P-0305">4201-23-P-0305</option>
                        <option value="4201-23-P-0306">4201-23-P-0306</option>
                        <option value="4201-23-P-0315">4201-23-P-0315</option>
                        <option value="4201-23-P-0314">4201-23-P-0314</option>
                        <option value="4201-23-P-0313">4201-23-P-0313</option>
                        <option value="4201-23-P-0312">4201-23-P-0312</option>
                        <option value="4201-23-P-0311">4201-23-P-0311</option>
                        <option value="4201-23-P-0317">4201-23-P-0317</option>
                        <option value="4201-23-P-0318">4201-23-P-0318</option>
                        <option value="4201-23-P-0319">4201-23-P-0319</option>
                        <option value="4201-23-P-0323">4201-23-P-0323</option>
                        <option value="4201-23-P-0326">4201-23-P-0326</option>
                        <option value="4201-23-P-0327">4201-23-P-0327</option>
                        <option value="4201-23-P-0328">4201-23-P-0328</option>
                        <option value="4201-23-P-0331">4201-23-P-0331</option>
                        <option value="4201-23-P-0501">4201-23-P-0501</option>
                        <option value="4201-23-P-0338">4201-23-P-0338</option>
                        <option value="4201-23-P-0344">4201-23-P-0344</option>
                        <option value="4201-23-P-0341">4201-23-P-0341</option>
                        <option value="4201-23-P-0324">4201-23-P-0324</option>
                        <option value="4201-23-P-0348">4201-23-P-0348</option>
                        <option value="4201-23-P-0350">4201-23-P-0350</option>
                        <option value="4201-23-P-0349">4201-23-P-0349</option>
                        <option value="4201-23-P-0344">4201-23-P-0344</option>
                        <option value="4201-23-P-0345">4201-23-P-0345</option>
                        <option value="4201-23-P-0346">4201-23-P-0346</option>
                        <option value="4201-23-P-0352">4201-23-P-0352</option>
                        <option value="4201-23-P-0351">4201-23-P-0351</option>
                        <option value="4201-23-P-0347">4201-23-P-0347</option>
                        <option value="4201-23-P-0347">4201-23-P-0511</option>
                        <option value="4201-23-P-0343">4201-23-P-0343</option>
                        <option value="4201-23-P-0342">4201-23-P-0342</option>
                        </select>
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
                    <input type="file" required="required" multiple
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
                    <input type="text" id="NumberOfParts" name="intake_NumberOfParts" placeholder="Number of parts that need to be machined" className="text-input" required />
                    <br></br>
                    <label className="SizeOfPart" htmlFor="SizeOfPart"><strong>Size Of Part</strong> </label>
                    <select name="intake_SizeOfPart" id="SizeOfPart" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1*1">1x1</option>
                        <option value="1x2">1x2</option>
                        <option value="1.5x1.5">1.5x1.5</option>
                        <option value="2x2">2x2</option>
                        <option value="L-Bracket ">L-Bracket</option>
                        <option value="Shaft">Shaft</option>

                        <option value="Nothing">Nothing</option>
                    </select>
                    <br></br>
                    <label className="TypeOfStock" htmlFor="TypeOfStock"><strong>Type of Stock</strong> </label>
                    <select name="intake_TypeOfStock" id="TypeOfPart" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <br></br>
                    <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                    <select name="intake_Thickness(Extrusion)" id="Thickness (Extrusion)" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>

                        <option value="Nothing">Nothing</option>
                    </select>
                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="intake_Thickness(Plate)" id="Thickness (Plate)" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate)</strong> </label>
                    <select name="intake_Material(Plate)" id="Material  (Plate)" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                        <option value="PETG">PETG</option>
                        <option value="PLA">PLA</option>
                        <option value="ONYX">ONYX</option>

                        <option value="Nothing">Nothing</option>
                    </select>
                    <br></br>
                    <input type="text" id="LengthInInches" name="intake_LengthInInches" placeholder="Length in Inches" className="text-input" required="required" />
                    <br></br>
                    <label className="Partame" htmlFor="PartName"><strong>Part Name </strong> </label>
                    <select name="intake_PartName" id="PartName" defaultValue="" className="form-control" required >
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="4201-23-P-0401">4201-23-P-0401</option>
                        <option value="4201-23-p-0402">4201-23-p-0402</option>
                        <option value="4201-23-P-0403">4201-23-P-0403</option>
                        <option value="4201-23-P-0404">4201-23-P-0404</option>
                        <option value="4201-23-P-0405">4201-23-P-0405</option>
                        <option value="4201-23-P-0407">4201-23-P-0407</option>
                        <option value="4201-23-P-0409">4201-23-P-0409</option>
                        <option value="4201-23-P-0410">4201-23-P-0410</option>
                        <option value="4201-23-P-0411">4201-23-P-0411</option>
                        <option value="4201-23-P-0412">4201-23-P-0412</option>
                        <option value="4201-23-P-0413">4201-23-P-0413</option>
                        <option value="4201-23-P-0414">4201-23-P-0414</option>
                        <option value="4201-23-P-0415">4201-23-P-0415</option>
                        <option value="4201-23-P-0416">4201-23-P-0416</option>
                        <option value="4201-23-P-0417">4201-23-P-0417</option>
                        <option value="4201-23-P-0418">4201-23-P-0418</option>
                        <option value="4201-23-P-0419">4201-23-P-0419</option>
                        <option value="4201-23-P-0421">4201-23-P-0421</option>
                        <option value="4201-23-P-0422">4201-23-P-0422</option>

                        </select>
                    <br></br>
                    <h4>When do you need the part done by?</h4>
                    <NewDate name="intake_date" />
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
                    <input type="file" required="required" multiple
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
                    <input type="text" id="NumberOfParts" name="AuxiliarySystems_NumberOfParts" placeholder="Number of parts that need to be machined" className="text-input" required />
                    <br></br>
                    <label className="SizeOfPart" htmlFor="SizeOfPart"><strong>Size Of Part</strong> </label>
                    <select name="AuxiliarySystems_SizeOfPart" id="SizeOfPart" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1*1">1x1</option>
                        <option value="1x2">1x2</option>
                        <option value="1.5x1.5">1.5x1.5</option>
                        <option value="2x2">2x2</option>
                        <option value="L-Bracket ">L-Bracket</option>
                        <option value="Shaft">Shaft</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <br></br>
                    <label className="TypeOfStock" htmlFor="TypeOfStock"><strong>Type of Stock</strong> </label>
                    <select name="AuxiliarySystems_TypeOfStock" id="TypeOfPart" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <br></br>
                    <label className="Thickness(Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                    <select name="AuxiliarySystems_Thickness(Extrusion)" id="Thickness (Extrusion)" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>

                        <option value="Nothing">Nothing</option>
                    </select>
                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="AuxiliarySystems_Thickness(Plate)" id="Thickness (Plate)" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate)</strong> </label>
                    <select name="AuxiliarySystems_Material(Plate)" id="Material  (Plate)" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                        <option value="PETG">PETG</option>
                        <option value="PLA">PLA</option>
                        <option value="ONYX">ONYX</option>

                        <option value="Nothing">Nothing</option>
                    </select>
                    <br></br>
                    <input type="text" id="LengthInInches" name="AuxiliarySystems_LengthInInches" placeholder="Length in Inches" className="text-input" required="required" />
                    <br></br>
                    <label className="Partame" htmlFor="PartName"><strong>Part Name </strong> </label>
                    <select name="AS_PartName" id="PartName" defaultValue="" className="form-control" required >
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="4201-23-P-0514">4201-23-P-0514</option>
                        <option value="4201-23-p-0515">4201-23-p-0515</option>
                        </select>
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
                    <input type="file" required="required" multiple
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
                    <input type="text" id="NumberOfParts" name="Forebar_NumberOfParts" placeholder="Number of parts that need to be machined" className="text-input" required="required" />
                    <br></br>
                    <label className="SizeOfPart" htmlFor="SizeOfPart"><strong>Size Of Part</strong> </label>
                    <select name="Forebar_SizeOfPart" id="SizeOfPart" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1*1">1x1</option>
                        <option value="1x2">1x2</option>
                        <option value="1.5x1.5">1.5x1.5</option>
                        <option value="2x2">2x2</option>
                        <option value="L-Bracket ">L-Bracket</option>
                        <option value="Shaft">Shaft</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <br></br>
                    <label className="TypeOfStock" htmlFor="TypeOfStock"><strong>Type of Stock</strong> </label>
                    <select name="Forebar_TypeOfStock" id="TypeOfPart" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <br></br>
                    <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                    <select name="Forebar_Thickness(Extrusion)" id="Thickness (Extrusion)" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="Forebar_Thickness(Plate)" id="Thickness (Plate)" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate)</strong> </label>
                    <select name="Forebar_Material(Plate)" id="Material  (Plate)" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                        <option value="PETG">PETG</option>
                        <option value="PLA">PLA</option>
                        <option value="ONYX">ONYX</option>
                        <option value="Nothing">Nothing</option>
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
                    <input type="file" required="required" multiple
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
                    <input type="text" id="NumberOfParts" name="ThreeDPrint_NumberOfParts" placeholder="Number of parts that need to be machined" className="text-input" required="required" />
                    <br></br>
                    <label className="SizeOfPart" htmlFor="SizeOfPart"><strong>Size Of Part</strong> </label>
                    <select name="ThreeDPrint_SizeOfPart" id="SizeOfPart" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1*1">1x1</option>
                        <option value="1x2">1x2</option>
                        <option value="1.5x1.5">1.5x1.5</option>
                        <option value="2x2">2x2</option>
                        <option value="L-Bracket ">L-Bracket</option>
                        <option value="Shaft">Shaft</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <br></br>
                    <label className="TypeOfStock" htmlFor="TypeOfStock"><strong>Type of Stock</strong> </label>
                    <select name="ThreeDPrint_TypeOfStock" id="TypeOfPart" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>

                        <option value="Nothing">Nothing</option>
                    </select>
                    <br></br>
                    <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                    <select name="ThreeDPrint_Thickness(Extrusion)" id="Thickness (Extrusion)" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>

                        <option value="Nothing">Nothing</option>
                    </select>
                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="ThreeDPrint_Thickness(Plate)" id="Thickness (Plate)" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate)</strong> </label>
                    <select name="ThreeDPrint_Material(Plate)" id="Material  (Plate)" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                        <option value="PETG">PETG</option>
                        <option value="PLA">PLA</option>
                        <option value="ONYX">ONYX</option>
                        <option value="FiberGlass">FiberGlass</option>
                        <option value="HHST">HHST</option>
                        <option value="CarbonFiber">CarbonFiber</option>
                        <option value="Nothing">Nothing</option>
                    </select>
                    <br></br>
                    <input type="text" id="LengthInInches" name="ThreeDPrint_LengthInInches" placeholder="Length in Inches" className="text-input" required />
                    <br></br>
                    <input type="text" id="PartNumber" name="ThreeDPrint_PartNumber" placeholder="Part Number" className="text-input" required />
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
                    <input type="file" required="required" multiple
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
export { SignIn, PartHub, Drivetrain, DrivetrainPhotos, Bumpers, BumperPhotos, Elevator, ElevatorPhotos, Intake, IntakePhotos, AuxiliarySystems, AuxiliarySystemsPhotos, Forebar, ForebarPhotos, ThreeDPrint, ThreeDPrintPhotos, SavePage };