import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./App.css";

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });
  const center = useMemo(() => ({ lat: 12.9353971, lng: 77.5355179 }), []);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={15}
        >
          <Marker position={{ lat: 12.9353971, lng: 77.5355179 }} icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} />
          <Marker position={{ lat: 12.9352056, lng: 77.5362696 }} icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} />
          <Marker position={{ lat: 12.9353971, lng: 78.5355179 }} icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} />
          <Marker position={{ lat: 12.9353971, lng: 79.5355179 }} icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} />
          {/* <Marker position={{ lat: 12.9353971, lng:80.5355179 }} icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} /> */}
          {/* <Marker position={{ lat: 12.9353971, lng: 81.5355179 }} icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} /> */}
        </GoogleMap>
      )}
    </div>
  );
};

export default App;
