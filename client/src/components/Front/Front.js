import React from "react"
import ComponentItem from "../ComponentItem/ComponentItem"
import "./Front.css"

const Front = ({components}) => {
    return (
        <div className="front-root">
            <p> Below, you'll find a list of different random small react projects I've done. These can also be reached via the menu bar above. </p>
            <div className="component-listing">
                {components.map(component => <ComponentItem key={component.id} component={component} />)}
            </div>
        </div>
    )
}

export default Front