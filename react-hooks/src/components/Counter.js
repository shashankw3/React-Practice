import React,{useState} from 'react'

function Counter() {
    const initial = 0
    const [count,setCount]=useState(initial)
    //console.log(useState(0))

    const incrementByFive=()=>{
        for(let i =1;i<=5;i++){
            setCount(prev=>prev+1)
        }
    }
    return (
        <div>
            count:{count}
            <button onClick={()=>setCount(initial)}>Reset</button>
            <button onClick={()=>setCount(count+1)}>Increment </button>
            <button onClick={()=>setCount(count-1)}>Decrement </button>
            <button onClick={incrementByFive}>inc by 5 </button>
        </div>
    )
}

export default Counter
