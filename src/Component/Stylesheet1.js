import React from "react";
import "./style1.css"

class Heading extends React.Component{
    render(){
        return(
        <>
        <button id="bt3">To see styling in Class Component</button>
        <button id="bt4"><b id="txt1">This is Created using Class Component</b><p  id="para1">This is done using external css</p><p style={{color:"red"}}>This is done using inline css</p></button>

        </>
        )
    }
} 
export default Heading;