import React, {useContext} from "react"

import Slider from "../Slider/Slider"

import { SpeechContext } from "../../contexts/speech"

const VolumeSlider = () => {
    const { state, dispatch } = useContext(SpeechContext)
    return (
        <Slider 
            label={"Volume"}
            min={0}
            max={1}
            step={0.05}
            value={state.utterance.volume < 0 ? 1 : state.utterance.volume}
            callback={(event) => dispatch({type: "setVolume", payload: event.target.value})}
        />
    )
}

export default VolumeSlider
