import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [style1,setstyle1]=useState({display:"block"})
  const [style2,setstyle2]=useState({display:"none"})
  const display=()=>{
    if(style1.display==="block"){
      setstyle1({display:"none"})
      setstyle2({display:"block"})
    }
    else{
      setstyle1({display:"block"})
      setstyle2({display:"none"})
    }
    }
  return (
    <div id="main">
      <div id="welcome-div" style={style1}>
        <h1>Welcome to Newton School!!</h1>
      </div>
      <div id="about-div" style={style2}>
        <h1>
          Newton School is a neo-university providing highly immersive tech
          learning to millions of students, to tap into new-age tech
          opportunities.
        </h1>
      </div>
      <button id="toggle" onClick={display}>Toggle</button>
    </div>
  );
};

export default App;
