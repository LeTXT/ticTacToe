import React, {useState} from "react";

import {arrP, arr} from './Arr'

const math = (min, max) => { 
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min 
}

export const ai = ({stateArr, setStateArr, setState, index}) => {
    if(arrP[math(0, 8)]) {
        setState([arr[0]])
    arrP[index] = arr[0]
    } else {
        console.log('não')
    }
}


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