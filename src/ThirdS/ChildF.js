import React from 'react'

export default function ChildF (props){
   
 
    return (
      <div>
          <h1> CHild starts with Function</h1>
          
        value is value1 :- {props.senil.value1}
        <br/>
        value is value2 :- {props.senil.value2}
        <p> Add--  {props.senil.value1+props.senil.value2} </p>
        <p> Subs--  {props.senil.value1-props.senil.value2} </p>
        <p> Mul--  {props.senil.value1*props.senil.value2} </p>
        <p> Div--  {props.senil.value1/props.senil.value2} </p>
       
      </div>
    )
  }

