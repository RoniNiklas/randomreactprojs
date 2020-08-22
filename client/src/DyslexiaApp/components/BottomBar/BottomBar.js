import React from "react"

import TextToSpeech from "../TextToSpeech/TextToSpeech"

import "./BottomBar.css"

const BottomBar = () => {

    const renderForModernBrowser = () => {
        return (
            <TextToSpeech />
        )
    }

    const renderForOldBrowser = () => {
        return (
            <>
                <span>Text-to-Speech is only available on certain modern browsers. (See availability on <a href="https://caniuse.com/#feat=speech-synthesis">caniuse</a>)</span>
            </>
        )
    }

    return (
        <div className="dyslexia-bottombar">
            {
                SpeechSynthesisUtterance
                    ? renderForModernBrowser()
                    : renderForOldBrowser()
            }
        </div>
    )
}

export default BottomBar
