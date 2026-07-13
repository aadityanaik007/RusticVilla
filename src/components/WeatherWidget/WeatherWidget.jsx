import React, { useEffect, useState } from "react";
import "./WeatherWidget.css";

const LATITUDE = 19.7019817;
const LONGITUDE = 73.2099689;
const FORECAST_URL = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m&timezone=auto`;

const CONDITIONS = {
  sunny: {
    label: "Clear & Sunny",
    icon: "sun",
    activities: [
      "Take a dip in the plunge pool",
      "Badminton or carrom on the lawn",
      "Plan a bonfire once the sun sets",
      "Soak up the garden and photograph the farm",
    ],
  },
  cloudy: {
    label: "Cloudy",
    icon: "cloud",
    activities: [
      "Nature walks around the property",
      "Photography session in soft light",
      "Poolside lounging without the harsh sun",
      "Evening karaoke or music session",
    ],
  },
  foggy: {
    label: "Misty",
    icon: "cloud",
    activities: [
      "Cozy chai on the porch",
      "Photograph the misty farm views",
      "Indoor carrom and board games",
      "Relaxed morning in the attic nook",
    ],
  },
  rainy: {
    label: "Rainy",
    icon: "rain",
    activities: [
      "Explore the whimsical first-floor attic",
      "Carrom, cards, and indoor games",
      "Karaoke and music indoors",
      "Watch the rain with a warm cup of chai",
    ],
  },
  stormy: {
    label: "Stormy",
    icon: "rain",
    activities: [
      "Stay cozy indoors with board games",
      "Karaoke night in the living room",
      "Warm, home-style comfort food",
      "Curl up in the attic with the little ones",
    ],
  },
  pleasant: {
    label: "Pleasant",
    icon: "sun",
    activities: [
      "Pool day with the family",
      "Evening bonfire under the stars",
      "Garden games and nature walks",
      "Farm-fresh, home-style dining outdoors",
    ],
  },
};

const codeToCondition = (code) => {
  if (code === 0 || code === 1) return "sunny";
  if (code === 2 || code === 3) return "cloudy";
  if (code === 45 || code === 48) return "foggy";
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return "rainy";
  if (code >= 95) return "stormy";
  return "pleasant";
};

const WeatherIcon = ({ type }) => {
  if (type === "sun") {
    return (
      <div className="weather-icon sun-icon">
        <div className="sun-core"></div>
        <div className="sun-rays"></div>
      </div>
    );
  }
  if (type === "rain") {
    return (
      <div className="weather-icon rain-icon">
        <div className="rain-cloud"></div>
        <div className="rain-drops">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
  return (
    <div className="weather-icon cloud-icon">
      <div className="cloud-shape"></div>
    </div>
  );
};

const WeatherWidget = () => {
  const [status, setStatus] = useState("loading");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch(FORECAST_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Weather request failed");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const current = data.current;
        const condition = codeToCondition(current.weather_code);
        setWeather({
          temperature: Math.round(current.temperature_2m),
          humidity: current.relative_humidity_2m,
          wind: Math.round(current.wind_speed_10m),
          condition,
        });
        setStatus("success");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "loading") {
    return (
      <div className="weather-widget weather-loading">
        <div className="weather-spinner"></div>
        <p>Checking current weather at the villa...</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="weather-widget weather-error">
        <h3>Weather at the Villa</h3>
        <p>
          Couldn't load live conditions right now. Check the forecast for
          Wada, Palghar before your visit, or just ask us when you call.
        </p>
      </div>
    );
  }

  const conditionInfo = CONDITIONS[weather.condition];

  return (
    <div className="weather-widget">
      <div className="weather-main">
        <WeatherIcon type={conditionInfo.icon} />
        <div className="weather-stats">
          <div className="weather-temp">{weather.temperature}°C</div>
          <div className="weather-condition">{conditionInfo.label}</div>
          <div className="weather-meta">
            Humidity {weather.humidity}% &middot; Wind {weather.wind} km/h
          </div>
        </div>
      </div>
      <div className="weather-suggestions">
        <h4>What to do at the villa right now</h4>
        <ul>
          {conditionInfo.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherWidget;
