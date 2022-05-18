import React, { Component } from 'react'

export default class Mount extends Component {
    constructor(){
        super();

        this.state={value:0}
        console.log("constructor")
    }
     
    componentDidMount(){
        console.log("componentDidMount")
    }

    shouldComponentUpdate(np,ns){
        console.log("shouldComponentUpdate",ns);
        
        return ns.value>5?true:false;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    componentWillUnmount(){
        alert("i m unmunting")
    }

    
  render() {
    return (
      <div>
          {console.log("render")}
          <h2> Mounting phase</h2>
          <p> Value {this.state.value}</p>
          <button onClick={()=>this.setState({value:this.state.value+1})}>Counter   </button>
          <a href="www.google.com">fghjk</a>
      </div>
    )
  }
}
