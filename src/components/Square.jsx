import React, {useState, useEffect} from 'react'

import './Square.css'
import Button from './Button'
import Logic from './Logic'
import Turn from './Turn'

import {arr, arrL} from './Arr'

export default function Square() {
  const [stateG, setStateG] = useState()
 
  console.log(Button)
  

  return (
    <div className='bodySquare'>
      <div className='flexSquare' >
      <Button index={0}  setStateG={setStateG} />
      <Button index={1}  />
      <Button index={2}  />
      </div>
      <div className='flexSquare'>
      <Button index={3} />
      <Button index={4} />
      <Button index={5} />
      </div>
      <div className='flexSquare'>
      <Button index={6} />
      <Button index={7} />
      <Button index={8} />
      </div>
      <Turn turn={} state={} />
    </div>
  )
}