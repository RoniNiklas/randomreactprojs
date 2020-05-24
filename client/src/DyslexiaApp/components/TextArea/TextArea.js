import React, { useContext, useRef, useEffect, useState } from "react"
import getCoordinates from "textarea-caret"

import { StyleContext } from "../../contexts/textStyle"
import { TextContext } from "../../contexts/text"

const TextArea = () => {
    const { state: style } = useContext(StyleContext)
    const { state: content, dispatch } = useContext(TextContext)
    const [topTop, setTopTop] = useState(0)
    const [topHeight, setTopHeight] = useState(0)
    const [bottomTop, setBottomTop] = useState(0)
    const [bottomHeight, setBottomHeight] = useState(0)
    const overlay = useRef()
    const textArea = useRef()
    const topBar = useRef()
    const bottomBar = useRef()

    useEffect(() => {
        dispatch({ type: "setRef", payload: textArea })

    }, [])

    const handleSelect = (event) => {
        const coordinates = getCoordinates(event.target, event.target.selectionStart)
        console.log(textArea.current.style)
        setTopTop(textArea.current.style.top)
        setTopHeight(coordinates.top)
        const bottomOfText = coordinates.top + coordinates.height + style.fontSize + (style.lineHeight * style.fontSize) * 1.1
        setBottomTop(bottomOfText)
        console.log("overlay", overlay.current)
        console.log("overlay style", overlay.current.style)
        console.log("overlay bottom", overlay.current.style.bottom)
        setBottomHeight(overlay.current.style.bottom - bottomOfText)
        console.log(coordinates)
    }


    return (
        <div className="relative m-1vw">
            <div ref={overlay} className="dyslexia-bar-overlay">
                <div ref={topBar} className="dyslexia-bar" style={{ height: topHeight }} />
                <div ref={bottomBar} className="dyslexia-bar" style={{ height: bottomHeight, top: bottomTop }} />
            </div>

            <textarea
                ref={textArea}
                id="text-area"
                className="dyslexia-textArea"
                type="text"
                style={style}
                value={content.text}
                onChange={(event) => dispatch({ type: "setText", payload: event.target.value })}
                onSelect={handleSelect}
            />
        </div>
    )
}

export default TextArea
