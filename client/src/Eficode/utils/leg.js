import timeUtil from "./time"

const calculateBounds = (leg) => {
    return [
        [Math.max(leg.from.lat, leg.to.lat), Math.min(leg.from.lon, leg.to.lon)],
        [Math.min(leg.from.lat, leg.to.lat), Math.max(leg.from.lon, leg.to.lon)]
    ]
}

const parseStartLocation = (name) => {
    return name === "Origin" ? "Starting location" : name
}

const parseEndLocation = (name) => {
    return name === "Destination" ? "the Eficode Offices" : name
}

const parseFromToInfo = (leg) => {
    const start = parseStartLocation(leg.from.name)
    const end = parseEndLocation(leg.to.name)
    return ". " + start + " to " + end
}

const parseTimeInfo = (leg) => {
    const startTime = timeUtil.parseTime(leg.startTime)
    const endTime = timeUtil.parseTime(leg.endTime)
    return startTime + "-" + endTime + " (around " + Math.round(leg.duration / 60) + " minutes)"
}

const parseDirections = (leg) => {
    const mode = leg.mode === "RAIL" ? "Train" : leg.mode
    const directions = mode.charAt(0).toUpperCase() + mode.substr(1).toLowerCase() + (leg.trip ? " (" + leg.trip.routeShortName + ")" : "") + " for " + Math.round(leg.distance/100) / 10 + "km"
    return directions
}

export default { calculateBounds, parseFromToInfo, parseDirections, parseTimeInfo }