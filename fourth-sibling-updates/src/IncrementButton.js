import React from 'react'
import './Button.css';

export default function IncrementButton({counter, updateCounter}){
    const updateTheCounter = function(){
        const newCounter = counter+1
        updateCounter(newCounter)
    }

    return <div className="button" onClick={updateTheCounter}>
        Increment
    </div>
}