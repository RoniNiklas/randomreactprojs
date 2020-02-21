import React from "react"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import ItineraryEntry from "../ItineraryEntry/ItineraryEntry"

import timeUtil from "../../utils/time"

const ItinerariesTab = ({ tabKey, setKey, itineraries }) => {

    const parseTitle = (index, itinerary) => {
        return "Option " + (index + 1) + " (" + timeUtil.parseTime(itinerary.legs[0].startTime) + "-" + timeUtil.parseTime(itinerary.legs[itinerary.legs.length - 1].endTime) + ")"
    }

    return (
        <>
            <Tabs
                activeKey={tabKey}
                onSelect={k => setKey(k)}
                mountOnEnter={true}
                unmountOnExit={true}
            >
                {itineraries.map((itinerary, index) => {
                    return (
                        <Tab key={index} eventKey={index} title={parseTitle(index, itinerary)}>
                            <ItineraryEntry key={index} index={index} itinerary={itinerary} />
                        </Tab>
                    )
                })}
            </Tabs>
        </>
    )
}

export default ItinerariesTab
