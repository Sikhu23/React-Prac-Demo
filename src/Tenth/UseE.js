
import React, { useEffect, useState } from 'react'

function UseE() {
    
    let [value,setValue] = useState(0);
    let [value1,setValue1] = useState(0);





useEffect(()=>{
    console.log("Use Effect with no 2nd parameter")
    

})


useEffect(()=>{
    console.log("Use Effect with  empty parameter")
    return ()=>alert("unmount with empty parameter ")

},[])

useEffect(()=>{
    console.log("Use Effect with  1 parameter")
        

},[value])




  return (
    <div>
            <h1>UseEffect in Functions</h1>
    <p>Value --- {value}</p>
    <p>Value1  --- {value1}</p>
    <button onClick={()=>setValue(value+1)}>value</button>
    <button onClick={()=>setValue1(value1+1)}>value1</button>
        </div>
  )
}

export default UseE