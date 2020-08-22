import React, { useState, useEffect, useContext } from "react"
import Dropdown from "react-bootstrap/Dropdown"

import languages from "../../../data/speechApiLanguages"

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
            let copy = JSON.parse(JSON.stringify(filtered))
            setSuggestions(copy)
        }, autocompleteDelay)))
    }

    const handleSelect = (eventKey) => {
        setFilter(eventKey)
        setSuggestions([])
        dispatch({ type: "setLanguage", payload: eventKey })
    }

    const renderLanguageName = (langName, variant) => {
        return langName + ", " + variant
    }

    return (
        <>
            <Dropdown
                onSelect={(eventKey) => {
                    handleSelect(eventKey)
                }}
                drop="down"
            >
                <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    disabled={state.recording}
                >
                    Select a language
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <input
                        value={filter}
                        type="text"
                        placeholder={state.recording ? "Recording..." : "Change Language"}
                        onChange={(event) => handleChange(event.target.value)}
                    />
                    {suggestions.map(suggestion => {
                        const langName = suggestion[0]
                        suggestion.shift()
                        return suggestion.map(variant => <Dropdown.Item key={variant[0]} eventKey={variant[0]} href="#"> {renderLanguageName(langName, variant)}</Dropdown.Item>)
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default RecognitionLanguageSelector
