import React from "react"
import ComponentItem from "./ComponentItem/ComponentItem"
import "./Front.css"

const Front = () => {
    const components = [
        {
            id: 1,
            name: "Restaurant Listing App",
            description: "This app displays a restaurant list and allows for sorting alphabetically and rolling a random restaurant from the list. Done as a part of the application process for Wolt's internship.",
            path: "/wolt"
        },
        {
            id: 2,
            name: "Eficode Routing App",
            description: "This app polls the HSL routing API to find you a public transport route from where you are to the Eficode Offices at Pohjoinen Rautatiekatu 25. Done as a part of the application process for Eficode's internship.",
            path: "/eficode"
        }
    ]
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