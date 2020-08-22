import React from "react"
import { Route } from "react-router-dom"
import Timer from "./Components/Timer/TimerBase/Timer"
import Menu from "./Components/Menu/Menu"
import WeightCalculator from "./Components/WeightCalculator/WeightCalculator"

const FitnessApp = () => {
    return (
        <>
            <Menu key={window.location.pathname}/>
            <Route exact path="/fitness/timer" render={() => <Timer />} />
            <Route exact path="/fitness/weight" render={() => <WeightCalculator />} />
        </>
    )
}

export default FitnessApp
