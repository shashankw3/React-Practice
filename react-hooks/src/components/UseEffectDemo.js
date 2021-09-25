import React,{useState,useEffect} from 'react'

function UseEffectDemo() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState("")
    useEffect(()=>{
        console.log("updating title")
        document.title=`${count} times clicked`
    },[count])
    return (
        <div>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>{count}INC</button>
        </div>
    )
}

export default UseEffectDemo
