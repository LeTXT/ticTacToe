import React, {useState} from "react";

import {arrP, arr} from './Arr'

const math = (min, max) => { 
    min = Math.ceil(min)
    max = Math.floor(max)
    let e = Math.floor(Math.random() * (max - min + 1)) + min
    return e 
}

export const ai = ({setState, index}) => {
    console.log(arrP[math(0, 8)] === undefined ? arr[0] + 'sim' : 'Não' )
    if(arrP[math(0, 8)]) {
        setState([arr[0]])
        arrP[index] = arr[0]
        arr.shift()
    } else {
        console.log('não')
    }
}

console.log(arrP[math(0, 8)] === undefined ? arr[0] + 'sim' : arr[0] + 'Não' )

export default function Ai() {
    const [iaState, setIaState] = useState('Ai On')

    


    const onOf = () => iaState === 'Ai On' ? setIaState('Ai Off') : setIaState('Ai On')
    

    const handleClick = () => {
        onOf()
        
    }

    return (
        <div className="btn-res-class">
            
            <button className="btn-ai" onClick={() => handleClick()}></button>
            <p>{iaState}</p>

        </div>
    )
}