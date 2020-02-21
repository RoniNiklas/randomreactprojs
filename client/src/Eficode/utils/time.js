const parseTime = (milliseconds) => {
    const date = new Date(milliseconds)
    return date.getHours() + ":" + (date.getMinutes().toString().length === 1 ? "0" + date.getMinutes() : date.getMinutes())
}

export default { parseTime }