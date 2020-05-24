import React, { useContext } from "react"
import ToolBar from "./components/ToolBar/ToolBar"
import TextArea from "./components/TextArea/TextArea"

import { StyleContext, StyleContextProvider } from "./contexts/textStyle"
import { TextContextProvider } from "./contexts/text"
import { SpeechContextProvider } from "./contexts/speech"

import "./DyslexiaApp.css"

const DyslexiaApp = () => {
    const { state: style } = useContext(StyleContext)
    return (
        <StyleContextProvider>
            <TextContextProvider>
                <SpeechContextProvider>
                    <div className="dyslexia-wrapper" style={style}>
                        <TextArea />
                        <ToolBar />
                    </div>
                </SpeechContextProvider>
            </TextContextProvider>
        </StyleContextProvider>
    )
}

export default DyslexiaApp
