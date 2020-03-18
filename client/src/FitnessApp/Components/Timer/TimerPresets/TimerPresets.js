import React, { useState, useEffect } from "react"
import Dropdown from "react-bootstrap/Dropdown"
import timerService from "../../../services/timer"
import "./TimerPresets.css"

const TimerPresets = ({ timerIsActive, setTimeLeft, setWorkTime, setSets, setSetsLeft, setRestTime }) => {
    const [presets, setPresets] = useState(timerService.getPresets())
    useEffect(() => {
        timerService.subscribeWith(setPresets)
        return () => timerService.unsubscribe()
    }, [])
    return (
        <>
            <Dropdown
                className="preset-dropdown"
                disabled={timerIsActive}
                onSelect={(eventKey) => {
                    const preset = presets[eventKey]
                    setTimeLeft(preset.workTime)
                    setRestTime(preset.restTime)
                    localStorage.setItem('restTime', preset.restTime)
                    setWorkTime(preset.workTime)
                    localStorage.setItem('workTime', preset.workTime)
                    setSetsLeft(preset.sets)
                    setSets(preset.sets)
                    localStorage.setItem('sets', preset.sets)
                }
                }>
                <Dropdown.Toggle
                    disabled={timerIsActive}
                    variant="success"
                    id="dropdown-basic">
                    Select Preset
            </Dropdown.Toggle>
                <Dropdown.Menu>
                    {presets && presets.map(preset => {
                        return (
                            <Dropdown.Item key={preset.index} eventKey={preset.index} href="#">
                                {preset.name}
                            </Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default TimerPresets
