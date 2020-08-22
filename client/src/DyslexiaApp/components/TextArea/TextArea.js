import React, { useContext, useRef, useEffect, useState } from "react"
import getCoordinates from "textarea-caret"

import { StyleContext } from "../../contexts/textStyle"
import { TextContext } from "../../contexts/text"

import "./TextArea.css"

const TextArea = () => {
    const { state: style } = useContext(StyleContext)
    const { state: content, dispatch } = useContext(TextContext)
    const [rows, setRows] = useState([])
    const overlay = useRef()
    const textArea = useRef()

    useEffect(() => {
        dispatch({ type: "setRef", payload: textArea })
    }, [])

    const handleSelect = (event) => {
        //textArea.current.scrollTop = 1000
        textArea.current.blur()
        textArea.current.focus()
    }

    return (
        <div className="dyslexia-textarea-wrapper">
            {content.immersive
                ?
                <>
                    <div ref={overlay} className="dyslexia-bar-overlay">
                        <div className="dyslexia-bar" style={{ height: window.innerHeight * 0.5 - style.fontSize }} />
                        <div className="dyslexia-bar" style={{ height: window.innerHeight * 0.45 - style.fontSize, top: window.innerHeight * 0.5 + style.fontSize }} />
                        <div className="dyslexia-bar" style={{ width: "22vw", position: "fixed", right: 0, top: 0, bottom: 0 }} />
                    </div>
                    <textarea
                        autoFocus
                        ref={textArea}
                        spellCheck="true"
                        id="text-area"
                        className="dyslexia-textarea immersive"
                        type="text"
                        value={content.text}
                        style={{ ...style, height: style.fontSize * style.lineHeight * 0.8 }}
                        onChange={(event) => dispatch({ type: "setText", payload: event.target.value })}
                        onSelect={handleSelect}
                    />
                </>
                : <textarea
                    autoFocus
                    ref={textArea}
                    spellCheck="true"
                    id="text-area"
                    className="dyslexia-textarea"
                    type="text"
                    style={{ ...style, height: "100%" }}
                    value={content.text}
                    onChange={(event) => dispatch({ type: "setText", payload: event.target.value })}
                />
            }
        </div>
    )
}

export default TextArea
