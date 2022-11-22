import React from 'react'
import {
  MapContainer,
  TileLayer,
  Polygon
} from 'react-leaflet'
import "./Map.css"
import Bangunan from "../data/Bangunan.json"
import BatasDesa from "../data/BatasDesa.json"

const Map = () => {
  const position = [-7.843565512360345, 110.16703605651855]
  const purpleOptions = { color: 'purple' }
  return (
    <div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Polygon pathOptions={purpleOptions} positions={Bangunan} />

      </MapContainer>
    </div>
  )
}

export default Map