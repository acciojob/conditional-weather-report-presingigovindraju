import React from "react";
import './../styles/App.css';

const App = () => {
  const weather = { temperature: 25, conditions: "Sunny" };
  const threshold = 20;
  const temperatureColor = weather.temperature > threshold ? 'red' : 'blue';

  return (
    <div className="container">
      <p className="temperature" style={{ color: temperatureColor }}>Temperature: {weather.temperature}</p>
      <p className="conditions">Conditions: {weather.conditions}</p>
    </div>
  );
}

export default App;
