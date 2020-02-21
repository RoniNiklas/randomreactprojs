import React from "react"
import Map from "../Map/Map"
import Card from "react-bootstrap/Card"
import timeUtil from "../../utils/time"
import "./LegEntry.css"

const LegEntry = ({ index, leg }) => {

    const startTime = timeUtil.parseTime(leg.startTime)
    const endTime = timeUtil.parseTime(leg.endTime)

    const bounds = [
        [Math.max(leg.from.lat, leg.to.lat), Math.min(leg.from.lon, leg.to.lon)],
        [Math.min(leg.from.lat, leg.to.lat), Math.max(leg.from.lon, leg.to.lon)]
    ]

    return (
        <div className="legEntry">
            <Card className="legEntry-card">
                <Card.Header>
                    {index + 1 + ". From: " + startTime + " to " + endTime}
                </Card.Header>
                <Card.Text>
                    Leave at: {startTime}
                    <br />
                    From: {leg.from.name === "Origin" ? "Where you are" : leg.from.name}
                    <br />
                    Mode: {leg.mode}
                    <br />
                    To: {leg.to.name === "Destination" ? "The office" : leg.to.name}
                    <br />
                    Arrive at: {endTime}
                    <br />
                    Distance: {Math.round(leg.distance) / 1000 + "km"}
                    <br />
                    Duration: {Math.round(leg.duration/60) + " minutes"}
                </Card.Text>
            </Card>
            <Map key={leg.legGeometry.points} bounds={bounds} start={[leg.from.lat, leg.from.lon]} end={[leg.to.lat, leg.to.lon]} legGeometry={leg.legGeometry.points} />
        </div>
    )
}

export default LegEntry
