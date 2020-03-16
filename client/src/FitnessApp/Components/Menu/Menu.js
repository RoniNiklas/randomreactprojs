import React from "react"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import "./Menu.css"

const Menu = () => {
    return (
        <div className="menu-wrapper">
            <Link to={window.location.pathname === "/fitness/timer" ? "/fitness" : "/fitness/timer"}>
                <Button>
                    {window.location.pathname === "/fitness/timer" ? "Close Timer" : "Open timer"}
                </Button>
            </Link>
        </div>

    )
}

export default Menu
