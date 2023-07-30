import React from 'react'
export default () => {
    let random = Math.random()
    let component = <span style={{color:"gray"}}>Dummy</span>
    if(random>0.5) {
        component = <span style={{color:"red"}}>Root</span>
    }
    if (random > 0.75) {
        component = <span style={{color:"green"}}>My next employer?</span>
    }

    return {'react_obj': component}
}