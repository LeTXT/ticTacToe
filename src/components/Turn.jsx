import React, {useState} from 'react'
import {arrL} from './Arr'

export default function Turn() {
  const [state] = useState(arrL)

  const xO = () => state[0] === 'x' ? 'red' : 'blue'

  return (
    <div>
      {state}
    </div>
  )
}