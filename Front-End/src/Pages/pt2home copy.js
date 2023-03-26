import React from 'react';
import { VitruvianManfacturing, UploadFile, Part, UploadComplete } from '../NewPartApp3';
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
                <li style={{ float: 'left' }}><button type='button' className={actArray[2]} onClick={() => { setValue(2) }}>Part Sumbmission</button></li>
                <li style={{ float: 'left' }}><button type='button' className={actArray[3]} onClick={() => { setValue(3) }}>Part</button></li> 
                 <li style={{ float: 'left' }}><button type='button' className={actArray[4]} onClick={() => { setValue(4) }}>Upload Complete</button></li>
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
    // if (props.value === 0) {
    //     return (<SignIn />
    //     );
    // }

    if (props.value === 0) {
        return (<VitruvianManfacturing />
        );
    }

    if (props.value === 1) {
        return (<UploadFile />
        );
    }
    if (props.value === 2) {
        return (<Part />
        );
    }
    if (props.value === 3) {
        return (<UploadComplete />
        );
    }

}

export default NewPartApp3;