import React, { Component } from 'react'

export default class VariablesC extends Component {
  
   
  x="Senil";

 
  
  render() {
    
    return (
      <div style={{textAlign:"center"}}>
          <h1>VariablesC</h1>
          <p>Hardcoded :- Senil</p>
          <p>Variable :- {this.x}</p>
          
          
      </div>
    )
  }
}
