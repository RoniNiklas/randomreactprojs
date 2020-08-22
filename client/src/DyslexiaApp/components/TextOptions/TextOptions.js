import React from "react"

import TextOptionSliders from "../TextOptionSliders/TextOptionSliders"
import FontDropdown from "../FontDropdown/FontDropdown"

const TextOptions = () => {
    return (
        <>
            <h3>Font and Spacing:</h3>
            <TextOptionSliders />
            <FontDropdown />
        </>
    )
}

export default TextOptions