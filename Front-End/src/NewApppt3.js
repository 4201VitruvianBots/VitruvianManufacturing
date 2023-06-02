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




function Welcome(props) {
    return (
        <Page selected={props.selected} id="Welcome">
            <div>
               
                </div>
        </Page>
    );
}

function UploadFile(props) {
    return (
        <Page selected={props.selected} id="UploadFile">
            <div>
            
            </div>
        </Page>
    );
}

function PartSumbmission(props) {
    return (
        <Page selected={props.selected} id="PartSubmission">
            <div>
                
            </div>
        </Page>
    );
}

function UploadComplete(props) {
    return (
        <Page selected={props.selected} id="PartHub">
            <div>
               </div>
        </Page>
    );
}