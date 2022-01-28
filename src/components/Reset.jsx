import React, {useState} from "react"

export default function Reset(props) {
    
    

    return (
        <div className="btn-res-class">
            <button className="btn-res" onClick={props.reset}></button>
            <p>reset</p>
        </div>
    )
}