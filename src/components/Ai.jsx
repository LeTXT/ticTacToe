import React, {useState} from "react";

import {arrP, arr} from './Arr'


export default function Ai({stateArr, setState, setStateAi, stateAi, setStateArr}) {
    const [onState, setOnState] = useState('Ai On')
    

    const math = (min, max) => { 
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    
        
    const test = () => {
        
        setTimeout(() => {
            
            if(arr !== undefined) {
                let e = undefined
                e = math(0, 8)
                    if(arrP[e] === undefined) {
    
                        console.log(e)
    
                        setState([arr[0]])

                        arrP[e] = arr[0]
    
                        setStateArr(arrP) 
                         
                        arr.shift()

                    return setStateArr
                    } else {
                        console.log('else')
                        let again = test()
                        return again
                    }
            }
        }, 1000) 
        
    }

    if(stateAi) {
        test()
        setStateAi(false)
    }
    console.log(stateArr)

    const onOf = () => onState === 'Ai On' ? setOnState('Ai Off') : setOnState('Ai On')
    

    const handleClick = () => {
        onOf()
        
    }

    return (
        <div className="btn-res-class">
            
            <button className="btn-ai" onClick={() => handleClick()}></button>
            <p>{onState}</p>

        </div>
    )
}