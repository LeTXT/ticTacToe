import React from 'react'

import {arr} from './Arr'
import Logic from './Logic'
import Reset from './Reset'

export default function Turn({turnState}) {
  

  const classnameT = () => turnSta() === 'x' ? 'red' : turnSta() === 'o' ? 'blue' : ''


  const arrWin = () => arr[0] === 'x' ? 'o' : arr[0] === 'o' ? 'x' : arr[0] === undefined ? 'x' : 'o'


  const turnSta = () => Logic() ? arrWin() : arr[0] === undefined ? 'Draw' : arr[0]
    

  const turnStr = () => Logic() ? 'Winner:' : arr[0] === undefined ? '' : 'Turn:'
  

    return (
        <div className='bodyTurn' >
          <h1>
            {turnStr()}
          </h1>
          <h3 className={classnameT()}>
            {turnSta() || turnState || Reset()}
          </h3>
        </div>
      )
}