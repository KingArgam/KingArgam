import React, { useState } from 'react';
import Map from './Map';

const SafeRoute = () => {
    const [startLocation, setStartLocation] = useState({ lat: 37.7749, lng: -122.4194 });
    const [endLocation, setEndLocation] = useState({ lat: 37.7749, lng: -122.4194 });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const [lat, lng] = value.split(',').map(coord => parseFloat(coord.trim()));
        if (name === 'start') {
            setStartLocation({ lat, lng });
        } else if (name === 'end') {
            setEndLocation({ lat, lng });
        }
    };

    return (
        <div>
            <input type="text" name="start" placeholder="Start Location (lat,lng)" onChange={handleInputChange} />
            <input type="text" name="end" placeholder="End Location (lat,lng)" onChange={handleInputChange} />
            <Map startLocation={startLocation} endLocation={endLocation} />
        </div>
    );
};

export default SafeRoute;
