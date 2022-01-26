import React, {useState} from "react";
import "./style.css";

import Square from './components/Square'
import Logic from './components/Logic'
import {arrL, arr} from './components/Arr'


export default function App() {
  // const [stateB, setStateB] = useState(false)

  // const disabledF = () => setStateB(!stateB)
  const stopGame = () => arr === [] 
  
  return (
    <div>
      <div className='flexSquare' >
      <Square index={0} onClick={false} disabled={stopGame()} />
      <Square index={1}/>
      <Square index={2}/>
      </div>
      <div className='flexSquare'>
      <Square index={3}/>
      <Square index={4}/>
      <Square index={5}/>
      </div>
      <div className='flexSquare'>
      <Square index={6}/>
      <Square index={7}/>
      <Square index={8}/>
      </div>
      <Logic />
    </div>
  );
}
