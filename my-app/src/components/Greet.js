import React from 'react'

function Greet(props){
    const {name}=props
    return( 
        <div>
             <h1>Hello World {name} !!</h1>
 
        </div>
   
    )
    } 

export default Greet

// export const Greet =()=> <h1>Hello World !!</h1>
