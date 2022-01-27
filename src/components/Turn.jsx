import React from 'react'


export default function Turn({turn, state}) {

  

  return (
    <div className='bodyTurn' >
      {turn && <h1>
        {turn}
      </h1>}
      {state && <h3>
        {state}
      </h3>}
    </div>
  )
}

