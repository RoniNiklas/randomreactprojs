import React from "react"
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from "@material-ui/icons/ExpandMore"
import "./ShowFormButton.css"

const ShowFormButton = ({ showForm, setShowForm }) => {
    return (
        <div className="showform-wrapper">
            <button
                className='showform-button'
                onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Hide' : 'Set Timer Values'}
                {showForm ? <ExpandLess /> : <ExpandMore />}
            </button>
        </div>

    )
}

export default ShowFormButton
