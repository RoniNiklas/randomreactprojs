import React, { useContext } from "react"

import { StyleContext } from "../../contexts/textStyle"

const ColorSelectors = () => {
    const { state: style, dispatch } = useContext(StyleContext)
    const handleChange = (event, type) => {
        dispatch({ type, payload: event.target.value })
    }
    return (
        <>
            <h2>Background Color</h2>
            <button onClick={() => handleChange({target: {value: "#ffefd5"}}, "background")}>
                Default
            </button>
            <input
                type="color"
                value={style.background}
                onInput={(event) => handleChange(event, "background")}
                onChange={(event) => handleChange(event, "background")}
            />
            <h2>Text Color</h2>
            <button onClick={() => handleChange({target: {value: "#000000"}}, "color")}>
                Default
            </button>
            <input
                type="color"
                value={style.color}
                onInput={(event) => handleChange(event, "color")}
                onChange={(event) => handleChange(event, "color")}
            />
        </>

    )
}

export default ColorSelectors

