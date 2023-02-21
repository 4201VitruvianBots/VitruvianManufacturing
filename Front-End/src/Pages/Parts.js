import React from 'react';
import { AuxiliarySystems, AuxiliarySystemsPhotos, BumperPhotos, Bumpers, Drivetrain, DrivetrainPhotos, Elevator, ElevatorPhotos, Forebar, ForebarPhotos, Intake, IntakePhotos, SavePage, SignIn, ThreeDPrint, ThreeDPrintPhotos } from '../Pages';

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

            <form action="http://127.0.0.1:5000/api/drivetrain" method="POST"
                enctype="multipart/form-data">
                <Drivetrain />
                <DrivetrainPhotos />
                <SavePage />
            </form>

        );
    }


    if (props.value === 2) {
        return (
            <form action="http://127.0.0.1:5000/api/bumpers" method="POST"
                enctype="multipart/form-data">
                <Bumpers />
                <BumperPhotos />
                <SavePage />
            </form>

        );
    }
    if (props.value === 3) {
        return (<form action="http://127.0.0.1:5000/api/elevator" method="POST"
            enctype="multipart/form-data">
            <Elevator />
            <ElevatorPhotos />
            <SavePage />
        </form>
        );
    }
    if (props.value === 4) {
        return (<form action="http://127.0.0.1:5000/api/intake" method="POST"
            enctype="multipart/form-data">
            <Intake />
            <IntakePhotos />
            <SavePage />
        </form>
        );
    }
    if (props.value === 5) {
        return (<form action="http://127.0.0.1:5000/api/auxiliary-systems" method="POST"
            enctype="multipart/form-data">
            <AuxiliarySystems />
            <AuxiliarySystemsPhotos />
            <SavePage />
        </form>
        )
    }
    if (props.value === 6) {
        return (
            < form action="http://127.0.0.1:5000/api/forebar" method="POST"
                enctype="multipart/form-data">
                <Forebar />
                <ForebarPhotos />
                <SavePage />
            </form>
        );
    }
    if (props.value === 7) {
        return (
            <form action="http://127.0.0.1:5000/api/3DPrint" method="POST"
                enctype="multipart/form-data">
                <ThreeDPrint />
                <ThreeDPrintPhotos />
                <SavePage />
            </form>
        );
    }
}



export default App;