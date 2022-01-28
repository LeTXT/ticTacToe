import React from 'react'

import {arr} from './Arr'
import Logic from './Logic'
import Reset from './Reset'

export default function Turn({turnState}) {
  

  const classnameT = () => Logic() ? '' : arr[0] === 'x' ? 'red' : arr[0] === 'o' ? 'blue' : ""

  const arrWin = () => arr[1] === 'x' ? <h1 className='red'>x</h1> : <h1 className='blue'>o</h1> 

  const h1 = <h1 className='h1'> Win!</h1>

  const turnSta = () => Logic() ? h1 : arr[0] === undefined ? 'Draw' : arr[0]
    

  const turnStr = () => Logic() ? arrWin() : arr[0] === undefined ? '' : 'Turn:'
  
  

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

