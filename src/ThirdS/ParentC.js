//calculator


import React, { Component } from 'react'
import ChildC from './ChildC';
import ChildF from './ChildF';

export default class ParentC extends Component {
    constructor(){
        super();
        this.state={value1:0,value2:0}

    }

    value1get=()=>{
        this.setState({value1:10})
    }
    value2get=()=>{
        this.setState({value2:5})
    }
    check=()=>{
        console.log(this.state)
    }

  render() {
    return (
      <div style={{textAlign:"center"}}>
          <h1>Parent</h1>
          <p> Choose 2 numbers</p>


          <input type="number"  ></input>
          <button onClick={this.value1get}>Value1</button>


          <input type="number" ></input>
          <button onClick={this.value2get}>Value2</button>


          <button onClick={this.check}>Check</button>
          <hr/>
          <ChildF senil={this.state}/>
          <hr/>
          <ChildC senil={this.state}/>
      </div>
    )
  }
}
