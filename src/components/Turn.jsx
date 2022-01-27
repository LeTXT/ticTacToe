import React from 'react'


export default function Turn({turn, state}) {

  

  return (
    <div className='bodyTurn' >
      <h1>
        {turn}
      </h1>
      <h3>
        {state}
      </h3>
    </div>
  )
}

