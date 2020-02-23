import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./InputForm.css"

const InputForm = ({ setLocation, getItineraries }) => {
    return (
        <Form
            className="form"
            onSubmit={getItineraries}
        >
            <Button type="submit" style={{alignSelf:"center"}}>GET ME TO WORK</Button>
            <Form.Group>
                <Form.Label>Enter your location</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Your Location"
                    onChange={(event) => setLocation(event.target.value)}
                />
                <Form.Text className="text-muted">
                    Suitable inputs include addresses, place names, and unique places like Tuomiokirkko. If this is left empty, the app will try to use your location data instead.
                 </Form.Text>
            </Form.Group>
        </Form>
    )
}

export default InputForm
