import React from "react";
import "./App.css";
import teslaData from "./data/tesla-sites.json";
import { MapContainer, TileLayer,Marker, Popup } from "react-leaflet";

function App() {

  const filtering =teslaData.filter(tesla=> tesla.address.country === 'Italy' )
  return (
    <>
      <MapContainer className='leaflet-container' center={[45.38967, 8.128911]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          filtering.map(tesla=>(
            <Marker position={[tesla.gps.latitude,tesla.gps.longitude]} key={tesla.id}>
              <Popup position={[tesla.gps.latitude,tesla.gps.longitude]}>
                <div>
                <h2>{tesla.name}</h2>
                <p>{`status: ${tesla.status}`}</p>
                <p>{`Number of charging stations: ${tesla.stallCount}`}</p> 
                </div>
                </Popup>
            </Marker>
          ))
        }
      </MapContainer>
    </>
  );
}

export default App;
