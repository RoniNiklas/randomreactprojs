import React, { useContext } from "react"
import Dropdown from "react-bootstrap/Dropdown"

import { StyleContext } from "../../contexts/textStyle"

const FontDropdown = () => {
    const { state, dispatch } = useContext(StyleContext)
    return (
        <Dropdown
            className="ml-2"
            onSelect={(eventKey) => {
                dispatch({ type: "fontFamily", payload: eventKey })
            }}
            drop="left"
        >
            <Dropdown.Toggle 
                className="dyslexia-button"
                variant=""
                id="dropdown-basic">
                Change Font
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {state.fonts.map(font => <Dropdown.Item key={font} eventKey={font} href="#"> {font} </Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default FontDropdown