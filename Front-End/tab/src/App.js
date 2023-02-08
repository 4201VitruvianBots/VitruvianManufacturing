import './App.css';
import React from 'react';
import { BumperPhotos, Bumpers, Drivetrain, DrivetrainPhotos, Elevator, ElevatorPhotos, NewDate, SignIn } from '../../src/Pages';

function App() {
    const choosepage = (props) => {
        if (props.value === 0) {
            return (<SignIn />
            );
        }
    }
    if (props.value === 1) {
        return (<><Drivetrain /><DrivetrainPhotos /><NewDate /></>

        );
    }


    if (props.value === 2) {
        return (<><Bumpers /><BumperPhotos /><NewDate /></>

        );
    }
    if (props.value === 3) {
        return (<><Elevator /><ElevatorPhotos /><NewDate /></>
        );
    }
    if (props.value === 4) {
        return (<><div>
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
                    <option value="PETG">PETG</option>
                    <option value="PLA">PLA</option>
                    <option value="ONYX">ONYX</option>
                </select>
                <br></br>
                <input type="text" id="LengthInInches" name="LengthInInches" placeholder="Length in Inches" className="text-input" />
                <br></br>
                <input type="text" id="PartNumber" name="PartNumber" placeholder="Part Number" className="text-input" />
                <br></br>
                <h4>When do you need the part done by?</h4>
                <NewDate />
            </div>
        </div><Page selected={props.selected} id="Intake-Photos">
                <div>

                    <p className="section-label" id="Intake-Photos">Intake Photos</p>
                    <div className="textArea">
                        <input type="file"
                            id="avatar" name="avatar"
                            accept="image/*,.pdf"></input>
                    </div>
                </div>
            </Page></>
        );
    }
    if (props.value === 5) {
        return (
            <Page selected={props.selected} id="AuxiliarySystems">
                <div>
                    <p className="section-label" id="AuxiliarySystems">Auxiliary Systems</p>
                    <div className="textArea">
                        <input type="text" id="Mechanism" name="name" placeholder="Mechanism" className="text-input" />
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
                            <option value="PETG">PETG</option>
                            <option value="PLA">PLA</option>
                            <option value="ONYX">ONYX</option>
                        </select>
                        <br></br>
                        <input type="text" id="LengthInInches" name="LengthInInches" placeholder="Length in Inches" className="text-input" />
                        <br></br>
                        <input type="text" id="PartNumber" name="PartNumber" placeholder="Part Number" className="text-input" />
                        <br></br>
                        <h4>When do you need the part done by?</h4>
                        <NewDate />
                    </div>
                </div>
                <div>
                    <p className="section-label" id="AuxiliarySystems-Photos">Auxiliary Systems Photos</p>
                    <div className="textArea">
                        <input type="file"
                            id="avatar" name="avatar"
                            accept="image/*,.pdf"></input>
                    </div>
                </div>
            </Page >
        );
    }
    if (props.value === 6) {
        return (
            <><Page>
                <div>
                    <p className="section-label" id="Forebar">Forebar</p>
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
                            <option value="PETG">PETG</option>
                            <option value="PLA">PLA</option>
                            <option value="ONYX">ONYX</option>
                        </select>
                        <br></br>
                        <input type="text" id="LengthInInches" name="LengthInInches" placeholder="Length in Inches" className="text-input" />
                        <br></br>
                        <input type="text" id="PartNumber" name="PartNumber" placeholder="Part Number" className="text-input" />
                        <br></br>
                        <h4>When do you need the part done by?</h4>
                        <NewDate />
                    </div>
                </div>
            </Page><div>

                    <p className="section-label" id="Forebar-Photos">Forebar Photos</p>
                    <div className="textArea">
                        <input type="file"
                            id="avatar" name="avatar"
                            accept="image/*,.pdf"></input>

                    </div>

                </div></>
        );
    }
    if (props.value === 7) {
        return (
            <><div>
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
                        <option value="PETG">PETG</option>
                        <option value="PLA">PLA</option>
                        <option value="ONYX">ONYX</option>
                    </select>
                    <br></br>
                    <input type="text" id="LengthInInches" name="LengthInInches" placeholder="Length in Inches" className="text-input" />
                    <br></br>
                    <input type="text" id="PartNumber" name="PartNumber" placeholder="Part Number" className="text-input" />
                    <br></br>
                    <h4>When do you need the part done by?</h4>
                    <NewDate />

                </div>
            </div><div>

                    <p className="section-label" id="ThreeDPrint">3d Print Photos</p>
                    <div className="textArea">
                        <input type="file"
                            id="avatar" name="avatar"
                            accept="image/*,.pdf"></input>

                    </div>

                </div></>
        );
    }

    if (props.value === 8) {
        return (
            <><p className="section-label" id="Save ">Save</p><div className="textArea">
                <input type="submit" value="Submit" />
            </div></>
        );
    }

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
                <li style={{ float: 'left' }}><button type='button' className={actArray[8]} onClick={() => { setValue(8) }}>Save Page</button></li>
            </ul>
            <br /><br />
            <div>
                <choosepage value={value} />
            </div>
        </div>

    );
}

export default App;