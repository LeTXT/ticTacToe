import React, {useState} from "react";

import {arrP, arr} from './Arr'
import Logic from "./Logic";


export default function LauritaAi ({stateArr, setState, setStateAi, stateAi, setStateArr}) {
    const [onState, setOnState] = useState('Ai On')
    

    const math = (min, max) => { 
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const run = (c) => {
    console.log(c)
            
    setState([arr[0]])
        
    arrP[c] = arr[0]

    setStateArr(arrP)
    console.log(stateArr)
                                 
    arr.shift()

    return stateArr
    }

    const block = (a, b, c) => arrP[a] === arrP[b] && arrP[c] === undefined && arrP[a] !== undefined && arrP[b] !== undefined 

    const aiGame = (a, b, c) => arrP[a] === arrP[b] && arrP[c] === undefined && arrP[a] !== undefined && arrP[b] !== undefined && arrP === 'o'
    
    const aiSingle = (a, b, c) => arrP[a] === undefined && arrP[b] === undefined && arrP[c] !== undefined && arrP[c] === 'o'
    
    const test = () => {
                        
        if(arr !== undefined && arr[0] === 'o') {
            let m = math(0, 8)
            // Ia tenta ganhar aqui
            if (aiGame(6, 8, 7)) {
                run(7)
            } else if (aiGame(6, 7, 8)) {
                run(8)
            } else if (aiGame(7, 8, 6)) {
                run(6)
            } else if (aiGame(6, 4, 2)) {
                run(2)
            } else if (aiGame(8, 4, 0)) {
                run(0)
            } else if (aiGame(7, 4, 1)) {
                run(1)
            } else if (aiGame(3, 4, 5)) {
                run(5)
            } else if (aiGame(5, 4, 3)) {
                run(3)
            } else if (aiGame(2, 4, 6)) {
                run(6)
            } else if (aiGame(0, 4, 8)) {
                run(8)
            } else if (aiGame(2, 1, 0)) {
                run(0)
            } else if (aiGame(2, 4, 7)) {
                run(7)
            } else if (aiGame(2, 0, 1)) {
                run(1)
            } else if (aiGame(0, 4, 2)) {
                run(2)
            }





            else if(block(0, 1, 2)){
                run(2)
            } else if(block(0, 2, 1)) {
                run(1)
            } else if(block(0, 4, 8)) {
                run(8)
            } else if(block(0, 8, 4)) {
                run(4)
            } else if(block(0, 3, 6)) {
                run(6)
            } else if(block(0, 6, 3)) {
                run(3)
            } else if(block(1, 2, 0)) {
                run(0)
            } else if(block(1, 4, 7)) {
                run(7)
            } else if(block(1, 7, 4)) {
                run(4)
            } else if(block(2, 5, 8)) {
                run(8)
            } else if(block(2, 8, 5)) {
                run(5)
            } else if(block(2, 4, 6)) {
                run(6)
            } else if(block(2, 6, 4)) {
                run(4)
            } else if(block(3, 4, 5)) {
                run(5)
            } else if(block(2, 5, 4)) {
                run(4)
            } else if(block(6, 7, 8)) {
                run(8)
            } else if(block(6, 8, 7)) {
                run(7)
            } else if(block(6, 4, 2)) {
                run(2)
            } else if(block(2, 1, 0)) {
                run(0)
            } else if(block(5, 4, 3)) {
                run(3)
            } else if(block(8, 7, 6)) {
                run(6)
            } else if(block(8, 4, 0)) {
                run(0)
            } else if(block(6, 3, 0)) {
                run(0)
            } else if(block(7, 4, 1)) {
                run(1)
            } else if(block(8, 5, 4)) {
                run(4)
            } 
            // Parte de jogadas em um único indice
            // else if (single(0, 4)) {
            //     run(4)
            // } else if (single(2, 4)) {
            //     run(4)
            // } else if (single(6, 4)) {
            //     run(4)
            // } else if (single(8, 4)) {
            //     run(4)
           // } 
            else if ((arrP[0] !== undefined || arrP[2] !== undefined || arrP[6] !== undefined || arrP[8] !== undefined) && arrP[4] === undefined) {
                run(4)
            }
            // Estratégia mais complexas
            else if (aiSingle(3, 5, 4)) {
                run(3)
            } else if(arrP[4] !== undefined && arrP[2] === undefined ) {
                run(2)
            }
             else if(arrP[m] === undefined) {
                run(m)
                console.log('Aqui')
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