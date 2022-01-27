import React, {useState} from "react";
import "./style.css";

import Square from './components/Square'
import Logic from './components/Logic'
import {arrL, arr} from './components/Arr'
import Turn from './components/Turn'


export default function App() {
  
  return (
    <div>
      <div className='flexSquare' >
      <Square />
      </div>
    </div>
  );
}
