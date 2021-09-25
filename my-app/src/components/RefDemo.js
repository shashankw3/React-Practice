import React, { Component } from 'react'

export class RefDemo extends Component {

    constructor(props) {
        super(props)
    
       this.demoRef = React.createRef()
    }
    
    componentDidMount(){
        this.demoRef.current.focus()
        console.log(this.inputRef)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.demoRef}/>
            </div>
        )
    }
}

export default RefDemo
