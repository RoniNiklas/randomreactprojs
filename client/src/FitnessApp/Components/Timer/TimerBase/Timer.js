import React, { useState, useEffect, useRef } from "react"
import Button from "react-bootstrap/Button"
import soundService from "../../../services/sound"
import TimerForm from "../TimerForm/TimerForm"
import TimerInfo from "../TimerInfo/TimerInfo"
import TimerPresets from "../TimerPresets/TimerPresets"
import MuteButton from "../MuteButton/MuteButton"
import ShowFormButton from "../ShowFormButton/ShowFormButton"
import "./Timer.css"

const Timer = () => {
    const [sets, setSets] = useState(localStorage.getItem('sets') || 8)
    const [setsLeft, setSetsLeft] = useState(localStorage.getItem('sets') || 8)
    const [workTime, setWorkTime] = useState(localStorage.getItem('workTime') || 20)
    const [restTime, setRestTime] = useState(localStorage.getItem('restTime') || 10)
    const [timeLeft, setTimeLeft] = useState(localStorage.getItem('workTime') || 20)
    const [currentlyResting, setCurrentlyResting] = useState(false)
    const [timerIsActive, setTimerIsActive] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const timeoutHandle = useRef()
    const activeRef = useRef(timerIsActive);
    activeRef.current = timerIsActive;

    useEffect(() => {
        const countDown = (timerRefIsActive) => {
            timerRefIsActive && setTimeLeft(timeLeft - 1)
        }
        if (timerIsActive) {
            if (timeLeft > 0 && setsLeft > 0) {
                timeoutHandle.current = setTimeout(() => countDown(activeRef.current), 1000)
            } else if (setsLeft > 1) {
                soundService.playWhistle()
                currentlyResting && setTimeout(() => soundService.playWhistle(), 500)
                currentlyResting && setSetsLeft(setsLeft - 1)
                currentlyResting
                    ? setTimeLeft(workTime)
                    : setTimeLeft(restTime)
                setCurrentlyResting(!currentlyResting)
            } else {
                setTimerIsActive(false)
                setTimeLeft(0)
                setSetsLeft(0)
                soundService.playWhistle()
                setTimeout(() => soundService.playWhistle(), 750)
                setTimeout(() => soundService.playWhistle(), 1500)
            }
        }
        return () => {
            clearTimeout(timeoutHandle.current)
        }
    }, [timeLeft, timerIsActive, sets, setsLeft, currentlyResting, restTime, workTime])

    const activateTimer = () => {
        if (timeLeft === 0 && setsLeft === 0) {
            setTimeLeft(workTime)
            setSetsLeft(sets)
        }
        setTimerIsActive(!timerIsActive)
    }

    return (
        <div className="timer-wrapper">
            <MuteButton />
            <TimerInfo setsLeft={setsLeft} timeLeft={timeLeft} currentlyResting={currentlyResting} />
            <Button className="timerform-button" onClick={activateTimer}>
                {timerIsActive ? "Pause timer" : "Start Timer"}
            </Button>
            <ShowFormButton setShowForm={setShowForm} showForm={showForm} />
            {
                showForm &&
                <div className="timer-editing">
                    <div className="timer-editing-item">
                        <h5> Use a preset: </h5>
                        <TimerPresets timerActive={timerIsActive} setTimeLeft={setTimeLeft} setWorkTime={setWorkTime} setSets={setSets} setSetsLeft={setSetsLeft} setRestTime={setRestTime} />
                    </div>
                    <div className="timer-editing-item">
                        <h5> Or select the values yourself: </h5>
                        <TimerForm currentlyResting={currentlyResting} timerActive={timerIsActive} sets={sets} workTime={workTime} restTime={restTime} setTimeLeft={setTimeLeft} setWorkTime={setWorkTime} setSets={setSets} setSetsLeft={setSetsLeft} setRestTime={setRestTime} />
                    </div>
                </div>
            }
        </div>
    )
}

export default Timer
