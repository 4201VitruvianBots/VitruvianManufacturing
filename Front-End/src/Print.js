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
function PrinterStatus(props) {
    return (
        <Page selected={props.selected} id="PrinerStatus">
            <div>
                <br></br>

                <p className="section-label" id="PrinterStatus">Printer Status</p>
                <div className="textArea">
                    <label className="PrinterName" name="PrinterName" htmlFor="PrinterName"><strong>Name of Printer</strong> </label>
                    <select name="PrinterName" id="PrinterName" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here! </option>
                        <option value="Printer1">Printer 1</option>
                        <option value="Printer2">Printer #2</option>
                        <option value="Printer3">Printer #3</option>
                        <option value="Printer4">Printer #4</option>
                        <option value="Printer5 ">Printer #5</option>
                        <option value="Printer6">Printer #6</option>
                        <option value="Printer7">Printer #7</option>
                        <option value="Printer8">Printer #8</option>
                        <option value="Printer9">Printer #9</option>
                        <option value="Printer10">Printer #10</option>
                        <option value="Printer11">Printer #11</option>
                        <option value="Printer12">Printer #12</option>
                        <option value="Printer13">Printer #13</option>
                        <option value="Printer14">Printer #14</option>
                        <option value="Printer15">Printer #15</option>
                        <option value="Printer16">Printer #16</option>
                        <option value="Printer17">Printer #17</option>
                        <option value="Printer18">Printer #18</option>
                        <option value="Printer19">Printer #19</option>
                        <option value="Printer20">Printer #20</option>
                        <option value="Markforged1">Markforged 1</option>
                        <option value="Markforged2">Markforged 2</option>
                    </select>
                    <br></br>
                    <label className="StatusOfPrinter" name="StatusOfPrinter" htmlFor="StatusOfPrinter"><strong>Status of Printer</strong> </label>
                    <select name="StatusOfPrinter" id="StatusOfPrinter" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here! </option>
                        <option value="Broken"> Broken</option>
                        <option value="Working">Working</option>
                        <option value="InProgress">In Progress</option>
                    </select>
                    <br></br>
                    <label className="Issue" name="Issue" htmlFor="Issue"><strong>Issue of Printer</strong> </label>
                    <select name="Issue" id="Issue" defaultValue="" className="form-control" required>
                        <option value="" className="Placeholder" disabled>Click Here! </option>
                        <option value="NozzleBlobs"> Nozzle Blobs</option>
                        <option value="NozzleClogs"> Nozzle Clogs</option>
                        <option value="BrokenFrontFan"> Broken Front Fan</option>
                        <option value=" PindaProbeatIncorrectHeightThermalRunaway">  Pinda Probe at incorrect height  thermal runaway.</option>
                    </select>
                    <br></br>
                    <h3>When do you need it by?</h3>
                    <NewDate />
                </div>
            </div>
        </Page>
    )
}

export { PrinterStatus, NewDate };