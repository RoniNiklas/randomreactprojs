import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import weightService from "../../../services/weight"
import "./WeightConverter.css"

const WeightConverter = () => {
    const [kg, setKg] = useState("")
    const [lb, setLb] = useState("")
    const [percentage, setPercentage] = useState("")
    const [max, setMax] = useState("")
    return (
        <Form className="weightConverterForm">
            <Form.Group controlId="converter-kgtolb">
                <Form.Label>Kilograms to pounds</Form.Label>
                <InputGroup>
                    <Form.Control
                        type="text"
                        placeholder="Weight in KG"
                        value={kg}
                        onChange={(event) => {
                            event.target.value = event.target.value.replace(/,/g, '.')
                            if (/^[0-9]*\.?[0-9]*$/.test(event.target.value) || !event.target.value) {
                                setKg(event.target.value)
                            }
                        }} />
                    <InputGroup.Append>
                        <InputGroup.Text>Result:</InputGroup.Text>
                        <InputGroup.Text>{kg && (weightService.rounded(weightService.kgToLbConversion(kg)))}</InputGroup.Text>
                        <InputGroup.Text>lb</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
                <Form.Text className="text-muted">
                    Converts kilograms to pounds
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="converter-lbtokg">
                <Form.Label>Pounds to Kilograms</Form.Label>
                <InputGroup>
                    <Form.Control
                        type="text"
                        placeholder="Weight in KG"
                        value={lb}
                        onChange={(event) => {
                            event.target.value = event.target.value.replace(/,/g, '.')
                            if (/^[0-9]*\.?[0-9]*$/.test(event.target.value) || !event.target.value) {
                                setLb(event.target.value)
                            }
                        }} />
                    <InputGroup.Append>
                        <InputGroup.Text>Result:</InputGroup.Text>
                        <InputGroup.Text>{lb && (weightService.rounded(weightService.lbToKgConversion(lb)))}</InputGroup.Text>
                        <InputGroup.Text>kg</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
                <Form.Text className="text-muted">
                    Converts pounds to kilograms
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="converter-percentageofmaximum">
                <Form.Label>Percentage of Maximum</Form.Label>
                <InputGroup>
                    <Form.Control
                        type="text"
                        placeholder="Weight"
                        value={max}
                        onChange={(event) => {
                            event.target.value = event.target.value.replace(/,/g, '.')
                            if (/^[0-9]*\.?[0-9]*$/.test(event.target.value) || !event.target.value) {
                                setMax(event.target.value)
                            }
                        }} />
                    <Form.Control
                        type="text"
                        placeholder="Percentage"
                        value={percentage}
                        onChange={(event) => {
                            event.target.value = event.target.value.replace(/,/g, '.')
                            if (/^[0-9]*\.?[0-9]*$/.test(event.target.value) || !event.target.value) {
                                setPercentage(event.target.value)
                            }
                        }} />
                    <InputGroup.Append>
                        <InputGroup.Text>Result:</InputGroup.Text>
                        <InputGroup.Text>{(percentage && max) && (weightService.rounded(max / 100 * percentage))}</InputGroup.Text>
                        <InputGroup.Text>kg/lb</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
                <Form.Text className="text-muted">
                    Calculate the training weight based on a percentage of your maximum. Or vice versa.
                </Form.Text>
            </Form.Group>
        </Form>
    )
}

export default WeightConverter
