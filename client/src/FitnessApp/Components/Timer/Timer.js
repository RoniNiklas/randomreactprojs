import React, { useState, useEffect } from "react"

const Timer = () => {
    const [cycles, setCycles] = useState(3)
    const [workTime, setWorkTime] = useState(4)
    const [restTime, setRestTime] = useState(2)
    const [timeLeft, setTimeLeft] = useState(workTime)
    const [currentlyResting, setCurrentlyResting] = useState(false)

    useEffect(() => {
        return clearTimeout()
    }, [])


    const countDown = () => {
        setTimeLeft(Math.max(timeLeft-1))
    }

    if (timeLeft > 0) {
        setTimeout(() => countDown(), 1000)
    } else if (cycles > 0) {
        currentlyResting && setCycles(cycles - 1)
        currentlyResting
            ? setTimeLeft(workTime)
            : setTimeLeft(restTime)
        setCurrentlyResting(!currentlyResting)
    } else {

    }

    return (
        <div>
            {"Cycles left: " + cycles}
            <br/>
            {currentlyResting ? "REST FOR: " : "EXERCISE FOR: "}
            {timeLeft}
        </div>
    )
}

export default Timer
