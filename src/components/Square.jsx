import React from 'react'

import './Square.css'
import Button from './Button'
import {arrL} from './Arr'

export default function Square(props) {


  return (
    <div className='bodySquare'>
      <Button index={props.index} disabled={props.disabled} disabledF={props.disabledF}/>
    </div>
  )
}