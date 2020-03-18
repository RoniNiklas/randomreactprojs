import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import timerService from "../../../services/timer"
import "./TimerForm.css"

const TimerForm = ({ currentlyResting, sets, timerIsActive, workTime, restTime, setTimeLeft, setWorkTime, setSets, setSetsLeft, setRestTime }) => {
    const [name, setName] = useState("")
    const saveAsPreset = () => {
        const newName = (name && name.trim().length > 0)
            ? name
            : "Preset #" + (timerService.newIndex() + 1)

        const preset = {
            index: timerService.newIndex(),
            name: newName,
            workTime,
            restTime,
            sets
        }
        timerService.addPreset(preset)
        timerService.echo(timerService.getPresets())
    }

    return (
        <div className="timerform-wrapper">
            <div>
                <h5>Use custom values:</h5>
                <Form className="timerform" onSubmit={(event) => event.preventDefault()}>
                    <Form.Group controlId="form-sets">
                        <Form.Label>Number of Sets</Form.Label>
                        <Form.Control
                            disabled={timerIsActive}
                            type="text"
                            placeholder="# of sets"
                            value={sets}
                            onChange={(event) => {
                                if (/^\d+$/.test(event.target.value) || !event.target.value) {
                                    setSets(Math.max(1, event.target.value))
                                    setSetsLeft(Math.max(1, event.target.value))
                                    localStorage.setItem("sets", Math.max(1, event.target.value))
                                }
                            }} />
                        <Form.Text className="text-muted">
                            The number of sets you want to do.
                </Form.Text>
                    </Form.Group>
                    <Form.Label>Work Time</Form.Label>
                    <Form.Group controlId="form-worktime">
                        <Form.Control
                            disabled={timerIsActive}
                            type="text"
                            placeholder="Amount of work time per set"
                            value={workTime}
                            onChange={(event) => {
                                event.target.value = event.target.value.replace(/,/g, '.')
                                if (/^[0-9]*\.?[0-9]*$/.test(event.target.value) || !event.target.value) {
                                    setWorkTime(Math.max(1, event.target.value))
                                    !currentlyResting && setTimeLeft(Math.max(1, event.target.value))
                                    localStorage.setItem('workTime', Math.max(1, event.target.value))
                                }
                            }} />
                        <Form.Text className="text-muted">
                            The number of seconds of exercise per set.
                </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="form-resttime">
                        <Form.Label>Rest Time</Form.Label>
                        <Form.Control
                            disabled={timerIsActive}
                            type="text"
                            placeholder="Rest time per set"
                            value={restTime}
                            onChange={(event) => {
                                event.target.value = event.target.value.replace(/,/g, '.')
                                if (/^[0-9]*\.?[0-9]*$/.test(event.target.value) || !event.target.value) {
                                    setRestTime(Math.max(1, event.target.value))
                                    currentlyResting && setTimeLeft(Math.max(1, event.target.value))
                                    localStorage.setItem('restTime', Math.max(1, event.target.value))
                                }
                            }} />
                        <Form.Text className="text-muted">
                            The number of seconds of rest per set.
                </Form.Text>
                    </Form.Group>
                </Form>
            </div>
            <div>
                <h5>Save the custom values as preset</h5>
                <Form onSubmit={(event) => {
                    event.preventDefault()
                    saveAsPreset()
                }} >
                    <Form.Group controlId="form-presetname">
                        <Form.Label>Preset Name</Form.Label>
                        <Form.Control
                            disabled={timerIsActive}
                            type="text"
                            placeholder="Name for the preset"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value)
                            }} />
                        <Form.Text className="text-muted">
                            A name for the preset if you want to save one.
                        </Form.Text>
                    </Form.Group>
                    <Button type="submit"> Save as a preset </Button>
                </Form>
            </div>
            <div>
                <h5>Delete all saved custom presets</h5>
                <Button variant="danger" onClick={timerService.reset}>Delete custom presets</Button>
            </div>
        </div>
    )
}

export default TimerForm
