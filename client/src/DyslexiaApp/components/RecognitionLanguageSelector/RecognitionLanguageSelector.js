import React, { useState, useEffect, useContext } from "react"
import Form from "react-bootstrap/Form"
import languages from "../../../data/speechApiLanguages"

import AutoCompleteList from "../AutocompleteList/AutocompleteList"

import { TextContext } from "../../contexts/text"

const RecognitionLanguageSelector = ({ autocompleteDelay = 100 }) => {
    const [suggestions, setSuggestions] = useState([])
    const [timeoutHandle, setTimeoutHandle] = useState()
    const [filter, setFilter] = useState("")
    const { state, dispatch } = useContext(TextContext)

    useEffect(() => {
        return () => clearTimeout(timeoutHandle)
    })

    const handleChange = (input) => {
        setFilter(input)
        clearTimeout(timeoutHandle)
        setTimeoutHandle((setTimeout(async () => {
            const filtered = languages.filter(suggestion => suggestion[0].toLowerCase().includes(input.toLowerCase()))
            if (filtered.length === 1) {
                let copy = JSON.parse(JSON.stringify(filtered))
                copy = copy[0]
                copy.shift()
                setSuggestions(copy)
            } else {
                setSuggestions([])
            }

        }, autocompleteDelay)))
    }

    const handleSelect = (suggestion) => {
        setFilter(suggestion[0])
        setSuggestions([])
        dispatch({ type: "setLanguage", payload: suggestion[0] })
    }

    return (
        <>
            <Form className="select-language-form" onSubmit={(event) => event.preventDefault()}>
                <Form.Group>
                    <Form.Control
                        disabled={state.recording}
                        value={filter}
                        type="text"
                        placeholder={state.recording ? "Recording..." : "Change Language"}
                        onChange={(event) => handleChange(event.target.value)}
                    />
                    {suggestions.length > 0 && <AutoCompleteList suggestions={suggestions} handleClick={handleSelect} />}
                </Form.Group>
            </Form>
        </>
    )
}

export default RecognitionLanguageSelector
