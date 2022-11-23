import { MapContainer, TileLayer, useMap, useMapEvents, GeoJSON } from "react-leaflet";
import React, { useState, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import * as WMS from "leaflet.wms";
import configApi from "./config.json"
import L from "leaflet";
import "./Map.css"

function Map({
  basemap,
  opacityBasemap,
  opacityBangunan,
}) {
  const [change, setChange] = useState(true);
  const [map, setMap] = useState(false)
  const [first, setFirst] = useState(true)

  const TileLayerHandler = () => {
    setChange(false)
    return <TileLayer url={basemap} maxZoom={22} />;
  };

  const tileRef = useRef();

  useEffect(() => {
    setChange(true)
  }, [basemap])

  useEffect(() => {
    if (map) {
      tileRef.current
        .getContainer()
        .style.setProperty("filter", `opacity(${opacityBasemap}%)`);
    }
  }, [])

  useEffect(() => {
    if (map) {
      tileRef.current
        .getContainer()
        .style.setProperty("filter", `opacity(${opacityBasemap}%)`);
    }
  }, [opacityBasemap])

  useEffect(() => {
    if (map) {
      map.target.eachLayer(function (layer) {
        if (layer._name === "pengasih:bangunan") {
          layer.setOpacity(opacityBangunan * 0.01)
          /* } else if (layer._name === "pengasih:batas_desa") {
            layer.setOpacity(opacityBatas * 0.01)
          } else if (layer._name === "doudou:mosaik_doudo") {
            layer.setOpacity(opacityFoto * 0.01) */
        }
      });
    }
  }, [opacityBangunan/*, opacityBatas, opacityFoto*/])

  var CustomWMSLayer = (props) => {
    var map = useMap();
    if (first) {
      console.log(first)
      const { url, options, layers } = props;
      const source = WMS.source(url, options);
      var layer = source.getLayer(layers)
      layer.addTo(map);
      setFirst(false);
    }
    return null;
  }

  return (
    <div classname="w-screen h-screen z-0">
      <MapContainer
        className="h-screen w-screen"
        center={[-7.843565512360345, 110.16703605651855]}
        zoom={15}
        zoomControl={false}
        scrollWheelZoom={true}
        whenReady={(e) => setMap(e)}
      >
        {change ? <TileLayerHandler /> : <TileLayer ref={tileRef} url={basemap} style={{ opacity: "0.5" }} maxZoom={22} />}

        <CustomWMSLayer
          url={configApi.SERVER_GEOSERVER + "geoserver/pengasih/wms"}
          layers={"pengasih:bangunan"}
          options={{
            format: "image/png",
            transparent: "true",
            tiled: "true",
            identify: false,
            maxZoom: 22,
            opacity: 0.8
          }}
        />

      </MapContainer>
    </div>
  )
}

export default Map