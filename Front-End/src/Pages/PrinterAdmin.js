import "./app.css";
import React from 'react';
import { PrinterStatusDataTable } from '../PageP';
import { SavePage, SignIn } from '../Pages';

function PrinterStatusDataPage() {
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
                <li style={{ float: 'left' }}><button type='button' className={actArray[1]} onClick={() => { setValue(1) }}>Printer Status Admin</button></li>
            </ul>
            <br /><br />
            <div>
                <form action="http://127.0.0.1:5000/api/PrinterAdmin" method="POST"
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
        return (<><PrinterStatusDataTable /><SavePage /></>
        );
    }
}

export default PrinterStatusDataPage;