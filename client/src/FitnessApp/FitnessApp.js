import React from "react"
import Button from "react-bootstrap/Button"
import { Link, Route } from "react-router-dom"
import Timer from "./Components/Timer/Timer"

const FitnessApp = () => {
    return (
        <>
            <Link to="/fitness/timer">
                <Button>
                    Open timer
                </Button>
            </Link>
            <Route exact path="/fitness/timer" render={() =>  <Timer />} />
        </>
    )
}

export default FitnessApp
