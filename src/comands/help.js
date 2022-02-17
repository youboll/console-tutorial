import React from 'react'
export default (props) => {
    let msg = (props !== undefined)?"Ajuda!! página ".concat(props):"Ajuda!!"
    
    console.log(msg)
    return(<span>{msg}</span>)
}