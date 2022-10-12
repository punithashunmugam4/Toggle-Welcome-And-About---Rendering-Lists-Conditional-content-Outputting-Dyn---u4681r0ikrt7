import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [style1,setstyle1]=useState({display:"block"})
  const [style2,setstyle2]=useState({display:"none"})
  const handleClick=event=>{
    switch (event.detail) {
      case 1: {
        console.log('single click');
        setstyle1({display:"none"})
        setstyle2({display:"block"})
        break;
      }
      case 2: {
        console.log('double click');
        setstyle1({display:"block"})
       setstyle2({display:"none"})
        break;
      }
      case 3: {
        console.log('triple click');
        setstyle1({display:"block"})
        setstyle2({display:"none"})
        break;
      }
      default:{
        setstyle1({display:"block"})
       setstyle2({display:"none"})
      }
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
      <button id="toggle" onClick={handleClick}>Toggle</button>
    </div>
  );
};

export default App
