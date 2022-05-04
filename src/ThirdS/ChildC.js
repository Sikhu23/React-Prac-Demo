import React, { Component } from 'react'

export default class ChildC extends Component {
   
  render() {
    return (
      <div>
          <h1> CHild starts with Class</h1>
          
        value is value1 :- {this.props.senil.value1}
        <br/>
        value is value2 :- {this.props.senil.value2}
        <br/>
        value is a :- {this.props.senil1}
        <p> Add--  {this.props.senil.value1+this.props.senil.value2} </p>
        <p> Subs--  {this.props.senil.value1-this.props.senil.value2} </p>
        <p> Mul--  {this.props.senil.value1*this.props.senil.value2} </p>
        <p> Div--  {this.props.senil.value1/this.props.senil.value2} </p>
       
      </div>
    )
  }
}
