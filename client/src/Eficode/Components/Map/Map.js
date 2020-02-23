import React from "react"
import { Map, TileLayer, Marker, Popup, Polyline } from "react-leaflet"
import mapUtil from "../../utils/map"
import "./Map.css"

const RouteMap = ({ bounds, start, end, legGeometry, mode }) => {

    return (
        <Map
            bounds={bounds}
            boundsOptions={{ padding: [40, 40] }}
            maxZoom={18}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
            tileSize={512}
            zoomOffset={-1}
        >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a>'
                url="https://cdn.digitransit.fi/map/v1/hsl-map/{z}/{x}/{y}.png"
            />
            <Marker position={start}>
                <Popup>
                    Start location
                </Popup>
            </Marker>
            <Marker position={end}>
                <Popup>
                    End location
                </Popup>
            </Marker>
            <Polyline
                dashArray={mode === "WALK" ? "5" : "0"}
                positions={mapUtil.decodeRoute(legGeometry)}
                color={mapUtil.colorModeMatcher(mode)} />
        </Map>
    )
}

export default RouteMap
