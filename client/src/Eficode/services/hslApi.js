import axios from "axios"

const createItineraryQuery = (lat, lon) => {
    return (`
    {
        plan(
            from: { lat: ${lat}, lon: ${lon} }
          to: { lat: 60.169447, lon: 24.925796 }
          numItineraries: 3
        ) {
            itineraries {
                legs {
                    startTime
                    endTime
                    mode
                    duration
                    distance
                    from {
                        name
                        lat
                        lon
                        stop {
                            name
                        }
                    }
                    to {
                        name
                        lat
                        lon
                        stop {
                            name
                        }
                    }
                    legGeometry {
                        length
                        points
                    }
                }
            }
        }
    }`
    )
}

const fetchItineraries = async (lat, lon) => {
    const response = await axios.post(
        "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
        createItineraryQuery(lat, lon),
        {
            headers: { "Content-Type": "application/graphql" },
        })
    const fetchedItineraries = response.data.data.plan.itineraries
    return fetchedItineraries
}

const getLocationCoordinates = async (text) => {
    const response = await axios.get("https://api.digitransit.fi/geocoding/v1/search?text=" + text + "&boundary.circle.lat=60.169447&boundary.circle.lon=24.925796&boundary.circle.radius=30")
    const coordinates = response.data.features[0].geometry.coordinates
    return {coords:{latitude: coordinates[1], longitude:coordinates[0]}}
}

export default { fetchItineraries, getLocationCoordinates }