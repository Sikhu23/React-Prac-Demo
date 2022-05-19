import React, { useRef } from 'react'

export default function Ref() {

    let val = useRef(null);

    let fun1=()=>{
     console.log(val.current.value)
    }
  return (
    <div>
        
        <h1>UseRef in React</h1>
        <input type ="text" id="in" ref={val}/>
        <button onClick={fun1}>Get Value</button>
    </div>
  )
}
