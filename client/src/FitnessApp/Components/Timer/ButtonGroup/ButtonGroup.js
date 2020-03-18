import React from "react"
import Button from "react-bootstrap/Button"
import TimerPresets from "../TimerPresets/TimerPresets"

const ButtonGroup = ({timerIsActive, setTimeLeft, setWorkTime, setSets, setSetsLeft,setRestTime, setTimerIsActive, timeLeft, setsLeft, workTime, sets}) => {

    const activateTimer = () => {
        if (timeLeft === 0 && setsLeft === 0) {
            setTimeLeft(workTime)
            setSetsLeft(sets)
        }
        setTimerIsActive(!timerIsActive)
    }

    return (
        <div className="timer-buttons">
            <TimerPresets timerIsActive={timerIsActive} setTimeLeft={setTimeLeft} setWorkTime={setWorkTime} setSets={setSets} setSetsLeft={setSetsLeft} setRestTime={setRestTime} />
            <Button className="timerform-button" onClick={activateTimer}>
                {timerIsActive ? "Pause timer" : "Start Timer"}
            </Button>
        </div>
    )
}

export default ButtonGroup
