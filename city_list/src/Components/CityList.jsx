import React, { useState } from 'react';
import './citylist.css'
function CityList() {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedCity = city.trim();

    if (trimmedCity === '') {
      setError('City name cannot be empty or whitespace.');
      return;
    }

    if (cities.includes(trimmedCity)) {
      setError('City name already exists.');
      return;
    }

    setCities([...cities, trimmedCity]);
    setCity('');
    setError('');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="city-form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="input-field"
        />
        <button type="submit" className="submit-btn">Add City</button>
      </form>

      {error && <p className="error-msg">{error}</p>}

      {cities.length > 0 && (
        <ul className="city-list">
          {cities.map((city, index) => (
            <li key={index} className="city-item">{city}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CityList;
