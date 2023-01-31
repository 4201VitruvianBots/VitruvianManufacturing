import "./App.css";
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        // TODO: Read in all values from props here, and add them to state if
        //      you need to modify them elsewhere in the app
        this.state = { signedIn: false };
        this.SubmitHandler = this.SubmitHandler.bind(this);

    }

    SubmitHandler(e) {
        e.preventDefault();
        // const answers = e.target.elements;
        // TODO: Add any custom logic here for when the form is submitted. 
        return false;
    }

    render() {
        return (
            <main>
                <p className="page-title">Welcome to the Vitruvian Manufacturing Hub</p>

                {/* 
            TODO: Add any files here that hold information about the app (such as navigation,
                page headers, or login logic) that you want to present to the user, that
                DOESN'T include any data you want in the form. For instance, if you want to
                record the name of the user in the table/database once you submit the form,
                that field shouldn't be put here, and should be put below.
            */}

                <form onSubmit={this.SubmitHandler} action="#">
                    {/* 
                TODO: Add fields to the form here, by putting react components between the
                    opening and closing <form></form> tags. These can be components from this file,
                    or components that get exported from another file (such as Form.js) and imported
                    into this file
                */}
                </form>
            </main>
        );
    }
}


export default App;
