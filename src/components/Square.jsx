import React, {useState, useEffect} from 'react'

import './Square.css'
// import Button from './Button'
import Logic from './Logic'
import Turn from './Turn'
import Button from './Button'

import {arr, arrL, arrP} from './Arr'

export default function Square() {
  const [state, setState] = useState([])


  return (
    <div className='bodySquare'>
      <div className='flexSquare'>
        <Button index={0} stateArr={arrP[1]} state={0} setState={setState} />
      </div>
     
      
      <Turn turn={'Vez do'} state={arr[0]} />
    </div>
  )
}

//  {/* <Button index={0} stateB={stateB} onclick={() => } classname={xO()} stateArr={arrP[1]}/> */}

//       {/* <Button index={1} stateArr={arrP[1]} state={state} setState={setState} stateB={stateB} setStateB={setStateB}/>
//       <Button index={2} stateArr={arrP[2]} state={state} setState={setState} stateB={stateB} setStateB={setStateB}/>
//       </div>
//       <div className='flexSquare'>
//       <Button index={3} stateArr={arrP[3]} state={state} setState={setState} stateB={stateB} setStateB={setStateB}/>
//       <Button index={4} stateArr={arrP[4]} state={state} setState={setState} stateB={stateB} setStateB={setStateB}/>
//       <Button index={5} stateArr={arrP[5]} state={state} setState={setState} stateB={stateB} setStateB={setStateB}/>
//       </div>
//       <div className='flexSquare'>
//       <Button index={6} stateArr={arrP[6]} state={state} setState={setState} stateB={stateB} setStateB={setStateB}/>
//       <Button index={8} stateArr={arrP[8]} state={state} setState={setState} stateB={stateB} setStateB={setStateB}/>
//       <Button index={7} stateArr={arrP[7]} state={state} setState={setState} stateB={stateB} setStateB={setStateB}/> */}

//        {/* <div className='flexSquare' >
//       <div className='bodyButton' >
//       <button onClick={() => hadleClick(0)} disabled={stateB[0]} local={0} className='btn'><h3 className={xO()}>{index(0)}</h3></button>
//       </div>
      
//       </div> */}

//       //   const [stateB, setStateB] = useState(false)

// //   let i = 0
 
// // const clearArr = () => {
// //   setState([arr[0]])
// //   arrP[props.local] = arr[0]
// //   arr === undefined? arrL[0] : arrL[0] = arr[0]
// //   arr.shift()
  
// //   return state
// //   }
// //   console.log(arrP[0], arr[0])
// //   const xO = () => state[0] === 'x' ? 'red' : 'blue'
  
// //   const disabled = () =>  setStateB(true)

  
// //   const index = (e) => arrP[e]
  
// //   const hadleClick = () => {
// //     clearArr()
// //     disabled()
// //     Logic()
// //     xO()
// //     console.log('oi')
// //   }