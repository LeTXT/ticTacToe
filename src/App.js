import React from "react";
import "./style.css";

import Square from './components/Square'
import {arrP} from './components/Arr'


export default function App() {

  console.log(arrP)
  return (
    <div>
      <div className='flexSquare'>
      <Square submit={() => arrP[0].push(h)}/>
      <Square />
      <Square />
      </div>
      <div className='flexSquare'>
      <Square />
      <Square />
      <Square />
      </div>
      <div className='flexSquare'>
      <Square />
      <Square />
      <Square />
      </div>
    </div>
  );
}
