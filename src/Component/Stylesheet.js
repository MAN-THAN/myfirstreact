import React from "react";
import "./style.css"

function Stylesheet(){
    return (
        <>
        <div className="box"></div>
        <h1 className="heading">Styling Using Functional & Class Components</h1>
        <button id="bt1">To see styling in Functional Component</button>
        <button id="bt2"><b id="txt1">This is Created using Functional Component</b><p id="para2">This is done using external css</p><p style={{color:"red"}}>This is done using inline css</p></button>

        </>
    )
}
export default Stylesheet
