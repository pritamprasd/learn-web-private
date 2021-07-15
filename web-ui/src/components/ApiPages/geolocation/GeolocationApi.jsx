import React, { useEffect, useState } from "react";
import './GeolocationApi.css'
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";

export default function GeolocationApi() {
  const [mainText, setMainText] = useState("");
  const [lon, setlon] = useState(0.0)
  const [lat, setlat] = useState(0.0)
  const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      setMainText("Geolocation is not supported by this browser.");
    }
  }, []);

  function showPosition(position) {
    setMainText(
      "Latitude: " +
        position.coords.latitude +
        "\nLongitude: " +
        position.coords.longitude
    );
    setlat(position.coords.latitude)
    setlon(position.coords.longitude)
  }

  return( 
    <div className= "geo-location-page-container">
      {mainText}
      <ComposableMap projection="geoAlbers"
        width="400"
        projectionConfig={{
            rotate: [-80.0, 17, 0],
            scale: 700
        }}
      >
        <Geographies geography={geoUrl}>
            {({ geographies }) =>
                geographies.map(geo => (
                    <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#DDD"
                        stroke="#FFF"
                    />
                ))
            }
        </Geographies>
        <Marker coordinates={[lon, lat]}>
            <circle r={8} fill="#F53" />
        </Marker>
    </ComposableMap>
    </div>
  );
}
