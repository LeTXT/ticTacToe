import React, {useState} from 'react'

import {arr, arrP} from './Arr'
import Logic from './Logic'



export default function Button({index, setState, className, stateArr,setStateAi, btnBorder}) {
  const [stateB, setStateB] = useState(false)

  
const clearArr = () => {
  
  setState([arr[0]])
  
  arrP[index] = arr[0]

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


 

  return (
    <div className='bodyButton' >
      <button onClick={() => hadleClick()} disabled={stateArr || Logic()} className={btnBorder}><h3 className={className}>{stateArr}</h3></button>
    </div>
  )
}