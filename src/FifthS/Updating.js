import React, { Component } from 'react'

export default class Updating extends Component {

    constructor(){
        super();

        this.state={name:0}
        console.log("constructor")
    }

      

    componentDidMount(){
        console.log("componentDidMount")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate ",this.state.name,nextState);
       
        return nextState.name<4 ||  nextState.name>18? true:false
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

  render() {
    return (
      <div>
          {console.log("render")}
          <h1> Mounting and Updating</h1>
          <p>Name :- {this.state.name}</p>
          <button onClick={()=>this.setState({name:this.state.name+1})}>Click</button>
      </div>
    )
  }
}
