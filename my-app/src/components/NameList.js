import React from 'react'
import Person from './Person'
function NameList() {
    const names = ['swan','sanket','prashant']
    const Persons =[
        {
            id:1,
            name:'swan',
            location:'mumbai'
        },
        {
            id:2,
            name:'john',
            location:'pune'
        }
        ,
        {
            id:3,
            name:'sam',
            location:'hyderabad'
        }

    ]
    // const element =names.map(name=> <h1>{name}</h1>)
    return Persons.map(person=><Person key={person.id} person={person}/>)
}

export default NameList
