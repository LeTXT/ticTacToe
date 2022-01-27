import React, {useState, useEffect} from 'react'

import './Square.css'
import Button from './Button'
import Logic from './Logic'
import Turn from './Turn'

import {arr, arrL, arrP} from './Arr'

export default function Square() {
  const [stateG, setStateG] = useState()
 
  

  return (
    <div className='bodySquare'>
      <div className='flexSquare' >
      <Button index={0}   stateArr={arrP[0]} />
      <Button index={1}   stateArr={arrP[1]}/>
      <Button index={2}   stateArr={arrP[2]}/>
      </div>
      <div className='flexSquare'>
      <Button index={3}  stateArr={arrP[3]}/>
      <Button index={4}  stateArr={arrP[4]}/>
      <Button index={5}  stateArr={arrP[5]}/>
      </div>
      <div className='flexSquare'>
      <Button index={6}  stateArr={arrP[6]}/>
      <Button index={8}  stateArr={arrP[8]}/>
      <Button index={7}  stateArr={arrP[7]}/>
      </div>
      <Turn turn={} state={} />
    </div>
  )
}