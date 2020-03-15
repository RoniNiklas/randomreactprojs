import React, { useState } from "react"
import VolumeOff from '@material-ui/icons/VolumeOff'
import VolumeUp from "@material-ui/icons/VolumeUp"
import soundService from "../../../services/sound"
import "./MuteButton.css"

const MuteButton = () => {
    const [muted, setMuted] = useState(soundService.getMuted)
    const handleMute = () => {
        setMuted(!muted)
        soundService.setMuted(!muted)
    }
    return (
        <button className="mutebutton" onClick={handleMute} >
            { muted ? <VolumeOff /> : <VolumeUp />}
        </button>
    )
}

export default MuteButton
