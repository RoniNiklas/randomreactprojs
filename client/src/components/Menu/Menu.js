import React from "react"
import Nav from 'react-bootstrap/Nav'
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"
import "./Menu.css"

const Menu = ({ components }) => {
    return (
        <Navbar className="menu" collapseOnSelect bg="light" expand="lg">
            <Navbar.Brand as={Link} href='#' to='/'>Random collection</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {components &&
                        components.map(component => {
                            return (
                                <Nav.Link as={Link} key={component.id} href='#' to={component.path}>
                                    {component.name}
                                </Nav.Link>
                            )
                        })
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Menu