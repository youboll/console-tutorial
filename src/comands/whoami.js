import React from 'react'
export default () => {
    if(Math.random()>0.5) {
        return(<span style={{color:"red"}}>Root</span>)
    } else {
        return(<span style={{color:"gray"}}>Dummy</span>)
    }
}