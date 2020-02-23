import React from "react"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import ItineraryEntry from "../ItineraryEntry/ItineraryEntry"
import itinerariesUtil from "../../utils/itineraries"
import "./ItinerariesTab.css"

const ItinerariesTab = ({ tabKey, setKey, itineraries }) => {

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
                        <Tab className="itineraryTab" key={index} eventKey={index} title={itinerariesUtil.parseTitle(index, itinerary)}>
                            <ItineraryEntry key={index} index={index} itinerary={itinerary} />
                        </Tab>
                    )
                })}
            </Tabs>
        </>
    )
}

export default ItinerariesTab
