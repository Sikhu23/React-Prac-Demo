import React from 'react';
import ReactDOM from 'react-dom/client';

import {FirstClass} from './FirstS/FirstClass';
import  FirstClassDummy  from './FirstS/FirstClass';
import './index.css';
import FirstFunction, { FirstFunctionDummy } from './FirstS/FirstFunction';

import Puppy from './FirstS/Puppy'
import Div from './FirstS/Div';
import VariablesC from './SecondS/VariablesC';
import VariablesF from './SecondS/VariablesF';
import StateClass from './SecondS/StateClass';
import UseStateHook from './SecondS/UseStateHook';



 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseStateHook />
  </React.StrictMode>
);;


