import React, { useContext } from "react"

import { StyleContext } from "../../contexts/textStyle"

import "./ColorSelectors.css";

const ColorSelectors = () => {
    const { state: style, dispatch } = useContext(StyleContext)
    const handleChange = (event, type) => {
        dispatch({ type, payload: event.target.value })
    }
    return (
        <>
            <h3 className="mt-2">Color Options:</h3>
            <div className="flex flex-row align-items-center w-100 mt-2">
                <label className="mr-auto">Background: </label>
                <button className="color-input dyslexia-button" onClick={() => handleChange({ target: { value: "#ffefd5" } }, "background")}>
                    Default
                </button>
                <div className="relative color-input ml-2" style={{ backgroundColor: style.background }}>
                    <div className="text-overlay-centered">
                        Custom
                    </div>
                    <input
                        type="color"
                        value={style.background}
                        onInput={(event) => handleChange(event, "background")}
                        onChange={(event) => handleChange(event, "background")}
                    />
                </div>
            </div>
            <div className="flex flex-row align-items-center w-100 mt-2">
                <label className="mr-auto">Text: </label>
                <button className="color-input dyslexia-button" onClick={() => handleChange({ target: { value: "#000000" } }, "color")}>
                    Default
                </button>
                <div className="relative color-input ml-2" style={{ backgroundColor: style.color }}>
                    <div className="text-overlay-centered">
                        Custom
                    </div>
                    <input
                        type="color"
                        name="color"
                        value={style.color}
                        onInput={(event) => handleChange(event, "color")}
                        onChange={(event) => handleChange(event, "color")}
                    />
                </div>

            </div>
        </>
    )
}

export default ColorSelectors

