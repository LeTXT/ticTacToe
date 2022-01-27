import React, {useState, useEffect} from 'react'

import {arr} from './Arr'

export default function Turn(props) {

  // const [state, setState] = useState(arr[0])

  // useEffect(() => {
  //   setState(arr[0])
  // }, [arr])

  return (
    <div className='bodyTurn'>
      <h1>
        Vez do
      </h1>
      <h3>
        {props.state}
      </h3>
      
    </div>
  )
}

