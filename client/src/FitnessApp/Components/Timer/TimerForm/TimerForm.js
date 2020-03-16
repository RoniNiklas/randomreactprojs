import React from "react"
import Form from "react-bootstrap/Form"
import "./TimerForm.css"

const TimerForm = ({ currentlyResting, timerActive, sets, workTime, restTime, setTimeLeft, setWorkTime, setSets, setSetsLeft, setRestTime }) => {
    return (
        <Form className="timerform">
            <Form.Group controlId="form-sets">
                <Form.Label>Number of Sets</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="# of sets"
                    value={sets}
                    onChange={(event) => {
                        if (/^\d+$/.test(event.target.value)) {
                            setSets(event.target.value)
                            setSetsLeft(event.target.value)
                            localStorage.setItem('sets', sets)
                        }
                    }} />
                <Form.Text className="text-muted">
                    The number of sets you want to do.
                    </Form.Text>
            </Form.Group>
            <Form.Label>Work Time</Form.Label>
            <Form.Group controlId="form-worktime">
                <Form.Control
                    type="text"
                    placeholder="Amount of work time per set"
                    value={workTime}
                    onChange={(event) => {
                        if (/^\d+$/.test(event.target.value)) {
                            setWorkTime(event.target.value)
                            !currentlyResting && setTimeLeft(event.target.value)
                            localStorage.setItem('workTime', workTime)
                        }
                    }} />
                <Form.Text className="text-muted">
                    The number of seconds of exercise per set.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="form-resttime">
                <Form.Label>Rest Time</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Rest time per set"
                    value={restTime}
                    onChange={(event) => {
                        if (/^\d+$/.test(event.target.value)) {
                            setRestTime(event.target.value)
                            currentlyResting && setTimeLeft(event.target.value)
                            localStorage.setItem('restTime', restTime)
                        }
                    }} />
                <Form.Text className="text-muted">
                    The number of seconds of rest per set.
                </Form.Text>
            </Form.Group>
        </Form>
    )
}

export default TimerForm