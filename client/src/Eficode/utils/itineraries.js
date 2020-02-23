import timeUtil from "./time"

const parseTitle = (index, itinerary) => {
    return "Option " + (index + 1) + " (" + timeUtil.parseTime(itinerary.legs[0].startTime) + "-" + timeUtil.parseTime(itinerary.legs[itinerary.legs.length - 1].endTime) + ")"
}

export default { parseTitle }