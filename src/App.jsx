import React from "react";
import { useState } from "react";
var count=1;
const App=(props)=>{
    
    const[initial_data,final_data] =useState(count);

    const Increment=()=>{
        count++;
        final_data(count)
    }

    const Decrement=()=>{
        if(count>=1){
            count--;
            final_data(count)
        }
        
    }
return(
    <>
    <h1 style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'1rem'}}>{props.propsitm}</h1>
  <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'1rem'}}>
  <h1>{initial_data}</h1> </div>
 <button style={{marginLeft:'43.9rem',cursor:'pointer'}} onClick={Increment}>Incre</button>
    <button style={{marginLeft:'3rem',cursor:'pointer'}} onClick={Decrement}>Decre</button>
    
    </>
)

}

export default App