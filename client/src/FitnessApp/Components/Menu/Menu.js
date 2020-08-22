import React from "react"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import "./Menu.css"

const Menu = () => {
    return (
        <div className="menu-wrapper">
            <Link to={"/fitness/timer"}>
                <Button>
                    Open Timer
                </Button>
            </Link>
            <Link to={"/fitness/weight"}>
                <Button>
                    Open Training Weight Calculator
                </Button>
            </Link>
        </div>
    )
}

export default Menu
