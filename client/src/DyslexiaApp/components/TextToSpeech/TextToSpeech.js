import React, { useEffect, useContext } from "react"

import InfoButton from "../InfoButton/InfoButton"
import LanguageDropDown from "../LanguageDropDown/LanguageDropDown"
import PlayButton from "../PlayButton/PlayButton"
import PauseButton from "../PauseButton/PauseButton"
import StopButton from "../StopButton/StopButton"
import Slider from "../Slider/Slider"

import { SpeechContext } from "../../contexts/speech"

import "./TextToSpeech.css"

const TextToSpeech = () => {

    const { state, dispatch } = useContext(SpeechContext)

    useEffect(() => {
        speechSynthesis.cancel()
        window.addEventListener("beforeunload", () => {
            speechSynthesis.cancel()
        })
        return () => speechSynthesis.cancel()
    }, [])

    return (
        <div className="dyslexia-texttospeech">
            <div className="bottom-bar-buttons">
                Text-to-Speech:
                <InfoButton placement="top" infoText="Select a language and speaker from the dropdown menu. Press play and the text in the textarea should be read aloud to you. Note that the google-voices on Chrome might not work with longer texts. Note that text-hightlighting does not work with google-voices." />
                <LanguageDropDown />
                {state.mediaState === "play" ? <PauseButton /> : <PlayButton />}
                <StopButton />
            </div>
            <div className="bottom-bar-sliders">
                <InfoButton placement="top" infoText="You can adjust the volume, pitch and rate of speech. Note that you need to press stop and play again for these to take effect." />
                <Slider horizontal label={"Volume"} min={0} max={1} step={0.05} value={state.utterance.volume < 0 ? 1 : state.utterance.volume} callback={(event) => dispatch({ type: "setVolume", payload: event.target.value })} />
                <Slider horizontal label={"Pitch"} min={0} max={1} step={0.05} value={state.utterance.pitch < 0 ? 1 : state.utterance.pitch} callback={(event) => dispatch({ type: "setPitch", payload: event.target.value })} />
                <Slider horizontal label={"Rate"} min={0} max={1} step={0.05} value={state.utterance.rate < 0 ? 1 : state.utterance.rate} callback={(event) => dispatch({ type: "setRate", payload: event.target.value })} />
            </div>
        </div>
    )
}

export default TextToSpeech