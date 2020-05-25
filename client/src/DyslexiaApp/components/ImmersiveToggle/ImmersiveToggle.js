import React, { useContext } from "react"
import Form from "react-bootstrap/Form"

import { TextContext } from "../../contexts/text"

const ImmersiveToggle = () => {
    const { state, dispatch } = useContext(TextContext)
    return (
        <Form>
            <Form.Check
                type="switch"
                id="custom-switch"
                label="Immersive Mode"
                checked={state.immersive}
                onChange={() => dispatch({type: "setImmersive", payload: !state.immersive})}
            />
        </Form>

    )
}

export default ImmersiveToggle
