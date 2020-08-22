import React, { createContext, useReducer } from "react"

const initialUtterance = new SpeechSynthesisUtterance()
initialUtterance.volume = 0.25

const initialState = {
    voices: [],
    chosen: undefined,
    utterance: initialUtterance,
    mediaState: "stop"
}

const SpeechContext = createContext(initialState)

const reducer = (state, action) => {
    console.log("SPEECH ACTION", action)
    switch (action.type) {
        case "setChosen": {
            console.log("UTTERANCE", state.utterance)
            console.log("PAYLOAD", action.payload)
            state.utterance.voice = action.payload
            state.utterance.lang = action.payload.lang
            return { ...state, chosen: action.payload }
        }
        case "setVoices": {
            return { ...state, voices: action.payload }
        }
        case "setVolume": {
            state.utterance.volume = action.payload
            return { ...state }
        }
        case "setMediaState": {
            return { ...state, mediaState: action.payload }
        }
        case "setPitch": {
            state.utterance.pitch = action.payload
            return { ...state }
        }
        case "setRate": {
            state.utterance.rate = action.payload
            return { ...state }
        }
        default: throw new Error("Invalid Action Type At SpeechContext")
    }
}

const SpeechContextProvider = (props) => {
    let [state, dispatch] = useReducer(reducer, initialState)
    let value = { state, dispatch }
    return <SpeechContext.Provider value={value}>{props.children}</SpeechContext.Provider>
}

const SpeechContextConsumer = SpeechContext.Consumer

export { SpeechContext, SpeechContextProvider, SpeechContextConsumer }