import React, { Component } from 'react'
import Child from './Child'

export default class MountingClass extends Component { 
    constructor(){
    super()
    console.log("constrcutor parent")
}

    render() {
        return (
          <div>
              {console.log("render parent start")}
              <p> Mounting</p>
              <Child/>
              {console.log("render parent ends ")}
          </div>
        )
      }

      componentDidMount(){
        
          
          console.log("componentDidMount parent")
         
      }

   

}
