import React from "react";
import WinBox from "react-winbox";

import {projects} from '../comands/projects.json'

export default (props) => {
    let winBoxControlInfo = {
        class: 'wb-gh',
        image: `https://github.githubassets.com/favicons/favicon-dark.svg`,
        click: () => {
            window.open(props.url, '_blank');
        },
    }
    console.log(process.env)
    let proxiedUrl = process.env.PROXY_URL + props.url

    return <div>
        <WinBox
                title={projects[0].title}
                className={'modern'}
                background={"rgba(94,169,92,0.92)"}
                customControls={[winBoxControlInfo]}
                width={"588px"}
                height={"608px"}
                onClose={() => {
                    props.onClose(false)
                }}
            >
                <iframe
                    src={proxiedUrl}
                    sandbox>
                </iframe>
            </WinBox>
    </div>
    }
