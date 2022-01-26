import React, {useState, useEffect} from 'react'

import {arrP, arrL} from './Arr'

export function trueFalse() {
  return false
}

export default function Logic(props) {
  

  const elseIf = () => {
    if (arrP[0] === arrP[1] && arrP[1] === arrP[2] && arrP[0] !== undefined) {
      console.log(arrL + ' ganhou')
      return <h1>Oi</h1> 
    } else if (arrP[3] === arrP[4] && arrP[4] === arrP[5] && arrP[3] !== undefined) {
      console.log('ganhou')
      return arrL 
    } else if (arrP[6] === arrP[7] && arrP[7] === arrP[8] &&  arrP[6] !== undefined) {
      console.log('ganhou')
      return arrL 
    } else if (arrP[0] === arrP[3] && arrP[3] === arrP[6] && arrP[0] !== undefined) {
      console.log('ganhou')
      return arrL 
    } else if (arrP[1] === arrP[4] && arrP[4] === arrP[7] && arrP[1] !== undefined) {
      console.log('ganhou')
      return arrL 
    } else if (arrP[2] === arrP[5] && arrP[5] === arrP[8] && arrP[2] !== undefined) {
      console.log('ganhou')
      return arrL 
    } else if (arrP[0] === arrP[4] && arrP[4] === arrP[8] && arrP[0] !== undefined) {
      console.log('ganhou')
      return arrL 
    } else if (arrP[2] === arrP[4] && arrP[4] === arrP[6] && arrP[2] !== undefined) {
      console.log('ganhou')
      return arrL 
    } 

  }

  


  console.log(arrL)
  

  return (
    <div>
      {elseIf()}
    </div>
  )
}