
import React, { useState } from 'react'

export default function UseStatees() {

    let [value,setValue] = useState({name:"Senil"});

 


  return (
    <div>
        <h1> Hooks in Function</h1>
        <p>Value  {value.name}</p>
        <button onClick={
            ()=>{
               
                 setValue(value+1)
                 console.log("Value is "+value)
            }
        }>Chnge</button>


    </div>
  )
}
