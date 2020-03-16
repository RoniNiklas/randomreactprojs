import React from "react"
import "./TimerInfo.css"

const TimerInfo = ({setsLeft, currentlyResting, timeLeft}) => {
    return (
        <div className="timerinfo-wrapper">
            {"Sets left: " + setsLeft}
            < br />
            {currentlyResting ? "REST FOR: " : "EXERCISE FOR: "}
            {timeLeft}
            <br />
        </div>
    )
}

export default TimerInfo
