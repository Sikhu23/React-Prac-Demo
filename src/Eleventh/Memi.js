import React, { useMemo, useState } from 'react'

export default function Memi() {

    let [data,setData]=useState(0);
    let [data1,setData1]=useState(1);

    // let value=()=>{
    //     console.log("Value func ran")
    //     return  data1*100
    // }


    let value= useMemo(()=>{
             console.log("Value func ran")
             return  data1*100
        },[data1])


  return (
    <div>
        <h1>UseMemo in React</h1>
        <p>data- {data}</p>
        <p>data1- {data1}</p>
        <p>{value}</p>
        <button onClick={()=>setData(data+1)}>Data</button>
        <button onClick={()=>setData1(data1+1)}>Data1</button>
    </div>
  )
}
