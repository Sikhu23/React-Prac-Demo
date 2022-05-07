import React, { Component } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'

export default class Msin extends Component {
  render() {
    return (
      <div>
          
          <h1>Main COmponent</h1>

          <Link to="/home">Home</Link>
          <br/>
          <Link to="/about">About</Link>

          <Routes>
              <Route path="/home" element={<Home/>}></Route>
              <Route path="/about" element={<About/>}></Route>
          </Routes>
      </div>
    )
  }
}
