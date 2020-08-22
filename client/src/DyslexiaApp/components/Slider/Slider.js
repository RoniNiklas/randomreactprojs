import React from "react"
import Form from "react-bootstrap/Form"

const Slider = ({ horizontal, label, min, max, step, value, callback }) => {
    return (
        <Form className={horizontal ? "flex flex-row align-items-center m-2" : "m-2"}>
            <Form.Label className={horizontal ? "mb-0 mr-2" : ""}>{label}</Form.Label>
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
//