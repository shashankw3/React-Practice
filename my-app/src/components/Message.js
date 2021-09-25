import React from 'react'
import { Component } from 'react'
class Message extends Component {
    constructor(){
        super()
        this.state={
            message:'hello visitor'
        }
    }

    handleClick(){
        console.log("clicked")
        this.setState({
            message:'you clicked button'
        })
    }

    render(){
        return(
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=> this.handleClick()}>Click me</button>    
    
            </div>
        
    )
}
}

export default Message;