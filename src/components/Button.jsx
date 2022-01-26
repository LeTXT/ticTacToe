import React, {useState} from 'react'

import './Button.css'
import {arr, arrP} from './Arr'

export default function Button(props) {
const [state, setState] = useState([])
const [stateB, setStateB] = useState(false)

const clearArr = () => {
setState([arr[0]])
arr.shift()
return state
}

const disabled = () => setStateB(!stateB)

const hadleClick = () => {
  clearArr()
  disabled()
}

  return (
    <div className='bodyButton'>
      <button onClick={() => hadleClick()} disabled={stateB} submit={props.submit}><h3>{state}</h3></button>
    </div>
  )
}