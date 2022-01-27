import React, {useState} from 'react'


import Logic from './Logic'
import Turn from './Turn'
import Button from './Button'

import {arr, arrL, arrP} from './Arr'

export default function Square() {
  const [state, setState] = useState()

  const arrT = () => arr[0] === 'x' ? <h3 className='red'>x</h3> : <h3 className='blue'>o</h3> 

  const arrWin = () => arr[1] === 'x' ? <h1 className='red'>x</h1> : <h1 className='blue'>o</h1> 

  const h1 = <h1 className='h1'>O {arrWin()} venceu!</h1>

  const turnState = () => Logic() ? h1 : arr[0] === undefined ? 'Empate' : arrT()
    

  const turnStr = () => Logic() ? '' : arr[0] === undefined ? '' : 'Turno do'


  const arrPrb = (e) => arrP[e] === 'x' ? <h3 className='red'>x</h3> : arrP[e] === 'o' ? <h3 className='blue'>o</h3> : undefined

  return (
    <div className='bodySquare'>
      <div className='flexSquare'>
        <Button index={0} stateArr={arrPrb(0)} state={state} setState={setState} />
        <Button index={1} stateArr={arrPrb(1)} state={state} setState={setState} />
        <Button index={2} stateArr={arrPrb(2)} state={state} setState={setState} />
      </div>
      <div className='flexSquare'>
        <Button index={3} stateArr={arrPrb(3)} state={state} setState={setState} />
        <Button index={4} stateArr={arrPrb(4)} state={state} setState={setState} />
        <Button index={5} stateArr={arrPrb(5)} state={state} setState={setState} />
      </div>
      <div className='flexSquare'>
        <Button index={6} stateArr={arrPrb(6)} state={state} setState={setState} />
        <Button index={7} stateArr={arrPrb(7)} state={state} setState={setState} />
        <Button index={8} stateArr={arrPrb(8)} state={state} setState={setState} />
      </div>
     
      
      <Turn turn={turnStr()} state={turnState()} />
    </div>
  )
}
