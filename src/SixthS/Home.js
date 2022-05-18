import React, { Component } from 'react'

export default class Home extends Component {

    constructor(){
        super()
        console.log("Home Constructor")
        // this.newf="";
    }

    componentDidMount(){
        console.log("Home componentDidMount")
        //  this.newf=setInterval(()=>{
        //     console.log("1");

        // },1000)

       
    }

    shouldComponentUpdate(){
        console.log("Home shouldComponentUpdate")
        return true;
    }

    componentDidUpdate(){
        console.log("Home componentDidUpdate") 
    }

    componentWillUnmount(){
        console.log("Home componentWillUnmountS")
        // clearInterval(this.newf)
    }
  render() {
    return (
      <div>
          {console.log("Home render start")}
          <h1> Home </h1>
          {console.log("Home render ends")}
          
      </div>
    )
  }
}
