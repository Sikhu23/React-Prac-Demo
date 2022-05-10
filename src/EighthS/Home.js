import React, { Component } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import User from './User';

export default class Home extends Component {

    constructor(){
        super();
        this.users=[
        {id:1,name:"Natsu",anime:"Fairy Tail"},
        {id:2,name:"Goku",anime:"DBZ"},
        {id:3,name:"Naruto",anime:"Naruto Shippuden"},
        {id:4,name:"Ichigo",anime:"Bleach"},
        {id:5,name:"Asta",anime:"Black Clover"},
        {id:15,name:"Yuno",anime:"Black Clover"}
    ]

    for(let i=0;i<6;i++){
        console.log("tfyguh")
    }
    }

  render() {
    return (
      <div>
          <h3> Hi this is Class Component , HOME</h3>
          {this.users.map(user=>{
              return(
                <div key={user.id}>
                <Link to={"/user/"+user.id+"/"+user.name}>{user.name}</Link>
            </div>
              )
              
          })}
          <Routes>
              <Route path='/user/:id/:name1' element={<User/>}></Route>
          </Routes>

         
      </div>
       
    )
  }
}
