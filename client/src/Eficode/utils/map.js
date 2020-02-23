import poly from "@mapbox/polyline"

const decodeRoute = (legGeometry) => {
    return poly.decode(legGeometry)
}

const colorModeMatcher = (mode) => {
    switch (mode.toUpperCase()) {
        case "WALK": {
            return "#6ba3af"
        }
        case "RAIL": {
            return "#8c4799"
        }
        case "TRAM": {
            return "#00985f"
        }
        case "SUBWAY": {
            return "#ff6319"
        }
        case "FERRY": {
            return "#00b9e4"
        }
        default: {
            return "#007ac9"
        }
    }
}

export default { colorModeMatcher, decodeRoute }