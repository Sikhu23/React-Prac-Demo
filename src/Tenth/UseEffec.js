//componentdidmount
// componentdidupdate
//componentWillUnMount




//useEffect()

import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import UseE from './UseE';
import UseStatees from './UseStatees';

export default function UseEffec() {




  return (
    <div>
        
    <Link to="/path">State</Link>
    <br>
    </br>
    <Link to="/path1">effect</Link>
    <Routes>
        <Route path="/path" element={<UseStatees/>} ></Route>
        <Route path="/path1" element={<UseE/>} ></Route>
    </Routes>
    </div>
  )
}
