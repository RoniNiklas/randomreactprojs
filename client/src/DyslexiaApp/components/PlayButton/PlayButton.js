import React, { useContext } from "react"

import { SpeechContext } from "../../contexts/speech"
import { TextContext } from "../../contexts/text"

const PlayButton = () => {
    const { state: content } = useContext(TextContext)
    const { state: speech, dispatch } = useContext(SpeechContext)
    const start = () => {
        console.log("PAUSED?", speechSynthesis.paused)
        speechSynthesis.cancel()
        speech.utterance.text = content.text
        speechSynthesis.speak(speech.utterance)

        speech.utterance.onend = () => {
            !speechSynthesis.pending
                ? dispatch({ type: "setMediaState", payload: "stop" })
                : console.log("Pending utterances")
        }

        speech.utterance.onerror = (error) => {
            console.log("UTTERANCE ERROR", error)
        }

        content.ref.current.onselect = (event) => {
            console.log("EVENT", event)
            console.log("TARGET", event.target)
            console.log("TOP", event.target.offsetTop)
            console.log("CLIENT HEIGHT", event.target.clientHeight)
            console.log("SCROLL HEIGHT", event.target.scrollHeight)
            console.log("BORDER TOP WIDTH", event.target.borderTopWidth)
            console.log("BORDER RIGHT WIDTH", event.target.borderRightWidth)
            console.log("BOUNDING", event.target.getBoundingClientRect())
        }

        speech.utterance.onboundary = (event) => {
            const textArea = content.ref.current
            textArea.focus()
            textArea.selectionStart = (event.charIndex)
            textArea.selectionEnd = (event.charIndex + event.charLength)

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
