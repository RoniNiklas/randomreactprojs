import React, { useState, useEffect, useContext } from "react"
import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"


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
                setSuggestions(languages)
            }

        }, autocompleteDelay)))
    }

    const handleSelect = (eventKey) => {
        setFilter(eventKey)
        setSuggestions(languages)
        dispatch({ type: "setLanguage", payload: eventKey })
    }

    const renderLanguageName = (suggestion) => {
        return suggestion[1] 
            ? suggestion[0] + ", " + suggestion[1]
            : suggestion[0];
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
                    {suggestions.map(suggestion => <Dropdown.Item key={suggestion[0]} eventKey={suggestion[0]} href="#"> {renderLanguageName(suggestion)} </Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default RecognitionLanguageSelector
