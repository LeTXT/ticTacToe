import React, {useState} from 'react'

import './Button.css'
import {arr} from './Arr'

export default function Button() {
const [state, setState] = useState([])
const [stateB, setStateB] = useState(false)

const clearArr = () => {
setState([...state, arr[0]])
arr.shift()
return state[0]
}

const disabled = () => setStateB(!stateB)

const hadleClick = () => {
  clearArr()
  disabled()
}

  return (
    <div className='bodyButton'>
      <button onClick={() => hadleClick()} disabled={stateB}><h3>{state}</h3></button>
    </div>
  )
}