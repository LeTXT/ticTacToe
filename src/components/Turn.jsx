import React, {useState, useEffect} from 'react'

import {arr} from './Arr'
import Button from './Button'

export default function Turn({turn, state}) {

Button()
  

  return (
    <div className='bodyTurn' >
      <h1>
        {turn}
      </h1>
      <h3>
        {state}
      </h3>
    </div>
  )
}

