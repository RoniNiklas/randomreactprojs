import React, { useContext } from "react"
import Pause from "@material-ui/icons/Pause"

import { SpeechContext } from "../../contexts/speech"

const PauseButton = () => {
    const { dispatch } = useContext(SpeechContext)
    const pause = () => {
        speechSynthesis.pause()
        dispatch({ type: "setMediaState", payload: "pause" })
    }

    return (
        <button className="icon-button" onClick={pause}>
            <Pause/>
        </button>
    )
}

export default PauseButton
