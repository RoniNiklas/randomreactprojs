import React, { useState } from 'react'
import Alert from "react-bootstrap/Alert"
import Spinner from "react-bootstrap/Spinner"
import ItinerariesTab from "./Components/ItinerariesTab/ItinerariesTab"
import InputForm from "./Components/InputForm/InputForm"
import hslApiService from "./services/hslApi"
import "./EficodeApp.css"

const EficodeApp = () => {
    //https://github.com/eficode/assignment-timetables
    //https://digitransit.fi/en/developers/apis/1-routing-api/0-graphql/
    //https://api.digitransit.fi/graphiql/hsl?query=%257B%250A%2520%2520plan%28%250A%2520%2520%2520%2520from%253A%2520%257Blat%253A%252060.168992%252C%2520lon%253A%252024.932366%257D%250A%2520%2520%2520%2520to%253A%2520%257Blat%253A%252060.175294%252C%2520lon%253A%252024.684855%257D%250A%2520%2520%2520%2520numItineraries%253A%25203%250A%2520%2520%29%2520%257B%250A%2520%2520%2520%2520itineraries%2520%257B%250A%2520%2520%2520%2520%2520%2520legs%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520startTime%250A%2520%2520%2520%2520%2520%2520%2520%2520endTime%250A%2520%2520%2520%2520%2520%2520%2520%2520mode%250A%2520%2520%2520%2520%2520%2520%2520%2520duration%250A%2520%2520%2520%2520%2520%2520%2520%2520realTime%250A%2520%2520%2520%2520%2520%2520%2520%2520distance%250A%2520%2520%2520%2520%2520%2520%2520%2520transitLeg%250A%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%257D%250A%2520%2520%257D%250A%257D
    //https://repl.it/@digitransit/PolylineDecode
    //https://repl.it/@digitransit/PolylineDecodeMap

    const [itineraries, setItineraries] = useState()
    const [location, setLocation] = useState()
    const [error, setError] = useState()
    const [key, setKey] = useState(0)
    const [loading, setLoading] = useState(false)

    const handleItineraries = async (fetchedItineraries) => {
        if (fetchedItineraries.length > 0) {
            setKey(0)
            setItineraries(fetchedItineraries)
            setError()
        } else {
            setItineraries()
            setError("Could not find a route from that location. Try a different one.")
        }
        setLoading(false)
    }

    const fetchAndHandleItineraries = async (coordinates) => {
        const fetchedItineraries = await hslApiService.fetchItineraries(coordinates.coords.latitude, coordinates.coords.longitude)
        handleItineraries(fetchedItineraries)
    }

    const getItineraries = async (event) => {
        event.preventDefault()
        try {
            setLoading(true)
            if (!location) {
                navigator.geolocation.getCurrentPosition(fetchAndHandleItineraries, () => { setError("Could not use location data.") })
            } else {
                const coordinates = await hslApiService.getLocationCoordinates(location)
                fetchAndHandleItineraries(coordinates)
            }
        } catch (error) {
            setItineraries()
            setLoading(false)
            setError("Could not find a route from that location. Try a different one.")
        }
    }

    return (
        <div className="eficode-root">
            {error && <Alert variant="primary">{error}</Alert>}
            <InputForm setLocation={setLocation} getItineraries={getItineraries} />
            {loading &&
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            }
            {itineraries && <ItinerariesTab itineraries={itineraries} setKey={setKey} tabKey={key} />}
        </div >
    )
}

export default EficodeApp