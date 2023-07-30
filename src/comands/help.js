import React from 'react'
export default (props) => {
    console.log(props)
    let msg = (props !== undefined)?"Ajuda!! página ".concat(props):"Ajuda!!"
    
    console.log(msg)
    return {
        'react_obj': <span>{msg}</span>
    }
}