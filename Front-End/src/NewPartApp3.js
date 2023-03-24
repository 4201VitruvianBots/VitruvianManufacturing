import "./App.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RadioButtons } from "./Form";
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


function VitruvianManfacturing(props) {
    return (
        <Page selected={props.selected} className="page" id="sign-in">
            <div className="box">
        <h1>Welcome to Vitruvian Manfacturing</h1>
       <div className="boxhalf">
        Material
       </div>
       
            </div>
        </Page>
    );
}


 
function UploadFile(props) {
    return (
        <Page selected={props.selected} id="UploadFile">
            <div>
                <p className="section-label" id="UploadFile">Upload File</p>
                <div className="textArea">
                </div>
            </div>
        </Page >
    );
}
function Part(props) {
    return (
        <Page selected={props.selected} id="Part">
            <div>
                <p className="section-label" id="Part">Part</p>
                <div className="textArea">
                    <input type="file" required="required " multiple
                        id="avatar" name="drivetrainphotos_avatar"
                        accept="image/png, image/jpeg"></input>
                </div>
            </div>
        </Page>
    );
}

function UploadComplete(props) {
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



export { VitruvianManfacturing,UploadFile, Part, UploadComplete};