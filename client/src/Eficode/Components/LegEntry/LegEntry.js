import React from "react"
import Map from "../Map/Map"
import Card from "react-bootstrap/Card"
import legUtils from "../../utils/leg"
import "./LegEntry.css"

const LegEntry = ({ index, leg }) => {

    return (
        <div className="legEntry">
            <Card className="legEntry-card">
                <Card.Header>
                    {index + 1 + legUtils.parseFromToInfo(leg)}
                </Card.Header>
                <Card.Header>
                    {legUtils.parseTimeInfo(leg)}
                </Card.Header>
                <Card.Header>
                    {legUtils.parseDirections(leg)}
                </Card.Header>
                <Map key={leg.legGeometry.points} bounds={legUtils.calculateBounds(leg)} start={[leg.from.lat, leg.from.lon]} end={[leg.to.lat, leg.to.lon]} legGeometry={leg.legGeometry.points} mode={leg.mode} />
            </Card>
        </div>
    )
}

export default LegEntry
