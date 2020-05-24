import React, { useContext, useRef, useEffect } from "react"

import { StyleContext } from "../../contexts/textStyle"
import { TextContext } from "../../contexts/text"

const TextArea = () => {
    const { state: style } = useContext(StyleContext)
    const { state: content, dispatch } = useContext(TextContext)
    const textArea = useRef()

    useEffect(() => {
        dispatch({type: "setRef", payload: textArea})
    }, [])
    return (
        <textarea
            ref={textArea}
            id="text-area"
            className="dyslexia-textArea"
            type="text"
            style={style}
            value={content.text}
            onChange={(event) => dispatch({ type: "setText", payload: event.target.value })}
        />
    )
}

export default TextArea
