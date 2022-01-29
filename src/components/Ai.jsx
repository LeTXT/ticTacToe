import React, {useState} from "react";

import {arrP, arr} from './Arr'
import Logic from "./Logic";


export default function Ai({stateArr, setState, setStateAi, stateAi, setStateArr}) {
    const [onState, setOnState] = useState('Ai On')
    const [eState, setEState] = useState()
    

    const math = (min, max) => { 
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    
    
        const test = () => {
            
                
                
                    if(arr !== undefined && arr[0] === 'o') {
                            let e = math(0, 8)
                            
                            
                            if(arrP[e] === undefined) {
            
                                console.log(e)
            
                                setState([arr[0]])
        
                                arrP[e] = arr[0]

                                setStateArr(arrP)
                                console.log(stateArr)
                                 
                                arr.shift()
                                
                            return stateArr
                            } else {
                                console.log('else')
                                let again = test()
                                return again
                            }
                    }
                
            
           
            
        }
        if(stateAi && !Logic() && onState === 'Ai On') {
            setTimeout(() => {
                test()
            setStateAi(false)
            setStateArr(arrP)
            }, 1000)
            
        }
    
    
    
    console.log(stateArr)
    console.log(arrP)


    const onOff = () => onState === 'Ai On' ? setOnState('Ai Off') : setOnState('Ai On')
    

    const handleClick = () => {
        onOff()
        
    }

    return (
        <div className="btn-res-class">
            
            <button className="btn-ai" onClick={() => handleClick()}></button>
            <p>{onState}</p>

        </div>
    )
}