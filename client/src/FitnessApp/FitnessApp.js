import React from "react"
import { Route } from "react-router-dom"
import Timer from "./Components/Timer/TimerBase/Timer"
import Menu from "./Components/Menu/Menu"
import Calculator from "./Components/Calculator/CalculatorBase/CalculatorBase"

const FitnessApp = () => {
    return (
        <>
            <Menu />
            <Route exact path="/fitness/timer" render={() => <Timer />} />
            <Route exact path="/fitness/calculator" render={() => <Calculator />} />
        </>
    )
}

export default FitnessApp
