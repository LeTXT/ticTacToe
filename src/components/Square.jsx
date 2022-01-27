import React from 'react'

import './Square.css'
import Button from './Button'
import Logic from './Logic'

export default function Square() {
  console.log(Logic() + 'Square')

  return (
    <div className='bodySquare'>
      <div className='flexSquare' >
      <Button index={0} />
      <Button index={1} />
      <Button index={2} />
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
    </div>
  )
}