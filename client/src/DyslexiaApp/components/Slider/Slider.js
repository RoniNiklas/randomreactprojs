import React from "react"
import Form from "react-bootstrap/Form"

const Slider = ({ label, min, max, step, value, callback }) => {
    return (
        <Form>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                min={min}
                max={max}
                step={step}
                type="range"
                value={value}
                onChange={callback}
            />
        </Form>
    )
}

export default Slider
