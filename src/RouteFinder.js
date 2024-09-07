// src/RouteFinder.js
import React, { useState } from 'react';

const RouteFinder = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const findRoute = () => {
    // Logic to find the safest route between start and end
  };

  return (
    <div className="route-finder">
      <input
        type="text"
        placeholder="Start location"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <input
        type="text"
        placeholder="End location"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      />
      <button onClick={findRoute}>Find Safe Route</button>
    </div>
  );
}

export default RouteFinder;
