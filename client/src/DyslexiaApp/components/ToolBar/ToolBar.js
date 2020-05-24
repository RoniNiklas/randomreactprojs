import React from "react"

import TextOptions from "../TextOptions/TextOptions"
import TextToSpeech from "../TextToSpeech/TextToSpeech"

const ToolBar = () => {

    return (
        <div className="dyslexia-toolBar">
            <h2>Text Options: </h2>
            <TextOptions/>
            <h2>Text To Speech: </h2> 
            <TextToSpeech />
        </div>
    )
}

export default ToolBar