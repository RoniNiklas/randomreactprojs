import React, { useContext } from "react"
import Slider from "../Slider/Slider"

import { StyleContext } from "../../contexts/textStyle"

const Sliders = () => {
    
    const { state, dispatch } = useContext(StyleContext)
    const handleChange = (event, type) => {
        dispatch({ type, payload: Number(event.target.value) })
    }

    return (
        <div>
            <Slider label={"Font: " + state.fontSize} min={10} max={60} step={1} value={state.fontSize} callback={(event) => handleChange(event, "fontSize")} />
            <Slider label={"Line Height: " + state.lineHeight} min={1} max={10} step={0.2} value={state.lineHeight} callback={(event) => handleChange(event, "lineHeight")} />
            <Slider label={"Word Spacing: " + state.wordSpacing} min={1} max={40} step={0.2} value={state.wordSpacing} callback={(event) => handleChange(event, "wordSpacing")} />
            <Slider label={"Letter Spacing: " + state.letterSpacing} min={1} max={20} step={0.2} value={state.letterSpacing} callback={(event) => handleChange(event, "letterSpacing")} />
        </div>
    )
}

export default Sliders