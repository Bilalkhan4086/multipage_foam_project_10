import React from "react";
import { MultipageForm } from './Multipage_Form'
import './App.css';


function App() {
  return (<div className="App">
    <div className='container'>
      <span style={{ color: "blue", fontSize: "24px" }}>Sign Up PIAIC</span>
      <span style={{ textAlign: 'left', margin: "0px" }}>
        <MultipageForm /></span>
    </div></div>
  );
}

export default App;
