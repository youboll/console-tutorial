import styled from "styled-components";
import React, {useState} from 'react'
import {projects} from '../comands/projects.json'
import WinBox from "react-winbox";
import '../assets/modern.min.css'
import '../assets/white.min.css'
import '../assets/winbox.min.css'
import CustomWinBox from "./CustomWinBox";


const ProjectButton = styled.button`
  background-color: #1b5abf;
  border: 1px solid #0d2750;
  margin-right: 1em;
  margin-bottom: .2em;
`

export default () => {
    let [open1, setOpen1] = useState(false);
    let [open2, setOpen2] = useState(false);


    return <div>
        {open1 && (<CustomWinBox
            url={"https://github.com/youboll/pharmalivery-website-nodejs"}
            onClose={setOpen1}
        ></CustomWinBox>)}

        <ProjectButton onClick={() => {
            setOpen1(true)
        }}>Pharmalivery</ProjectButton>

        {open2 && (
            <CustomWinBox
                url={"https://github.com/youboll/shitfinderReactApp"}
                onClose={setOpen2}
            >

            </CustomWinBox>
        )}

        <ProjectButton onClick={() => {
            setOpen2(true)
        }}>ShitFinder</ProjectButton>
    </div>

}