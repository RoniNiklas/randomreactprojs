import React from "react"
import Dropdown from "react-bootstrap/Dropdown"
import "./TimerPresets.css"

const TimerPresets = ({ timerActive, setTimeLeft, setWorkTime, setSets, setSetsLeft, setRestTime }) => {
    const presets = [
        {
            index: 0,
            name: "Tabata",
            workTime: 20,
            restTime: 10,
            sets: 8
        },
        {
            index: 1,
            name: "60 on, 30 off",
            workTime: 60,
            restTime: 30,
            sets: 4
        }
    ]
    return (
        <Dropdown
            className="preset-dropdown"
            disabled={timerActive}
            onSelect={(eventKey) => {
                const preset = presets[eventKey]
                setTimeLeft(preset.workTime)
                setRestTime(preset.restTime)
                setWorkTime(preset.workTime)
                setSetsLeft(preset.sets)
                setSets(preset.sets)
            }
            }>
            <Dropdown.Toggle
                disabled={timerActive}
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
    )
}

export default TimerPresets
