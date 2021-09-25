import React,{useState} from 'react'

function HookCounterThree() {

    const[items,setItems]=useState([])

    const addItem=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*5)
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Click me</button>
            <ul>
                {
                    items.map(item=>
                        <li key={item.id}>{item.value}</li>
                        )
                }
            </ul>
        </div>
    )
}

export default HookCounterThree
