import React, { Component } from 'react'


export class ChildComp extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.clickHandler('child')}>greet parent</button>
            </div>
        )
    }
}

export default ChildComp
