import React from "react"
import LegEntry from "../LegEntry/LegEntry"
import "./ItineraryEntry.css"

const ItineraryEntry = ({ itinerary }) => {
    return (
        <>
            {itinerary.legs.map((leg, index) => <LegEntry key={index} index={index} leg={leg} />)}
        </>
    )
}

export default ItineraryEntry
