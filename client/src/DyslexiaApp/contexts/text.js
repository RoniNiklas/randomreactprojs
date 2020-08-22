import React, { createContext, useReducer } from "react"

const initialState = {
    ref: undefined,
    text: `It is something that many of us do instinctively, almost as muscle memory, several times a day. But rarely has it been as important as it has in the last six months.
    
Amidst the arsenal of weapons against coronavirus – masks, self-isolation and social distancing – one has been particularly easy to overlook: handwashing.
    
As the coronavirus emerged as a worldwide health emergency in February, health agencies scrambled to advise people how to protect themselves from the new virus. One suggestion – repeated day after day, on news bulletins, adverts and expert interviews – was to wash hands with soap, in warm water, for at least 20 seconds.
    
The World Health Organization published a graphic – widely memed since – showing the correct way to wash hands: a how-to familiar to anyone who has ever worked in a bar or a restaurant.
    
Six months on, the confused global picture over spikes and localised lockdowns – like the curfew recently imposed on Melbourne in Australia – has pushed the handwashing advice to the margins. Amid the growing backlash in some quarters against wearing masks and face coverings, this other silver bullet against coronavirus infection has been edged out of the spotlight. One Ethiopian observational study, still to be peer-reviewed, found less than 1% of more than 1,000 people visiting hospitals washed their hands in the correct way.  But has the advice changed? (Read about why some people don’t wash their hands.)
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