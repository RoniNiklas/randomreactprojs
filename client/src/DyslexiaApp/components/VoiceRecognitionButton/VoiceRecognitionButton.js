import React, { useContext } from "react"

import { TextContext } from "../../contexts/text"

const VoiceRecognitionButton = () => {
    const { state, dispatch } = useContext(TextContext)

    const handleClick = () => {
        state.recording
            ? handleStop()
            : handleRecording()
    }



    const handleRecording = () => {
        state.recognition.continuous = true;
        state.recognition.interimResults = true;
        state.recognition.onresult = function (e) {
            console.log("results", e.results)
            for (var i = e.resultIndex; i < e.results.length; ++i) {
                if (e.results[i].isFinal) {
                    const transcript = e.results[i][0].transcript
                    console.log("FINAL", e.results[i])
                    console.log("Transcript", transcript)
                    dispatch({type: "addText", payload: transcript})
                }
            }
        }
        state.recognition.start()
        dispatch({ type: "setRecording", payload: true })
    }

    const handleStop = () => {
        dispatch({ type: "setRecording", payload: false })
        state.recognition.stop()
    }

    return (
        <button className="btn dyslexia-button" disabled={state.available} onClick={handleClick}>{state.recording ? "Stop Recording" : "Start Recording"}</button>
    )
}

export default VoiceRecognitionButton
