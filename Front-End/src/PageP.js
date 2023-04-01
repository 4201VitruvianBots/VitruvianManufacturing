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
                <h1>Sign in</h1>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" required="required" />
                <br></br>
                <br></br>
                <br></br>
                <input type="submit" value="Submit" />
            </div>
        </Page>
    );
}

function PrinterStatusDataTable(props) {
    return (
        <Page selected={props.selected} id="PrinterStatusDataTable">
            <div>
                <br></br>
                <p className="selection-label" id="Printer-Stauts-Data-Table">Priner Status Data Tables</p>
                <div className="textArea">
                    <table border="1" width="140%">
                        <tr>
                            <th>Name Of Printer</th>
                            <th>Status Of Printer</th>
                            <th>Issue of Printer</th>
                            <th> Date</th>
                        </tr>
                        <tr>
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
                        </tr>
                        <tr>
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
                        </tr>
                        <tr>
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
export { SignIn, NewDate, PrinterStatusDataTable, SavePage };