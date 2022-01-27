import React, {useState, useEffect} from 'react'

import './Square.css'
import Button from './Button'
import Logic from './Logic'
import Turn from './Turn'

import {arr} from './Arr'

export default function Square() {
  const [ state, setState ] = useState(arr[0])

  useEffect(() => {
    setState(arr[0])
  })

  return (
    <div className='bodySquare'>
      <div className='flexSquare' >
      <Button index={0}  />
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
      <Turn turn={} state={state} />
    </div>
  )
}