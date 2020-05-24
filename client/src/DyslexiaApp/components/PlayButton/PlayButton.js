import React, { useContext } from "react"

import { SpeechContext } from "../../contexts/speech"
import { TextContext } from "../../contexts/text"

const PlayButton = () => {
    const { state: text } = useContext(TextContext)
    const { state: speech, dispatch } = useContext(SpeechContext)
    const start = () => {
        console.log("PAUSED?", speechSynthesis.paused)
        speechSynthesis.cancel()
        speech.utterance.text = text
        speechSynthesis.speak(speech.utterance)

        speech.utterance.onend = () => {
            !speechSynthesis.pending
                ? dispatch({ type: "setMediaState", payload: "stop" })
                : console.log("Pending utterances")
        }

        speech.utterance.onerror = (error) => {
            console.log(error)
        }

        speech.utterance.onboundary = (event) => {
            //mahdollisesti siihen lukukohdan träkkäämiseen hyödyllinen
        }
    }

    const resume = () => {
        console.log("PAUSED AT RESUME?", speechSynthesis.paused)
        speechSynthesis.resume()
    }

    const handlePlay = () => {
        speechSynthesis.paused ? resume() : start()
        dispatch({ type: "setMediaState", payload: "play" })
    }

    return (
        <button onClick={handlePlay}>
            Play
        </button>
    )
}

export default PlayButton
