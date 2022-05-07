import React, { Component } from 'react'

export default class About extends Component {
    constructor(){
        super()
        console.log("About Constructor")
    }

    componentDidMount(){
        console.log("About componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("About shouldComponentUpdate")
        return true;
    }

    componentDidUpdate(){
        console.log("About componentDidUpdate") 
    }

    componentWillUnmount(){
        console.log("About componentWillUnmountS")
    }
  render() {
    return (

      <div>
          {console.log("About Render Start")}
          
          <h1>ABout</h1>
          {console.log("About Render end")}
          </div>
          
    )
  }
}
