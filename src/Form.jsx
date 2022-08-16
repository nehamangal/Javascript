import React from "react";
import { useState } from "react";
var data="";
const Form=()=>{
    const [current,update] = useState(" ");

const inputevent=(e)=>{
   console.log(e.target.value);
   console.log(e.target.name);
   data = e.target.value
   
}
const clicked=()=>{
    update(data)
    
}

return(
<>
  <h1>My name is {current} </h1>
  
    <div style={{display:'flex',justifyContent:'center',alignItem:'center',cursor:'pointer'}}>
    <input onChange={inputevent} type="text" name="fname" placeholder="Enter your name"/>

    <button onClick={clicked}>Submit</button>
    </div>
  
</>
)
}


export default Form

