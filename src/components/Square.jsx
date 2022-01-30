import React, {useState} from 'react'

import Turn from './Turn'
import Button from './Button'
import Reset from './Reset'
import LauritaAi from './AiLau'

import {arr, arrP} from './Arr'

export default function Square() {
  const [state, setState] = useState(arr)
  const [stateArr, setStateArr] = useState(arrP)
  const [stateAi, setStateAi] = useState(false)

 
  const reset = () => {
    arrP.splice(0)

    arr.splice(0)
    arr.push('x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x') 

    setStateArr(arrP)
    setState('x')
    

    return true
  }

  const classname = (e) => stateArr[e] === 'x' ? 'red' : 'blue'

  const borderBottom = () => 'border-bottom btn'
  const borderTop = () => 'border-top btn'
  const borderLRB = () => 'border-lr btn border-bottom'
  const borderLRT = () => 'border-lr btn border-top'
  const borderLR = () => 'border-lr btn'
  const btn = () => 'btn'

  return (
    <div className='bodySquare'>
      <div className='flexSquare'>
      <Button index={0} stateArr={stateArr[0]} state={state} setState={setState} setStateArr={setStateArr} stateArrs={stateArr} setStateAi={setStateAi} stateAi={stateAi} className={classname(0)} btnBorder={borderBottom()}/>

      <Button index={1} stateArr={stateArr[1]} state={state} setState={setState} setStateArr={setStateArr} stateArrs={stateArr} setStateAi={setStateAi} stateAi={stateAi} className={classname(1)} btnBorder={borderLRB()}/>

      <Button index={2} stateArr={stateArr[2]} state={state} setState={setState} setStateArr={setStateArr} stateArrs={stateArr} setStateAi={setStateAi} stateAi={stateAi} className={classname(2)} btnBorder={borderBottom()}/>
</div>
<div className='flexSquare'>
      <Button index={3} stateArr={stateArr[3]} state={state} setState={setState} setStateArr={setStateArr} stateArrs={stateArr} setStateAi={setStateAi} stateAi={stateAi} className={classname(3)} 
      btnBorder={btn()}/>

      <Button index={4} stateArr={stateArr[4]} state={state} setState={setState} setStateArr={setStateArr} stateArrs={stateArr} setStateAi={setStateAi} stateAi={stateAi} className={classname(4)} btnBorder={borderLR()}/>

      <Button index={5}  stateArr={stateArr[5]}  state={state} setState={setState} setStateArr={setStateArr} stateArrs={stateArr} setStateAi={setStateAi} stateAi={stateAi} className={classname(5)} 
      btnBorder={btn()}/>
</div>
<div className='flexSquare'>
      <Button index={6} stateArr={stateArr[6]} state={state} setState={setState} setStateArr={setStateArr} stateArrs={stateArr} setStateAi={setStateAi} stateAi={stateAi} className={classname(6)} btnBorder={borderTop()}/>

      <Button index={7} stateArr={stateArr[7]} state={state} setState={setState} setStateArr={setStateArr} stateArrs={stateArr} setStateAi={setStateAi} stateAi={stateAi} className={classname(7)} btnBorder={borderLRT()}/>

      <Button index={8} stateArr={stateArr[8]} state={state} setState={setState} setStateArr={setStateArr} stateArrs={stateArr} setStateAi={setStateAi} stateAi={stateAi} className={classname(8)} btnBorder={borderTop()}/>
      </div>
     
      
      <Turn  turnState={state[0]}/>

      <div className='flex-btn'>
      <Reset reset={() => reset()}/>
      <LauritaAi stateArr={stateArr} setStateArr={setStateArr} setState={setState} setStateAi={setStateAi} stateAi={stateAi}/>
      </div>
      
    </div>
  )
}