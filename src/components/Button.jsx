import React, {useState} from 'react'

import './Button.css'
import {arr, arrL, arrP} from './Arr'
import Logic from './Logic'


export default function Button(props) {
  const [stateB, setStateB] = useState(false)

 
const clearArr = () => {
  props.setState([arr[0]])
  arrP[props.index] = arr[0]
  arr === undefined? arrL[0] : arrL[0] = arr[0]
  arr.shift()
  
  return arrP
  }
  
  const xO = () => arr[0] === 'x' ? 'red' : 'blue'; 
  
  const disabled = () =>  setStateB(!stateB)

  
  // const index = (e) => arrP[e]
  
  const hadleClick = () => {
    clearArr()
    disabled()
    Logic()
    xO()
    console.log('oi')
  }

  return (
    <div className='bodyButton' >
      <div onClick={() => hadleClick()} disabled={stateB} className='btn'><h3 className={xO()} >{props.stateArr}</h3></div>
    </div>
  )
}

// export default function Button({stateB, onclick, classname, stateArr }) {

//   return (
    
//   )
// }