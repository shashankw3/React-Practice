import React from 'react'

function Hero({heroName}) {

    if(heroName=='joker'){
        throw new Error("not a hero")
    }

    return (
        <div>
            
            <h1>{heroName}</h1>
        </div>
    )
}

export default Hero
