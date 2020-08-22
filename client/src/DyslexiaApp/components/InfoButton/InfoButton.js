import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Info from "@material-ui/icons/Info"

import "./InfoButton.css"

const InfoButton = ({infoText, placement}) => {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {infoText}
      </Tooltip>
    )

    return (
        <OverlayTrigger
            placement={placement ? placement : "auto"}
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <button className="info-button"><Info/></button>
        </OverlayTrigger>
    )
}

export default InfoButton