import React from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const API_KEY = 'AIzaSyDq6x0xpnOPIodoW6BXEDoDoEaG2dHYEx4';

export const MapContainer = ({ children, center, zoom }) => (
    <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap mapContainerStyle={{ height: '100vh', width: '100%' }} center={center} zoom={zoom}>
            {children}
        </GoogleMap>
    </LoadScript>
);

export const RouteDirections = ({ origin, destination, callback }) => (
    <DirectionsService
        options={{
            destination: destination,
            origin: origin,
            travelMode: 'WALKING',
        }}
        callback={callback}
    />
);

export const DirectionsDisplay = ({ directions }) => (
    directions ? <DirectionsRenderer directions={directions} /> : null
);
