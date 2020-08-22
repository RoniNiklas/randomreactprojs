import React from "react"

import TextOptions from "../TextOptions/TextOptions"
import ColorSelectors from "../ColorSelectors/ColorSelectors"

import "./SideBar.css"

const SideBar = () => {

    return (
        <div className="dyslexia-sidebar">
            <TextOptions/>
            <ColorSelectors />
        </div>
    )
}

export default SideBar