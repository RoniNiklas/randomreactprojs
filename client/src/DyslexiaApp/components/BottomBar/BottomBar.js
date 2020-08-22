import React from "react"
import TextToSpeech from "../TextToSpeech/TextToSpeech"
import ImmersiveToggle from "../ImmersiveToggle/ImmersiveToggle"
/*<ImmersiveToggle />*/
import "./BottomBar.css"

const BottomBar = () => {
    return (
        <div className="dyslexia-bottombar">
            <TextToSpeech />
        </div>
    )
}

export default BottomBar
