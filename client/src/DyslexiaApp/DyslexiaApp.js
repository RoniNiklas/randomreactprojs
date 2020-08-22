import React, { useContext } from "react"
import SideBar from "./components/SideBar/SideBar"
import TopBar from "./components/TopBar/TopBar"
import TextArea from "./components/TextArea/TextArea"
import BottomBar from "./components/BottomBar/BottomBar"

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
                        <TopBar / >
                        <div className="dyslexia-midarea">
                            <TextArea />
                            <SideBar />
                        </div>
                        <BottomBar />
                    </div>
                </SpeechContextProvider>
            </TextContextProvider>
        </StyleContextProvider>
    )
}

export default DyslexiaApp
