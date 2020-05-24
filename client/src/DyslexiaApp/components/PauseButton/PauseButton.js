import React, { useContext } from "react"

import { SpeechContext } from "../../contexts/speech"

const PauseButton = () => {
    const { dispatch } = useContext(SpeechContext)
    const pause = () => {
        speechSynthesis.pause()
        dispatch({ type: "setMediaState", payload: "pause" })
    }

    return (
        <button onClick={pause}>
            Pause
        </button>
    )
}

export default PauseButton
