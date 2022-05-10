import React, { Component } from 'react'

export default class Child extends Component {

    render() {
        return (
          <div>
              
              {console.log("render child start")}
              <p> Mounting</p>
              <p></p>
              {console.log("render child ends")}
          </div>
        )
      }

      componentDidMount(){
          
          console.log("componentDidMount child")
       
      }

    constructor(){
        super()
        console.log("constrcutor child")
    }

}
