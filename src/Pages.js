import "./App.css";


function Page(props) {
    return (
        <div className={props.selected ? "page selected" : "page"} id={props.id}>
            {props.children}
        </div>

    );
}
function SignIn(props) {
    return (
        <Page selected={props.selected} className="page" id="sign-in">
            <div>
                <p className="section-label" id="SignIn">Energized</p>

                <div className="textArea">
                    <input type="text" id="Username" name="Username" placeholder="Username" className="text-input" />
                    <br />
                    <input type="text" id="Password" name="Password" placeholder="Password" className="text-input" />
                    <br />
                    <button>Sumbit</button>
                    {/* <input type="submit" className="SAVE" value="Sign In" /> */}
                </div>
            </div>
        </Page>
    );
}

function PartHub(props) {
    return (
        <Page selected={props.selected} id="PartHub">
            <div>
                <p className="section-label" id="Part Hub">Select a Mehanism</p>
                <div className="textArea">
                    <button>Drivetrain</button>
                    <button>Elevator</button>
                    <button>Auxiliary Systems</button>
                    <button>Bumpers</button>
                    <button>Intake</button>
                    <button>Outtake</button>
                    <button>Logout</button>
                </div>
            </div>
        </Page>
    );
}

function Drivetrain(props) {
    return (
        <Page selected={props.selected} id="DriveTrain">
            <div>
                <p className="section-label" id="Part Hub">Drivetrain</p>
                <div className="textArea">
                <input type="text" id="Mechanism" name="Mechanism" placeholder="Mechasi" className="text-input" />

                </div>
            </div>
        </Page>
    );
}
function SavePage(props) {
    return (
        <Page selected={props.selected} id="S">
            {/*
            TODO: Add content you want to be in the save page here
            */}
        </Page>
    );
}

export { SavePage };