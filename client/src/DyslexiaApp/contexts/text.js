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
    immersive: false
}

const TextContext = createContext(initialState)

const reducer = (state, action) => {
    console.log("CONTENT ACTION", action)
    switch (action.type) {
        case "setRef": {
            return {...state, ref: action.payload}
        }
        case "setText": {
            return {...state, text: action.payload}
        }
        case "setImmersive": {
            return {...state, immersive: action.payload}
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