// import "./App.css";
// import React from "react";
// import { SignIn, PartHub, Drivetrain, SavePage, DrivetrainPhotos } from "./Pages";

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         // TODO: Read in all values from props here, and add them to state if
//         //      you need to modify them elsewhere in the app
//         this.state = { signedIn: false };
//         this.SubmitHandler = this.SubmitHandler.bind(this);

//     }

//     SubmitHandler(e) {
//         e.preventDefault();
//         // const answers = e.target.elements;
//         // TODO: Add any custom logic here for when the form is submitted. 
//         return false;
//     }

//     render() {
//         return (
//             <main>
//                 <p className="page-title">Welcome to the Vitruvian Manufacturing Hub</p>

//                 {/* 
//             TODO: Add any files here that hold information about the app (such as navigation,
//                 page headers, or login logic) that you want to present to the user, that
//                 DOESN'T include any data you want in the form. For instance, if you want to
//                 record the name of the user in the table/database once you submit the form,
//                 that field shouldn't be put here, and should be put below.
//             */}

//                 <form onSubmit={this.SubmitHandler} action="#">
//                 <SignIn selected={this.state.selected === 'sign-in'} />
//                     <PartHub selected={this.state.selected === 'part-hub'} />
//                     <Drivetrain selected={this.state.selected === 'drive-train'} />
//                     <DrivetrainPhotos selected={this.state.selected === 'drive-train-photos'} />

//                     <SavePage selected={this.state.selected === 'save-page'} QRCode={this.state.QRCode} />
//                 </form>
//             </main>
//         );   
        
//     }
// }


// export default App;
