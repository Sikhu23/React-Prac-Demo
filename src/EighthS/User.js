import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    let {name1,id} = useParams();
    // let {name1}=useParams();

   
  return (
    <div>Hi {name1}   {id} </div>
  )
}

export default User