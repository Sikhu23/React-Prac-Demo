import React from 'react';
import ReactDOM from 'react-dom/client';

import {FirstClass} from './FirstS/FirstClass';
import  FirstClassDummy  from './FirstS/FirstClass';
import './index.css';
import FirstFunction, { FirstFunctionDummy } from './FirstS/FirstFunction';

import Puppy from './FirstS/Puppy'
import Div from './FirstS/Div';



 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Div />
  </React.StrictMode>
);;


