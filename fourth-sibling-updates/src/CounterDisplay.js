import React from 'react'

export default function CounterDisplay(passedInProps){
    const {counter} = passedInProps
    return <div>Counter: {counter}</div>
}