import React, { createContext, useReducer } from "react"

const initialState = {
    ref: undefined,
    text: `Tyger! Tyger! burning bright 
    In the forests of the night,
    What immortal hand or eye
    Could frame thy fearful symmetry?
    
    In what distant deeps or skies
    Burnt the fire of thine eyes?
    On what wings dare he aspire?
    What the hand, dare sieze the fire?
    
    And what shoulder, & what art,
    Could twist the sinews of thy heart?
    And when thy heart began to beat,
    What dread hand? & what dread feet?
    
    What the hammer? what the chain?
    In what furnace was thy brain?
    What the anvil? what dread grasp
    Dare its deadly terrors clasp?
    
    When the stars threw down their spears,
    And water'd heaven with their tears,
    Did he smile his work to see?
    Did he who made the Lamb make thee?
    
    Tyger! Tyger! burning bright
    In the forests of the night,
    What immortal hand or eye
    Dare frame thy fearful symmetry?
    
    - Tyger by William Blake
    `,
    immersive: false,
    recognition: window.webkitSpeechRecognition ? new window.webkitSpeechRecognition() : {},
    recording: false,
    selectionStart: 0,
    selectionEnd: 0,
    available: !window.webkitSpeechRecognition
}

const TextContext = createContext(initialState)

const reducer = (state, action) => {
    console.log("CONTENT ACTION", action)
    switch (action.type) {
        case "setRef": {
            return { ...state, ref: action.payload }
        }
        case "setText": {
            return { ...state, text: action.payload }
        }
        case "addText": {
            const textArea = state.ref.current
            if (textArea.selectionStart !== 0) {
                console.log("SELECTION START IN REDUCER", textArea.selectionStart)
                const start = Math.min(textArea.selectionStart, textArea.selectionEnd)
                const end = Math.max(textArea.selectionStart, textArea.selectionEnd)
                const text = textArea.value
                const textStart = text.slice(0, start)
                const textEnd = text.slice(end, textArea.value.length)
                const result = textStart + action.payload + textEnd
                const newSelectionIndex= textStart.length + action.payload.length
                console.log("NEW SELECTION", newSelectionIndex)
                return {...state, text: result}
            }
            return { ...state, text: state.text + action.payload }
        }
        case "setImmersive": {
            return { ...state, immersive: action.payload }
        }
        case "setLanguage": {
            state.recognition.lang = action.payload
            return { ...state }
        }
        case "setRecording": {
            return { ...state, recording: action.payload }
        }
        default: throw new Error("Invalid action type in textcontext")
    }
}

const TextContextProvider = (props) => {
    let [state, dispatch] = useReducer(reducer, initialState)
    let value = { state, dispatch }
    return <TextContext.Provider value={value}>{props.children}</TextContext.Provider>
}

const ContextConsumer = TextContext.Consumer

export { TextContext, TextContextProvider, ContextConsumer }