import React, { useEffect } from "react"


import { StyleContext } from "../../contexts/textStyle"
import { TextContext } from "../../contexts/text"

const Reader = () => {
    const { text } = useContext(TextContext)["state"]
    const rows = useState([])

    useEffect(() => {
        rows = text.match(/[^\r\n]+/g)
        console.log("ROWS", rows)
    }, [text])

}

export default Reader
