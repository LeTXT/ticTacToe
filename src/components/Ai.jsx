import React, {useState} from "react";

import {arrP, arr} from './Arr'


export default function Ai({stateArr, setState}) {
    const [iaState, setIaState] = useState('Ai On')
    

    const math = (min, max) => { 
        min = Math.ceil(min)
        max = Math.floor(max)
        let e = Math.floor(Math.random() * (max - min + 1)) + min
        return e 
    }

    const test = () => {

        let e = math(0, 8)

        if(arrP[e] === undefined) {
        console.log(e)
        setState([arr[0]])
        stateArr[e] = arr[0] 
        arr.shift() 
        return stateArr
    } else {
        console.log('else')
        let again = test()
        return again
    }
    }
    
    console.log(stateArr)

    const onOf = () => iaState === 'Ai On' ? setIaState('Ai Off') : setIaState('Ai On')
    

    const handleClick = () => {
        onOf()
        test()
    }

    return (
        <div className="btn-res-class">
            
            <button className="btn-ai" onClick={() => handleClick()}></button>
            <p>{iaState}</p>

        </div>
    )
}