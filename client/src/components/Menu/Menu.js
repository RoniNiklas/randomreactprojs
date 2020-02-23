import React from "react"
import Nav from 'react-bootstrap/Nav'
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"
import "./Menu.css"

const Menu = () => {
    return (
        <Navbar className="menu" collapseOnSelect bg="light" expand="lg">
            <Navbar.Brand as={Link} href='#' to='/'>Random collection</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} href='#' to='/wolt'>
                        Restaurant Lister
                    </Nav.Link>
                    <Nav.Link as={Link} href='#' to='/eficode'>
                        Eficode Routing App
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu