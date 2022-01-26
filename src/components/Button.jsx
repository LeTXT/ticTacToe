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
console.log()


const xO = () => state[0] === 'x' ? 'red' : 'blue'

const disabled = () => setStateB(!stateB)
const stopGame = () => arr === [undefined]

console.log(stopGame())

const hadleClick = () => {
  clearArr()
  disabled()
  props.disabledF
  stopGame()
  Logic()
  xO()
}

  return (
    <div className='bodyButton'>
      <button onClick={() => hadleClick()} disabled={stateB || stopGame() || props.disabled} ><h3 className={xO()} >{state}</h3></button>
    </div>
  )
}