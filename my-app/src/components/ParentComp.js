import React, { Component } from 'react'

import ChildComp from './ChildComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ParentName:'parent'
        }
    }
    
    greet=(child)=>{
        alert(`hello ${this.state.ParentName} from ${child}`)
    }
    render() {
        return (
            <div>
                <ChildComp clickHandler={this.greet}/>
            </div>
        )
    }
}

export default ParentComp
