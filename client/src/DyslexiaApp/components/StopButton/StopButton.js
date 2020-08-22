import React, { useContext } from "react"
import Stop from "@material-ui/icons/Stop"

import { SpeechContext } from "../../contexts/speech"

const StopButton = () => {
    const { dispatch } = useContext(SpeechContext)
    const stop = () => {
        speechSynthesis.cancel()
        dispatch({ type: "setMediaState", payload: "stop" })
    }

    return (
        <button className="icon-button" onClick={stop}>
            <Stop />
        </button>
    )
}

export default StopButton
