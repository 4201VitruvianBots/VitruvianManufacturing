import './App.css';
import React from 'react';

function App() {

  const [value,setValue] = React.useState(0)

  const actArray = []
  for(let i=0;i<4;i++){
    if (i===value){
      actArray.push('btn active')
    }
    else{
      actArray.push('btn')
    }
  }

  return (
    <div className="App">
      <ul style={{listStyle:'left', marginLeft:'30%'}}>
      <li style={{float:'left'}}><button type='button' className={actArray[8]} onClick={()=>{setValue(0)}}>Sign In</button></li>
        <li style={{float:'left'}}><button type='button' className={actArray[0]} onClick={()=>{setValue(1)}}>Drivetrain</button><h1></h1></li>
        <li style={{float:'left'}}><button type='button' className={actArray[1]} onClick={()=>{setValue(2)}}>Bumpers</button></li>
        <li style={{float:'left'}}><button type='button' className={actArray[2]}  onClick={()=>{setValue(3)}}>Elevator</button></li>
        <li style={{float:'left'}}><button type='button' className={actArray[3]} onClick={()=>{setValue(4)}}>Intake</button></li>
        <li style={{float:'left'}}><button type='button' className={actArray[4]} onClick={()=>{setValue(5)}}>Auxiliary Systems</button></li>
        <li style={{float:'left'}}><button type='button' className={actArray[5]} onClick={()=>{setValue(6)}}>Forebar</button></li>
        <li style={{float:'left'}}><button type='button' className={actArray[6]} onClick={()=>{setValue(7)}}>3D Print</button></li>
        <li style={{float:'left'}}><button type='button' className={actArray[7]} onClick={()=>{setValue(8)}}>Intake</button></li>



      </ul>
      <br/><br/>
      <div>
      </div>
    </div>
  );
}

export default App;