let callback
let defaultPresets = [
    {
        index: 0,
        name: "Tabata",
        workTime: 20,
        restTime: 10,
        sets: 8
    },
    {
        index: 1,
        name: "60 on, 30 off",
        workTime: 60,
        restTime: 30,
        sets: 4
    }
]

const getPresets = () => {
    if (localStorage.getItem("timerPresets")) {
        return JSON.parse(localStorage.getItem('timerPresets'))
    }
    const presets = defaultPresets
    localStorage.setItem("timerPresets", JSON.stringify(presets))
    return presets
}

const addPreset = (preset) => {
    localStorage.setItem("timerPresets", JSON.stringify([...getPresets(), preset]))
}

const subscribeWith = (stateCallback) => {
    callback = stateCallback
}

const unsubscribe = () => {
    callback = (...args) => { return }
}

const echo = (value) => {
    callback(value)
}

const newIndex = () => {
    const presets = getPresets()
    return (presets[presets.length - 1].index) + 1
}

const reset = () => {
    localStorage.setItem("timerPresets", JSON.stringify(defaultPresets))
    echo(defaultPresets)
}

export default { getPresets, addPreset, newIndex, subscribeWith, unsubscribe, echo, reset }
