import React, { createContext, useReducer } from "react"

const initialState = {
    fontSize: 16,
    lineHeight: 1,
    letterSpacing: 1,
    wordSpacing: 1,
    fonts: ["Roboto", "Cursive"],
    background: "#ffefd5", //papayawhip
    color: "#000000" //black
}

let StyleContext = createContext(initialState)

const reducer = (state, action) => {
    console.log("STYLE ACTION", action)
    return {...state, [action.type]: action.payload}
}

const StyleContextProvider = (props) => {
    let [state, dispatch] = useReducer(reducer, initialState)
    let value = { state, dispatch }
    return <StyleContext.Provider value={value}>{props.children}</StyleContext.Provider>
}

let ContextConsumer = StyleContext.Consumer

export { StyleContext, StyleContextProvider, ContextConsumer }