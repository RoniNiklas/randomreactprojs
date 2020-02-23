import React from "react"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"
import "./ComponentItem.css"

const ComponentItem = ({ component }) => {
    return (
        <Card className="componentItem">
            <Card.Header>
                <strong className="mr-auto">{component.name}</strong>
            </Card.Header>
            <Card.Body>
                {component.description}
            </Card.Body>
            <Card.Footer>
                <Link to={component.path}>Go to app</Link>
            </Card.Footer>
        </Card>
    )
}

export default ComponentItem