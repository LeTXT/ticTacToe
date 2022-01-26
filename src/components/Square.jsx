import React from 'react'

import './Square.css'
import Button from './Button'

export default function Square(props) {

  return (
    <div className='bodySquare'>
      <Button index={props.index}/>
    </div>
  )
}