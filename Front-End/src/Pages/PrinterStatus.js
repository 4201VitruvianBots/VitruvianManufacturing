import React from 'react';
import { PrinterStatus } from '../Print';
import { SavePage} from '../Pages';

function PrinterStatusPage() {
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
                <li style={{ float: 'left' }}><button type='button' className={actArray[1]} onClick={() => { setValue(1) }}>Printer Status</button></li>
            </ul>
            <br /><br />
            <div>
                <form action="http://127.0.0.1:5000/api/Printer" method="POST"
                    enctype="multipart/form-data">
                    <Choosepage value={value} />
                </form>
            </div>
        </div>
    );
}
function Choosepage(props) {
    if (props.value === 1) {
        return (<><PrinterStatus /><SavePage /></>
        );
    }
}

export default PrinterStatusPage;