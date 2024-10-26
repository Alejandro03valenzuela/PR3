import React, { useState, useEffect } from 'react';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Lima&appid=YOUR_API_KEY')
      .then(response => response.json())
      .then(data => setWeatherData(data));
  }, []);

  if (!weatherData) return <p>Cargando...</p>;

  return (
    <div className="p-8">
      <h3 className="text-2xl font-bold">Clima en Lima</h3>
      <p className="mt-2">Temperatura: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
    </div>
  );
}

export default Weather;
