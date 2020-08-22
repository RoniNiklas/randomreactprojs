import React from "react"

import VoiceRecognitionButton from "../VoiceRecognitionButton/VoiceRecognitionButton"
import RecognitionLanguageSelector from "../RecognitionLanguageSelector/RecognitionLanguageSelector"
import InfoButton from "../InfoButton/InfoButton"

import "./TopBar.css"

const TopBar = () => {

    const renderForChrome = () => {
        return (
            <>
                Speech-to-Text:
                <InfoButton placement="bottom" infoText="Press 'Start Recording' and speak into your microphone. Your speech should be recorded into the text field below. Make sure to plug your microphone in before loading this page, and that the page has the rights to use your microphone. (Only works on certain moderns browsers)" />
                <VoiceRecognitionButton />
                <InfoButton placement="bottom" infoText="Select the name of the language you intend to speak in the following dropdown. By default, it uses your browser language. Use the native name of the language when filtering with the text input (i.e. Finnish is Suomi)." />
                <RecognitionLanguageSelector />
            </>
        )
    }

    const renderElseWhere = () => {
        return (
            <>
                <span> Speech-to-Text is only available on certain modern browsers. (See availability on <a href="https://caniuse.com/#search=SpeechRecognition%20API">caniuse</a>)</span>
                <InfoButton placement="bottom" infoText="On an acceptable browser, you can record your voice and the browser will transcribe your speech to text in the textarea below." />
            </>
        )
    }

    return (
        <div className="topbar">
            {
                window.webkitSpeechRecognition
                    ? renderForChrome()
                    : renderElseWhere()
            }
        </div>
    )
}

export default TopBar
