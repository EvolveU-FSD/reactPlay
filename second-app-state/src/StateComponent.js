import React, {useState} from 'react'

export default function StateBasedComponent () {
    const [isOrIsNot, setIsOrIsNot] = useState('is')

    const changeIsOrIsNot = function(){
        // calculate new value
        const newValue = (isOrIsNot === 'is') ? 'is not' : 'is'

        // change the view model
        setIsOrIsNot(newValue)
    }

    return <div onClick={changeIsOrIsNot}>My functional component with state {isOrIsNot} great!</div>
}