import React from "react"
import { Route } from "react-router-dom"
import Timer from "./Components/Timer/TimerBase/Timer"
import Menu from "./Components/Menu/Menu"

const FitnessApp = () => {
    return (
        <>
            <Menu />
            <Route exact path="/fitness/timer" render={() => <Timer />} />
        </>
    )
}

export default FitnessApp
