import React, { Component } from 'react'

export class ClassClick extends Component {
    handleClick() {
        console.log("clicked")
        
    }
    render() {
        return (
            <div>
                   <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default ClassClick
