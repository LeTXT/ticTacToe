import React, {useState} from 'react'

import './Button.css'
import {arr, arrP} from './Arr'



export default function Button(props) {
const [state, setState] = useState([])
const [stateB, setStateB] = useState(false)

const clearArr = () => {
setState([arr[0]])
arrP[props.index] = arr[0]
arr.shift()
return state
}
console.log(arrP)

if(arrP[0] === arrP[1] && arrP[1] === arrP[2] && arrP[0] === arrP[2] && arrP[0] !== undefined) {
  console.log('ganhou')
} else if (arrP[3] === arrP[4] && arrP[4] === arrP[5] && arrP[3] === arrP[5] && arrP[3] !== undefined) {

} else if (arrP[6] === arrP[7] && arrP[7] === arrP[8] && arrP[6] === arrP[8] && arrP[6] !== undefined) {

} else if (arrP[0] === arrP[4] && arrP[4] === arrP[8] && arrP[0] === arrP[8] && arrP[0] !== undefined) {

} else if (arrP[2] === arrP[4] && arrP[4] === arrP[6] && arrP[2] === arrP[6] && arrP[2] !== undefined) {
  
} 

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