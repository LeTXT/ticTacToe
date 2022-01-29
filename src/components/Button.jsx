import React, {useState} from 'react'

import {arr, arrP} from './Arr'
import Logic from './Logic'
import Ai from './Ai'


export default function Button({index, setState, className, stateArr, setStateArr, state, setStateAi, stateAi}) {
  const [stateB, setStateB] = useState(false)

  
const clearArr = () => {
  
  setState([arr[0]])
  arrP[index] = arr[0]

// setStateArr(arr[0])

  
//   setState(arr.shift())

  arr.shift()
  }
  
  const aiOn = () => setStateAi(true)
  const disabled = () => setStateB(!stateB)

   

  const hadleClick = () => {
    clearArr()
    disabled()
    Logic()
    aiOn()
    
  }


//   const stateArrOn = () => !props.stateArr === undefined 

  return (
    <div className='bodyButton' >
      <button onClick={() => hadleClick()} disabled={stateArr || Logic()} className='btn'><h3 className={className}>{stateArr}</h3></button>
    </div>
  )
}