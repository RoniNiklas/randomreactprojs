import React, { useEffect, useContext } from "react"

import LanguageDropDown from "../LanguageDropDown/LanguageDropDown"
import PlayButton from "../PlayButton/PlayButton"
import PauseButton from "../PauseButton/PauseButton"
import StopButton from "../StopButton/StopButton"
import VolumeSlider from "../VolumeSlider/VolumeSlider"

import { SpeechContext } from "../../contexts/speech"

const TextToSpeech = () => {

    const { state: speech } = useContext(SpeechContext)

    useEffect(() => {
        speechSynthesis.cancel()
        window.addEventListener("beforeunload", () => {
            speechSynthesis.cancel()
        })
        return () => speechSynthesis.cancel()
    }, [])

    return (
        <div className="dyslexia-textToSpeech">
            <LanguageDropDown />
            {speech.mediaState === "play" ? <PauseButton /> : <PlayButton />}
            <StopButton />
            <VolumeSlider />
        </div>
    )
}

export default TextToSpeech