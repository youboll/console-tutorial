import React, { useState } from 'react'
import WinboxReact from 'winbox-react'
import projectData from './projects.json'

export default function (props) {
    let project = projectData.projects;
    
    
    return(
        <div>
            <span onClick={ () => { window.winJs(project[0])}}>Teste</span>
            <span onClick={ () => { window.winJs("teste2")}}>Teste2</span>
            <span onClick={ () => { window.winJs("teste3")}}>Teste3</span>
        </div>
    )

}