import React, {useState} from 'react'

import {arr, arrL, arrP} from './Arr'
import Logic from './Logic'


export default function Button(props) {
  const [stateB, setStateB] = useState(false)

 
const clearArr = () => {
  props.setState([arr[0]])
  arrP[props.index] = arr[0]

  arr.shift()
  
  return arrP
  }
  
  const xO = () => arr[0] === 'x' ? 'red' : 'blue'
  
  const disabled = () => setStateB(!stateB)

  
  const hadleClick = () => {
    clearArr()
    disabled()
    Logic()
    xO()
    
  }

  return (
    <div className='bodyButton' >
      <button onClick={() => hadleClick()} disabled={stateB || Logic()} className='btn'>{props.stateArr}</button>
    </div>
  )
}