import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Aravinthan from './Aravinthan'
import Common from './Common'
import Error from './Error'
import Nikhil from './Nikhil'
import Senil from './Senil'

export default class Home extends Component {
  render() {
    return (
      <div>
          
          <Link to="/aravinthan">Aravithan</Link>
          <br/>
          <Link to="/nikhil">Nikhil</Link>
          <br/>
          <Link to="/senil">Senil</Link>    
          <br/>
          <Link to="/">Common</Link>  
          <br/>
          
          <a href='/senil'>dtryghjkml</a>


          <Routes>
            <Route path='*' element={<Error/>}></Route>
              <Route path='/' element={<Common/>}></Route>
              <Route path='/aravinthan' element={<Aravinthan/>}></Route>
              <Route path='/nikhil' element={<Nikhil/>}></Route>
              <Route path='/senil' element={<Senil/>}></Route>                  
         </Routes>      
         
         
       
        
      </div>
    )
  }
}
