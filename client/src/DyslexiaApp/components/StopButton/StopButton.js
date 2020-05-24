import React, { useContext } from "react"

import { SpeechContext } from "../../contexts/speech"

const StopButton = () => {
    const { dispatch } = useContext(SpeechContext)
    const stop = () => {
        speechSynthesis.cancel()
        dispatch({ type: "setMediaState", payload: "stop" })
    }

    return (
        <button onClick={stop}>
            Stop
        </button>
    )
}

export default StopButton
