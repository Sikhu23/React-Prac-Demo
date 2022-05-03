import React, { useState } from 'react'

function UseStateHook() { 

    let [count,setCount]=useState(0);
  return (
    <div>
        {console.log("render")}
        <p>Use State</p>
        <p> Count: {count}</p>
        <button onClick={()=>setCount(0)}>Click</button>
    </div>
  )
}

export default UseStateHook