import React from 'react'
import './style.css'
import style from './style.module.css'
function StyleDemo() {
    const styleInlie = {
        color:'green',
        fontSize:'60px'
    }
    return (
        <div>
            <h1 className="box">this is demo</h1>
            <h1 style={styleInlie}>this is css demo</h1>
            <h1 className={style.border}>this is css demo</h1>
        </div>
    )
}

export default StyleDemo
