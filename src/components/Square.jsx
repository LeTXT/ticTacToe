import React, {useState} from 'react'

import Turn from './Turn'
import Button from './Button'
import Reset from './Reset'
import Ai from './Ai'

import {arr, arrP} from './Arr'

export default function Square() {
  const [state, setState] = useState(arr)
  const [stateArr, setStateArr] = useState(arrP)
  const [stateTF, setStateTF] = useState()

 
  const reset = () => {
    arrP.splice(0)

    arr.splice(0)
    arr.push('x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x')

    setStateArr(arrP)
    setState('x')
    

    return true
  }


  const classname = (e) => stateArr[e] === 'x' ? 'red' : 'blue'


  return (
    <div className='bodySquare'>
      <div className='flexSquare'>
        <Button index={0} stateArr={stateArr[0]} state={state} setState={setState} setStateArr={setStateArr} stateArrs={stateArr} className={classname(0)}/>

        <Button index={1} stateArr={stateArr[1]} state={state} setState={setState} setStateArr={setStateArr} stateArrs={stateArr} className={classname(1)}/>

        <Button index={2} stateArr={stateArr[2]} state={state} setState={setState} setStateArr={setStateArr} stateArrs={stateArr} className={classname(2)}/>
      </div>
      <div className='flexSquare'>
        <Button index={3} stateArr={stateArr[3]} state={state} setState={setState} setStateArr={setStateArr} stateArrs={stateArr} className={classname(3)}/>

        <Button index={4} stateArr={stateArr[4]} state={state} setState={setState} setStateArr={setStateArr} stateArrs={stateArr} className={classname(4)}/>

        <Button index={5}  stateArr={stateArr[5]}  state={state} setState={setState} setStateArr={setStateArr} stateArrs={stateArr} className={classname(5)}/>
      </div>
      <div className='flexSquare'>
        <Button index={6} stateArr={stateArr[6]} state={state} setState={setState} setStateArr={setStateArr} stateArrs={stateArr} className={classname(6)}/>

        <Button index={7} stateArr={stateArr[7]} state={state} setState={setState} setStateArr={setStateArr} stateArrs={stateArr} className={classname(7)}/>

        <Button index={8} stateArr={stateArr[8]} state={state} setState={setState} setStateArr={setStateArr} stateArrs={stateArr} className={classname(8)}/>
      </div>
     
      
      <Turn  turnState={state[0]}/>

      <div className='flex-btn'>
      <Reset reset={() => reset()}/>
      <Ai stateArr={stateArr} setStateArr={setStateArr} setState={setState}/>
      </div>
      
    </div>
  )
}