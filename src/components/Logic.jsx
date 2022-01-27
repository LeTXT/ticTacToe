import React, {useState} from 'react'

import {arrP, arrL, arr} from './Arr'


export default function Logic() {
    
  console.log(arrL)
  
  const elseIf = () => {
    if (arrP[0] === arrP[1] && arrP[1] === arrP[2] && arrP[0] !== undefined) {
      console.log(arrL + ' ganhou')
      arr = []
      return arrL
    } else if (arrP[3] === arrP[4] && arrP[4] === arrP[5] && arrP[3] !== undefined) {
      console.log('ganhou')
      arr = []
      return arrL
    } else if (arrP[6] === arrP[7] && arrP[7] === arrP[8] &&  arrP[6] !== undefined) {
      console.log('ganhou')
      arr = []
      return arrL 
    } else if (arrP[0] === arrP[3] && arrP[3] === arrP[6] && arrP[0] !== undefined) {
      console.log('ganhou')
      arr = []
      return arrL 
    } else if (arrP[1] === arrP[4] && arrP[4] === arrP[7] && arrP[1] !== undefined) {
      console.log('ganhou')
      arr = []
      return arrL 
    } else if (arrP[2] === arrP[5] && arrP[5] === arrP[8] && arrP[2] !== undefined) {
      console.log('ganhou')
      arr = []
      return arrL 
    } else if (arrP[0] === arrP[4] && arrP[4] === arrP[8] && arrP[0] !== undefined) {
      console.log('ganhou')
      arr = []
      return arrL 
    } else if (arrP[2] === arrP[4] && arrP[4] === arrP[6] && arrP[2] !== undefined) {
      console.log('ganhou')
      arr = []
      return arrL 
    } 

  }

  
  
  return (
    <div key='id'>
      <h1>
      {elseIf()}
      </h1>
    </div>
  )
}

