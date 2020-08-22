import React, { useContext, useEffect } from "react"
import Dropdown from "react-bootstrap/Dropdown"

import speechSynthesisService from "../../services/speechSynthesis"

import { SpeechContext } from "../../contexts/speech"

const LanguageDropDown = () => {

    const { state, dispatch } = useContext(SpeechContext)

    useEffect(() => {
        const initVoices = async () => {
            const voices = await speechSynthesisService.getVoices()
            dispatch({ type: "setVoices", payload: voices })
        }
        initVoices()
        speechSynthesis.onvoiceschanged = initVoices
    }, [dispatch])

    return (
        <Dropdown
            onSelect={(eventKey) => {
                const chosen = state.voices.find(voice => voice.name === eventKey)
                dispatch({ type: "setChosen", payload: chosen })
            }}
            drop="up"
        >
            <Dropdown.Toggle
                className="dyslexia-button"
                variant=""
                id="dropdown-basic"
            >
                {state.chosen ? state.chosen.name : "Select a language"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {state.voices.map(voice => <Dropdown.Item key={voice.name} eventKey={voice.name} href="#"> {voice.name} </Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default LanguageDropDown