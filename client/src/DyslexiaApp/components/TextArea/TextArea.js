import React, { useContext } from "react"

import { StyleContext } from "../../contexts/textStyle"
import { TextContext } from "../../contexts/text"

const TextArea = () => {
    const { state: style } = useContext(StyleContext)
    const { state: content, dispatch } = useContext(TextContext)
    return (
        <textarea
            className="dyslexia-textArea"
            type="text"
            style={style}
            value={content}
            onChange={(event) => dispatch({ payload: event.target.value })}
        />
    )
}

export default TextArea
