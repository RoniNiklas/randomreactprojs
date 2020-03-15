import React from "react"
import "./TimerInfo.css"

const TimerInfo = ({ setsLeft, currentlyResting, timeLeft }) => {
    return (
        <div className="timerinfo-wrapper">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <strong className="timerinfo-strong">{"Sets left: "}</strong>
                        </td>
                        <td>
                            <strong className="timerinfo-strong">{setsLeft}</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong className="timerinfo-strong">{currentlyResting ? "Rest for: " : "Exercise for: "}</strong>
                        </td>
                        <td>
                            <strong className="timerinfo-strong">{timeLeft}</strong>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div >
    )
}

export default TimerInfo
