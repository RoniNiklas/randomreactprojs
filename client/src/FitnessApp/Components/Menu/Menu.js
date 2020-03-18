import React from "react"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import "./Menu.css"

const Menu = () => {
    return (
        <div className="menu-wrapper">
            <Link to={window.location.pathname === "/fitness/timer" ? "/fitness" : "/fitness/timer"}>
                <Button>
                    {window.location.pathname === "/fitness/timer" ? "Close Timer" : "Open Timer"}
                </Button>
            </Link>
            <Link to={window.location.pathname === "/fitness/weight" ? "/fitness" : "/fitness/weight"}>
                <Button>
                    {window.location.pathname === "/fitness/weight" ? "Close Training Weight Calculator" : "Open Training Weight Calculator"}
                </Button>
            </Link>
        </div>
    )
}

export default Menu
