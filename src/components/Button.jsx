import React, {useState} from 'react'

import './Button.css'
import {arr, arrP, arrL} from './Arr'
import Logic from './Logic'



export default function Button(props) {
const [state, setState] = useState([])
const [stateB, setStateB] = useState(false)

const clearArr = () => {
setState([arr[0]])
arrP[props.index] = arr[0]
arrL[0] = arr[0]
arr.shift()
return state
}
console.log(arrP)

Logic()

const disabled = () => setStateB(!stateB)

const handleState = () => {
  props.handleStateL
}

const hadleClick = () => {
  clearArr()
  disabled()
  handleState()
}

  return (
    <div className='bodyButton'>
      <button onClick={() => hadleClick()} disabled={stateB} ><h3>{state}</h3></button>
    </div>
  )
}