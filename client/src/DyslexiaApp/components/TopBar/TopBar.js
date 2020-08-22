import React from "react"

import VoiceRecognitionButton from "../VoiceRecognitionButton/VoiceRecognitionButton"
import RecognitionLanguageSelector from "../RecognitionLanguageSelector/RecognitionLanguageSelector"
import InfoButton from "../InfoButton/InfoButton"

import "./TopBar.css"

const TopBar = () => {
    return (
        <div className="topbar">
            Speech-to-text:
            <InfoButton placement="bottom" infoText="Press record and speak into a microphone. Your speech should be recorded into the text field below. (Only works on up-to-date versions of Chrome)"/>
            <VoiceRecognitionButton />
            <InfoButton placement="bottom" infoText="Insert the name of the language you intend to speak into this textbox and select a language from the dropdown. By default, it uses your browser language."/>
            <RecognitionLanguageSelector />
        </div>
    )
}

export default TopBar
