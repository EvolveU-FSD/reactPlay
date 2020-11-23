import React from 'react'

export default class FirstComponent extends React.Component{
    isOrIsNot = 'is'
 
    render() {
        return <div>My class component {this.isOrIsNot} great!</div>
    }
    
}