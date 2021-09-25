import React from 'react'
import { Component } from 'react'
class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username:'',
            password:'',
            topic:'',
        }
    }

    handleUsername =(event)=>{
        this.setState({
            username:event.target.value
        })
    }

    handlePassword=(event)=>{
        this.setState({
            password:event.target.value
        })
    }

    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }

    handleFormSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.topic} ${this.state.password}`)
        event.preventDefault()
    }
    

  render(){
    return (
        <div>
            <form onSubmit={this.handleFormSubmit}>
                
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsername}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' value={this.state.password} onChange={this.handlePassword}/>
                </div>
                <div>
                    <label>Choos</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='php'>PHP</option>
                        <option value='js'>JS</option>
                        <option value='python'>Python</option>
                    </select>
                </div>
                <br/>
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
  }
}

export default Form
