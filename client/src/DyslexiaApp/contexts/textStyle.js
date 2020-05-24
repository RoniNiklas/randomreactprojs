import React, { createContext, useReducer } from "react"

const initialState = {
    fontSize: 18,
    lineHeight: 2,
    letterSpacing: 2,
    wordSpacing: 2,
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