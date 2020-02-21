import React from "react"
import { Map, TileLayer, Marker, Popup, Polyline } from "react-leaflet"
import poly from "@mapbox/polyline"

const RouteMap = ({ bounds, start, end, legGeometry }) => {
    const decodedRoute = poly.decode(legGeometry)
    return (
        <Map
            bounds={bounds}
            boundsOptions={{ padding: [50, 50] }}
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
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
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
            <Polyline positions={decodedRoute} color={'blue'} />
        </Map>
    )
}

export default RouteMap
