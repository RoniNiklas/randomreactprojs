import React, { useContext } from "react"
import ToolBar from "./components/ToolBar/ToolBar"
import TextArea from "./components/TextArea/TextArea"

import { StyleContextProvider } from "./contexts/textStyle"
import { TextContextProvider } from "./contexts/text"
import { SpeechContextProvider } from "./contexts/speech"

import "./DyslexiaApp.css"

const DyslexiaApp = () => {
    return (
        <StyleContextProvider>
            <TextContextProvider>
                <SpeechContextProvider>
                    <div className="dyslexia-wrapper" >
                        <TextArea />
                        <ToolBar />
                    </div>
                </SpeechContextProvider>
            </TextContextProvider>
        </StyleContextProvider>
    )
}

export default DyslexiaApp
