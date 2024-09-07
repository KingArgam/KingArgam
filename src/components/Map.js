import React, { useState, useCallback, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const center = {
  lat: 39.9526, // Philadelphia latitude
  lng: -75.1652, // Philadelphia longitude
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDq6x0xpnOPIodoW6BXEDoDoEaG2dHYEx4",
  });

  const [markers, setMarkers] = useState([]);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  useEffect(() => {
    const fetchMarkers = async () => {
      const querySnapshot = await getDocs(collection(db, "markers"));
      const markersData = [];
      querySnapshot.forEach((doc) => {
        markersData.push(doc.data());
      });
      setMarkers(markersData);
    };

    fetchMarkers();
  }, []);

  const addMarker = useCallback(
    async (event) => {
      const newMarker = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        description: prompt("Enter description for this marker"),
      };

      await addDoc(collection(db, "markers"), newMarker);
      setMarkers((current) => [...current, newMarker]);
    },
    [setMarkers]
  );

  const calculateRoute = useCallback(() => {
    if (origin && destination) {
      const waypoints = markers.map((marker) => ({
        location: { lat: marker.lat, lng: marker.lng },
        stopover: true,
      }));

      setDirectionsResponse({
        origin,
        destination,
        waypoints,
        travelMode: "DRIVING",
        avoidFerries: true,
        avoidTolls: true,
      });
    }
  }, [origin, destination, markers]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="map-container">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onClick={addMarker}
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
          ))}

          {directionsResponse && (
            <DirectionsRenderer
              directions={directionsResponse}
              options={{
                suppressMarkers: true,
                polylineOptions: {
                  strokeColor: "green",
                  strokeOpacity: 0.6,
                  strokeWeight: 5,
                },
              }}
            />
          )}
        </GoogleMap>
      </div>
      <div className="controls">
        <input
          type="text"
          placeholder="Origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button onClick={calculateRoute}>Find Safe Route</button>
      </div>
    </div>
  );
}

export default Map;
