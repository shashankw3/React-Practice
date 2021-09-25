import React from 'react'

function Person({person}) {
    return (
        <div>
            <li>hello i am {person.name} and my location is {person.location} </li>
        </div>
    )
}

export default Person
