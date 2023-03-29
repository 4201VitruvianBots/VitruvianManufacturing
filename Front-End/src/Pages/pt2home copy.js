import React from 'react';
import { VitruvianManfacturing, UploadFile } from '../NewPartApp3';
import "./app.css";

const NewPartApp3 = () => {
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
                <li style={{ float: 'left' }}><button type='button' className={actArray[0]} onClick={() => { setValue(0) }}>Begin</button></li>
                <li style={{ float: 'left' }}><button type='button' className={actArray[1]} onClick={() => { setValue(1) }}>Upload File</button></li>
            </ul>
            <br /><br />
            <div>
                <form action="http://127.0.0.1:5000/api/homept3" method="POST"
                    enctype="multipart/form-data">
                    <Choosepage value={value} />
                </form>
            </div>
        </div>
    );
}

function Choosepage(props) {

    if (props.value === 0) {
        return (<VitruvianManfacturing />
        );
    }

    if (props.value === 1) {
        return (<UploadFile />
        );
    }
}
export default NewPartApp3;