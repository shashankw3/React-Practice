import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    

    render() {

        // return(
        //     this.state.isLoggedIn && <h1>Hello swan!</h1>
        // )

        const message = this.state.isLoggedIn ? <h1>Hello Swan</h1> : <h1>Hello Guest</h1>
        return message
    //     if(this.state.isLoggedIn){
    //     return (
    //         <div>
    //             <h1>Hello Swan</h1>
    //         </div>
    //     )
    // }else{
    //     <div>
    //         <h1>Hello Guest</h1>
    //     </div>
    // }

    
}
}

export default UserGreeting
