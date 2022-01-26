import React, {useState} from "react";
import "./style.css";

import Square from './components/Square'
import Logic from './components/Logic'
import {arrL, arr} from './components/Arr'


export default function App() {
  // const [stateB, setStateB] = useState(false)

  // const disabledF = () => setStateB(!stateB)
  const stopGame = () => arr[0] === undefined 
  
  return (
    <div>
      <div className='flexSquare' >
      <Square index={0} onClick={false} disabled={stopGame()} />
      <Square index={1} disabled={stopGame()}/>
      <Square index={2} disabled={stopGame()}/>
      </div>
      <div className='flexSquare'>
      <Square index={3} disabled={stopGame()}/>
      <Square index={4} disabled={stopGame()}/>
      <Square index={5} disabled={stopGame()}/>
      </div>
      <div className='flexSquare'>
      <Square index={6} disabled={stopGame()}/>
      <Square index={7} disabled={stopGame()}/>
      <Square index={8} disabled={stopGame()}/>
      </div>
      <Logic />
    </div>
  );
}
