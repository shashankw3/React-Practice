import React, { Component } from 'react'

const withCounter =(WrappedComponent,num)=> {
    
    
    class withCounter extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        
        incrementCount=()=>{
            this.setState({
                count:this.state.count+num
            })
        }
    
        render() {
            return (
                <div>
                    <WrappedComponent 
                    count={this.state.count} 
                    incrementCount={this.incrementCount}
                    {...this.props}
                    />
                </div>
            )
        }
    }
    console.log(this)
    return withCounter
    
    
}

export default withCounter
