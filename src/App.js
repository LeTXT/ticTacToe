import React from "react";
import "./style.css";

import Square from './components/Square'


export default function App() {
  return (
    <div>
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
      <div className='flexSquare'>
      <Square />
      <Square />
      <Square />
      </div>
    </div>
  );
}
