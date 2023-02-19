import React from 'react';
import { AuxiliarySystems, AuxiliarySystemsPhotos, BumperPhotos, Bumpers, Drivetrain, DrivetrainPhotos, Elevator, ElevatorPhotos, Forebar, ForebarPhotos, Intake, IntakePhotos, SavePage, SignIn, ThreeDPrint, ThreeDPrintPhotos } from '../Pages';


const Machining = () => {
    return (
        function App() {
            const [value, setValue] = React.useState(0)

            const actArray = []
            for (let i = 0; i < 10; i++) {
                if (i === value) {
                    actArray.push('btn active')
                }
                else {
                    actArray.push('btn')
                }
            }

            return (
                <div className="App">
                    <ul style={{ listStyle: 'none' }}>
                        <li style={{ float: 'left' }}><button type='button' className={actArray[0]} onClick={() => { setValue(0) }}>SignIn</button></li>
                        <li style={{ float: 'left' }}><button type='button' className={actArray[1]} onClick={() => { setValue(1) }}>Drivetrain</button></li>
                        <li style={{ float: 'left' }}><button type='button' className={actArray[2]} onClick={() => { setValue(2) }}>Bumpers</button></li>
                        <li style={{ float: 'left' }}><button type='button' className={actArray[3]} onClick={() => { setValue(3) }}>Elevator</button></li>
                        <li style={{ float: 'left' }}><button type='button' className={actArray[4]} onClick={() => { setValue(4) }}>Intake</button></li>
                        <li style={{ float: 'left' }}><button type='button' className={actArray[5]} onClick={() => { setValue(5) }}>Auxiliary Systems</button></li>
                        <li style={{ float: 'left' }}><button type='button' className={actArray[6]} onClick={() => { setValue(6) }}>Forebar</button></li>
                        <li style={{ float: 'left' }}><button type='button' className={actArray[7]} onClick={() => { setValue(7) }}>3D Print</button></li>
                    </ul>
                    <br /><br />
                    <div>
                        <form action="http://127.0.0.1:5000/api/parts" method="POST"
                            enctype="multipart/form-data">
                            <Choosepage value={value} />
                        </form>
                    </div>
                </div>

            );
        }
function Choosepage(props) {
        if (props.value === 0) {
            return (<SignIn />
            );
        }

        if (props.value === 1) {
            return (
                <Page selected={props.selected} id="DriveTrain">
                    <div>
                        <p className="section-label" id="DriveTrain">Drivetrain</p>
                        <div className="textArea">
                            <input type="text" id="NameOfDesigner" placeholder="NameOfDesigner" className="text-input" required="required" />
                            <input type="text" id="NameOfDesigner" placeholder="NameOfDesigner" className="text-input" required="required" />
                            <input type="text" id="Mechanism" name="drivetrain_Mechanism" placeholder="Mechanism" className="text-input" required="required" />
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
                                <option value="" className="Placeholder" disabled>Click Here!</option>
                                <option value="Extrusion">Extrusion</option>
                                <option value="Plate">Plate</option>
                                <option value="Hex Shaft">Hex Shaft</option>
                                <option value="Shaft">Shaft</option>
                            </select>
                            <br></br>
                            <label className="Thickness (Extrusion)" htmlFor="Thickness (Extrusion)"><strong>Thickness (Extrusion)</strong> </label>
                            <select name="drivetrain_Thickness(Extrusion)" id="Thickness (Extrusion)" defaultValue="" className="form-control" required>
                                <option value="" className="Placeholder" disabled>Click Here!</option>
                                <option value="1/16">1/16</option>
                                <option value="1/8">1/8</option>
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
                            </select>
                            <br></br>
                            <input type="text" id="LengthInInches" name="drivetrain_LengthInInches" placeholder="Length in Inches" className="text-input" required="required" />
                            <br></br>
                            <input type="text" id="PartNumber" name="drivetrain_PartNumber" placeholder="Part Number" className="text-input" required="required" />
                            <br></br>
                            <h4>When do you need the part done by?</h4>
                            <NewDate name="drivetrain_cal" />
                        </div>
                    </div>
                </Page >
            );
        }





        if (props.value === 2) {
            return (<><Bumpers /><BumperPhotos /><SavePage /></>

            );
        }
        if (props.value === 3) {
            return (<><Elevator /><ElevatorPhotos /><SavePage /></>
            );
        }
        if (props.value === 4) {
            return (<><Intake /><IntakePhotos /><SavePage /></>
            );
        }
        if (props.value === 5) {
            return (<><AuxiliarySystems /><AuxiliarySystemsPhotos /><SavePage /></>
            )
        }
        if (props.value === 6) {
            return (<><Forebar /><ForebarPhotos /><SavePage /></>
            );
        }
        if (props.value === 7) {
            return (<><ThreeDPrint /><ThreeDPrintPhotos /><SavePage /></>
            );
        }
    }

};

export default Machining;