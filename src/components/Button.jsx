import React, {useState} from 'react'

import './Button.css'
import {arr} from './Arr'

export default function Button() {
const [state, setState] = useState([])

const clearArr = () => {

}

  return (
    <div className='bodyButton'>
      <button onClick={() => clearArr()}>{state}</button>
    </div>
  )
}