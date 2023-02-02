import "./App.css";

function Page(props) {
    return (
        <div className={props.selected ? "page selected" : "page"} id={props.id}>
            {props.children}
        </div>

    );
}
function SignIn(props) {
    return (
        <Page selected={props.selected} className="page" id="sign-in">
            <h3>Sign in</h3>
            <p>Sign in with your username and password</p>

            <label htmlFor="username">Your username</label>
            <input type="text" placeholder="Enter Username" name="username" required></input>
            <label htmlFor="pswrd">Your password</label>
                <input type="password" placeholder="Enter Password" name="pswrd" required/>
                    <br/>
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
                    <select name="Competition" id="Competition" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="DriveTrain">DriveTrain</option>
                        <option value="Elevator">Elevator</option>
                        <option value="Auxiliary Systems">Auxiliary Systems</option>
                        <option value="Bumpers">Bumpers</option>
                        <option value="Intake">Intake</option>
                        <option value="Outtake">Outtake</option>
                        
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
                    <input type="text" id="Mechanism" name="Mechanism" placeholder="Mechanism" className="text-input" />
                    <br></br>
                    <input type="text" id="NumberOfParts" name="NumberOfParts" placeholder="Number of parts that need to be machined" className="text-input" />
                    <br></br>
                    <label className="SizeOfPart" htmlFor="SizeOfPart"><strong>Size Of Part</strong> </label>

                    <select name="SizeOfPart" id="SizeOfPart" defaultValue="Choose">
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

                    <select name="TypeOfStock" id="TypeOfPart" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>
                    </select>
                    <br></br>
                    <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                    <select name="Thickness (Extrusion)" id="Thickness (Extrusion)" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>
                    </select>

                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="Thickness (Plate)" id="Thickness (Plate)" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                    </select>

                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate)</strong> </label>
                    <select name="Material (Plate)" id="Material  (Plate)" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                    </select>
                    <br></br>
                    <input type="text" id="Length in Inches" name="Length in Inches" placeholder="Length in Inches" className="text-input" />
                    <br></br>
                    <input type="text" id="Part Number" name="Part Number" placeholder="Part Number" className="text-input" />
                    <br></br>
                    <input type="text" id="When do you need the part done by?" name="When do you need the part done by? " placeholder="When do you need the part done by? " className="text-input" />

                    {/* <label for="avatar">Choose a profile picture:</label>

<input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg"></input> */}
                </div>
            </div>
        </Page>
    );
}
function DrivetrainPhotos(props) {
    return (
        <Page selected={props.selected} id="DrivetrainPhotos">
            <div>

                <p className="section-label" id="Part Hub">Drivetrain Photos</p>
                <div className="textArea">
                    <input type="file"
                        id="avatar" name="avatar"
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
                    <input type="text" id="Mechanism" name="Mechanism" placeholder="Mechanism" className="text-input" />
                    <br></br>
                    <input type="text" id="NumberOfParts" name="NumberOfParts" placeholder="Number of parts that need to be machined" className="text-input" />
                    <br></br>
                    <label className="SizeOfPart" htmlFor="SizeOfPart"><strong>Size Of Part</strong> </label>

                    <select name="SizeOfPart" id="SizeOfPart" defaultValue="Choose">
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

                    <select name="TypeOfStock" id="TypeOfPart" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>
                    </select>
                    <br></br>
                    <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                    <select name="Thickness (Extrusion)" id="Thickness (Extrusion)" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>
                    </select>

                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="Thickness (Plate)" id="Thickness (Plate)" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                    </select>

                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate)</strong> </label>
                    <select name="Material (Plate)" id="Material  (Plate)" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                    </select>
                    <br></br>
                    <input type="text" id="Length in Inches" name="Length in Inches" placeholder="Length in Inches" className="text-input" />
                    <br></br>
                    <input type="text" id="Part Number" name="Part Number" placeholder="Part Number" className="text-input" />
                    <br></br>
                    <input type="text" id="When do you need the part done by?" name="When do you need the part done by? " placeholder="When do you need the part done by? " className="text-input" />

                    {/* <label for="avatar">Choose a profile picture:</label>

<input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg"></input> */}
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
                        id="avatar" name="avatar"
                        accept="image/png, image/jpeg"></input>

                </div>

            </div>
        </Page>
    );
}
// function SavePage(props) {
//     return (

//         <Page selected={props.selected} id="S">
//             <p className="section-label" id="Bumpers">Save</p>

//             <div className="textArea">

//                 <button>Sumbit</button>
//             </div>
//         </Page>
//     );
// }
function Elevator(props) {
    return (
        <Page selected={props.selected} id="Elevator">
            <div>
                <p className="section-label" id="Elevator">Elevator</p>
                <div className="textArea">
                    <input type="text" id="Mechanism" name="Mechanism" placeholder="Mechanism" className="text-input" />
                    <br></br>
                    <input type="text" id="NumberOfParts" name="NumberOfParts" placeholder="Number of parts that need to be machined" className="text-input" />
                    <br></br>
                    <label className="SizeOfPart" htmlFor="SizeOfPart"><strong>Size Of Part</strong> </label>

                    <select name="SizeOfPart" id="SizeOfPart" defaultValue="Choose">
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

                    <select name="TypeOfStock" id="TypeOfPart" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>
                    </select>
                    <br></br>
                    <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                    <select name="Thickness (Extrusion)" id="Thickness (Extrusion)" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>
                    </select>

                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="Thickness (Plate)" id="Thickness (Plate)" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                    </select>

                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate)</strong> </label>
                    <select name="Material (Plate)" id="Material  (Plate)" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                    </select>
                    <br></br>
                    <input type="text" id="Length in Inches" name="Length in Inches" placeholder="Length in Inches" className="text-input" />
                    <br></br>
                    <input type="text" id="Part Number" name="Part Number" placeholder="Part Number" className="text-input" />
                    <br></br>
                    <input type="text" id="When do you need the part done by?" name="When do you need the part done by? " placeholder="When do you need the part done by? " className="text-input" />

                    {/* <label for="avatar">Choose a profile picture:</label>
    
    <input type="file"
           id="avatar" name="avatar"
           accept="image/png, image/jpeg"></input> */}
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
                        id="avatar" name="avatar"
                        accept="image/png, image/jpeg"></input>

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
                    <input type="text" id="Mechanism" name="Mechanism" placeholder="Mechanism" className="text-input" />
                    <br></br>
                    <input type="text" id="NumberOfParts" name="NumberOfParts" placeholder="Number of parts that need to be machined" className="text-input" />
                    <br></br>
                    <label className="SizeOfPart" htmlFor="SizeOfPart"><strong>Size Of Part</strong> </label>

                    <select name="SizeOfPart" id="SizeOfPart" defaultValue="Choose">
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

                    <select name="TypeOfStock" id="TypeOfPart" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>
                    </select>
                    <br></br>
                    <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                    <select name="Thickness (Extrusion)" id="Thickness (Extrusion)" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>
                    </select>

                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="Thickness (Plate)" id="Thickness (Plate)" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                    </select>

                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate)</strong> </label>
                    <select name="Material (Plate)" id="Material  (Plate)" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                    </select>
                    <br></br>
                    <input type="text" id="Length in Inches" name="Length in Inches" placeholder="Length in Inches" className="text-input" />
                    <br></br>
                    <input type="text" id="Part Number" name="Part Number" placeholder="Part Number" className="text-input" />
                    <br></br>
                    <input type="text" id="When do you need the part done by?" name="When do you need the part done by? " placeholder="When do you need the part done by? " className="text-input" />

                    {/* <label for="avatar">Choose a profile picture:</label>
        
        <input type="file"
               id="avatar" name="avatar"
               accept="image/png, image/jpeg"></input> */}
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
                        id="avatar" name="avatar"
                        accept="image/png, image/jpeg"></input>

                </div>

            </div>
        </Page>
    );
}
//     return (

//         <Page selected={props.selected} id="Elevator ">
//             <p className="section-label" id="Elevator ">Save</p>

//             <div className="textArea">

//                 <button>Sumbit</button>
//             </div>
//         </Page>
//     );
// }

function AuxiliarySystems(props) {
    return (
        <Page selected={props.selected} id="AuxiliarySystems">
            <div>
                <p className="section-label" id="AuxiliarySystems">Auxiliary Systems</p>
                <div className="textArea">
                    <input type="text" id="Mechanism" name="Mechanism" placeholder="Mechanism" className="text-input" />
                    <br></br>
                    <input type="text" id="NumberOfParts" name="NumberOfParts" placeholder="Number of parts that need to be machined" className="text-input" />
                    <br></br>
                    <label className="SizeOfPart" htmlFor="SizeOfPart"><strong>Size Of Part</strong> </label>

                    <select name="SizeOfPart" id="SizeOfPart" defaultValue="Choose">
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

                    <select name="TypeOfStock" id="TypeOfPart" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>
                    </select>
                    <br></br>
                    <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                    <select name="Thickness (Extrusion)" id="Thickness (Extrusion)" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>
                    </select>

                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="Thickness (Plate)" id="Thickness (Plate)" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                    </select>

                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate)</strong> </label>
                    <select name="Material (Plate)" id="Material  (Plate)" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                    </select>
                    <br></br>
                    <input type="text" id="Length in Inches" name="Length in Inches" placeholder="Length in Inches" className="text-input" />
                    <br></br>
                    <input type="text" id="Part Number" name="Part Number" placeholder="Part Number" className="text-input" />
                    <br></br>
                    <input type="text" id="When do you need the part done by?" name="When do you need the part done by? " placeholder="When do you need the part done by? " className="text-input" />

                    {/* <label for="avatar">Choose a profile picture:</label>
            
            <input type="file"
                   id="avatar" name="avatar"
                   accept="image/png, image/jpeg"></input> */}
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
                        id="avatar" name="avatar"
                        accept="image/png, image/jpeg"></input>

                </div>

            </div>
        </Page>
    );
}
// function SavePage(props) {
//     return (

//         <Page selected={props.selected} id="Elevator ">
//             <p className="section-label" id="Elevator ">Save</p>

//             <div className="textArea">

//                 <button>Sumbit</button>
//             </div>
//         </Page>
//     );
// }
function Outtake(props) {
    return (
        <Page selected={props.selected} id="Outtake">
            <div>
                <p className="section-label" id="Outtake">Outtake</p>
                <div className="textArea">
                    <input type="text" id="Mechanism" name="Mechanism" placeholder="Mechanism" className="text-input" />
                    <br></br>
                    <input type="text" id="NumberOfParts" name="NumberOfParts" placeholder="Number of parts that need to be machined" className="text-input" />
                    <br></br>
                    <label className="SizeOfPart" htmlFor="SizeOfPart"><strong>Size Of Part</strong> </label>

                    <select name="SizeOfPart" id="SizeOfPart" defaultValue="Choose">
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

                    <select name="TypeOfStock" id="TypeOfPart" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Extrusion">Extrusion</option>
                        <option value="Plate">Plate</option>
                        <option value="Hex Shaft">Hex Shaft</option>
                        <option value="Shaft">Shaft</option>
                    </select>
                    <br></br>
                    <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                    <select name="Thickness (Extrusion)" id="Thickness (Extrusion)" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value="1/8">1/8</option>
                    </select>

                    <label className="Thickness (Plate)" htmlFor="Thickness (Plate)"><strong>Thickness (Plate)</strong> </label>
                    <select name="Thickness (Plate)" id="Thickness (Plate)" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="1/16">1/16</option>
                        <option value=".09">.09</option>
                        <option value="1/8">1/8</option>
                        <option value="1/4">1/4</option>
                        <option value="3/8">3/8</option>
                        <option value="3/4">3/4</option>
                    </select>

                    <label className="Material (Plate)" htmlFor="Material (Plate)"><strong>Material (Plate)</strong> </label>
                    <select name="Material (Plate)" id="Material  (Plate)" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Click Here!</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Polycarbonate">Polycarbonate</option>
                        <option value="Wood">Wood</option>
                    </select>
                    <br></br>
                    <input type="text" id="Length in Inches" name="Length in Inches" placeholder="Length in Inches" className="text-input" />
                    <br></br>
                    <input type="text" id="Part Number" name="Part Number" placeholder="Part Number" className="text-input" />
                    <br></br>
                    <input type="text" id="When do you need the part done by?" name="When do you need the part done by? " placeholder="When do you need the part done by? " className="text-input" />

                    {/* <label for="avatar">Choose a profile picture:</label>
                
                <input type="file"
                       id="avatar" name="avatar"
                       accept="image/png, image/jpeg"></input> */}
                </div>
            </div>
        </Page>
    );
}
function OuttakePhotos(props) {
    return (
        <Page selected={props.selected} id="Outtake-Photos">
            <div>

                <p className="section-label" id="Outtake-Photos">Outtake Photos</p>
                <div className="textArea">
                    <input type="file"
                        id="avatar" name="avatar"
                        accept="image/png, image/jpeg"></input>

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

                <button>Sumbit</button>
            </div>
        </Page>
    );
}
export { SignIn, Drivetrain, PartHub, SavePage, DrivetrainPhotos, Bumpers, BumperPhotos, Elevator, ElevatorPhotos, Intake, IntakePhotos, AuxiliarySystems, AuxiliarySystemsPhotos, Outtake, OuttakePhotos };