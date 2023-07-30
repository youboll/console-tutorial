import React, {useState} from 'react'
import {projects} from '../comands/projects.json'
import WinBox from "react-winbox";

import '../assets/modern.min.css'
import '../assets/white.min.css'
import '../assets/winbox.min.css'

let winBoxControlInfo = {
  class: 'wb-gh',
  image: `https://github.githubassets.com/favicons/favicon-dark.svg`, // TODO Download and reduce the favicon icon
  click: () => {
    window.open('https://github.com/rickonono3/react-winbox', '_blank');
  },
}

export default () => {
    let [open1, setOpen1] = useState(false);

    return <div>
        { open1 && (<WinBox
            title={projects[0].title}
            className={'modern'}
            background={"rgba(94,169,92,0.92)"}
            customControls={[winBoxControlInfo]}
            width={"588px"}
            height={"608px"}
            onClose={() => {setOpen1(false)}}
        ><iframe src={"https://utlrgune52zwjhixuxttfbj6f40xiuzk.lambda-url.us-east-2.on.aws/?target_url=https://github.com/youboll/pharmalivery-website-nodejs"} sandbox></iframe></WinBox>)}
        <ul>
            <li>
                <button onClick={() => {setOpen1(true)}}>Pharmalivery {open1}</button>
            </li>
        </ul>
    </div>

}