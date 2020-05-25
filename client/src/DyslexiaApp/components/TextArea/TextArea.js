import React, { useContext, useRef, useEffect, useState } from "react"
import getCoordinates from "textarea-caret"

import { StyleContext } from "../../contexts/textStyle"
import { TextContext } from "../../contexts/text"

const TextArea = () => {
    const { state: style } = useContext(StyleContext)
    const { state: content, dispatch } = useContext(TextContext)
    const [rows, setRows] = useState([])
    const overlay = useRef()
    const textArea = useRef()
    const topBar = useRef()
    const bottomBar = useRef()

    useEffect(() => {
        dispatch({ type: "setRef", payload: textArea })
    }, [])

    useEffect(() => {
        const rows = content.text.match(/[^\r\n]+/g)
        console.log("ROWS", rows)
        setRows(rows)
    }, [])
    const handleSelect = (event) => {
        //textArea.current.scrollTop = 9000
        //textArea.current.blur()
        //textArea.current.focus()
    }

    return (
        <div className="wrapper">
            {content.immersive
                ?
                <>
                    <div ref={overlay} className="dyslexia-bar-overlay">
                        <div ref={topBar} className="dyslexia-bar" style={{ height: window.innerHeight * 0.5 - style.fontSize }} />
                        <div ref={bottomBar} className="dyslexia-bar" style={{ height: window.innerHeight * 0.5 - style.fontSize, top: window.innerHeight * 0.5 + style.fontSize }} />
                    </div>
                    <textarea
                        ref={textArea}
                        spellCheck="true"
                        id="text-area"
                        className="dyslexia-textArea"
                        type="text"
                        value={content.text}
                        rows={3}
                        style={{ ...style}}
                        onChange={(event) => dispatch({ type: "setText", payload: event.target.value })}
                        onSelect={handleSelect}
                    />
                </>
                : <textarea
                    ref={textArea}
                    spellCheck="true"
                    id="text-area"
                    className="dyslexia-textArea"
                    type="text"
                    style={{ ...style, height: "80vh" }}
                    value={content.text}
                    onChange={(event) => dispatch({ type: "setText", payload: event.target.value })}
                />
            }
        </div>
    )
}

export default TextArea
