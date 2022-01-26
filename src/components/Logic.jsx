import React, {useState, useEffect} from 'react'

import {arrP, arrL} from './Arr'

export default function Logic() {


  const elseIf = async () => {
    if(arrP[0] === arrP[1] && arrP[1] === arrP[2] && arrP[0] === arrP[2] && arrP[0] !== undefined) {
      console.log(arrL + ' ganhou')
      return arrL 
    } else if (arrP[3] === arrP[4] && arrP[4] === arrP[5] && arrP[3] === arrP[5] && arrP[3] !== undefined) {
      console.log('ganhou')
    } else if (arrP[6] === arrP[7] && arrP[7] === arrP[8] && arrP[6] === arrP[8] && arrP[6] !== undefined) {
      console.log('ganhou')
    } else if (arrP[0] === arrP[4] && arrP[4] === arrP[8] && arrP[0] === arrP[8] && arrP[0] !== undefined) {
      console.log('ganhou')
    } else if (arrP[2] === arrP[4] && arrP[4] === arrP[6] && arrP[2] === arrP[6] && arrP[2] !== undefined) {
      console.log('ganhou')
    } 

  }

 

  
  

  return (
    <div>
      <h1>{await elseIf()}</h1>
    </div>
  )
}