import React, { useState } from 'react'

function UseStateHook() { 

    let [count,setCount]=useState({v:1,i:2});
    let [val,setval]=useState(100);
  return (
    <div>
        {console.log("render")}
        <p>Use State</p>
        <p> Count: {count}</p>
        <p> Val: {val}</p>
        <button onClick={()=>setCount(0)}>Click</button>
    </div>
  )
}

export default UseStateHook