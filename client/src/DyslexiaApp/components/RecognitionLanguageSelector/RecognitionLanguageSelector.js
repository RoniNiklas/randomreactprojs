import React, { useState, useContext } from "react"
import Dropdown from "react-bootstrap/Dropdown"

import languages from "../../../data/speechApiLanguages"

import { TextContext } from "../../contexts/text"

const RecognitionLanguageSelector = () => {
    const [suggestions, setSuggestions] = useState([])
    const [filter, setFilter] = useState("")
    const { state, dispatch } = useContext(TextContext)

    const handleChange = (input) => {
        setFilter(input)
        const filtered = languages.filter(suggestion => suggestion[0].toLowerCase().includes(input.toLowerCase()))
        let copy = JSON.parse(JSON.stringify(filtered))
        copy.length < 10 && setSuggestions(copy)
    }

    const handleSelect = (eventKey) => {
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
                    className="dyslexia-button"
                    variant=""
                    id="dropdown-basic"
                    disabled={state.recording}
                >
                    {state.recognition.lang ? "Chosen language: " + state.recognition.lang : "Select a language"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <input
                        value={filter}
                        type="text"
                        placeholder="Name of the language"
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
