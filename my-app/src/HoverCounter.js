import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
  
    render() {
        const {count,incrementCount} = this.props
        console.log(this.props.name)
        return (
            <div>
                <h1 onMouseOver={incrementCount}>Hover {count} times</h1>
            </div>
        )
    }
}

export default  withCounter(HoverCounter,5)
