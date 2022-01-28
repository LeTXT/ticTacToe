import React, {useState} from 'react'

import {arr, arrP} from './Arr'
import Logic from './Logic'
import Reset from './Reset'


export default function Button({index, setState, className, stateArr, setStateArr, state}) {
  const [stateB, setStateB] = useState(false)

  
const clearArr = () => {
  
  setState([arr[0]])
  arrP[index] = arr[0]

// setStateArr(arr[0])

  
//   setState(arr.shift())

  arr.shift()
  }
  
  
  const disabled = () => setStateB(!stateB)

   

  const hadleClick = () => {
    clearArr()
    disabled()
    Logic()
   
  }

//   const stateArrOn = () => !props.stateArr === undefined 

  return (
    <div className='bodyButton' >
      <button onClick={() => hadleClick()} disabled={stateArr || Logic()} className='btn'><h3 className={className}>{stateArr}</h3></button>
    </div>
  )
}