import React, { Component } from 'react'

export default class StateClass extends Component {

    constructor(){
        super();
        this.state={val:"100 white" , count:0}
        

    }

    name="Senil"
    
    

    fun=()=>{
        // console.log("name is before chnge ", this.state.name)
        // this.name="Hitha";
        // console.log("name is after chnge ", this.name)
        this.setState({name:this.state.name})
        
    }
  render() {
    return (
      <div style={{textAlign:"center"}}>
          {console.log("render value", this.state.name)}
          
          <h1> State in Class</h1>
          <p> {this.state.name}</p>
          <button onClick={this.fun}> CLick</button>
      </div>
    )
  }
}
