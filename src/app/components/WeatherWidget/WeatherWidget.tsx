"use client";

import { useEffect, useState } from "react";

interface WeatherData {
  main?: { temp: number; feels_like: number };
  weather?: { description: string; icon: string }[];
  wind?: { speed: number };
  name?: string;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("");
  const [searchCity, setSearchCity] = useState("");

  const API_KEY = "17ed1eb6cfca41e9c478069f92ab4c4c";

  // Default villa coordinates
  const LAT = 17.905174987683566;
  const LON = 73.81453967463824;

  async function fetchWeatherByCoords(lat: number, lon: number) {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      if (data.cod !== 200) {
        console.error("Weather API error:", data);
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (err) {
      console.error("Weather API Error:", err);
    } finally {
      setLoading(false);
    }
  }

  async function fetchWeatherByCity(city: string) {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      if (data.cod !== 200) {
        console.error("Weather API error:", data);
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (err) {
      console.error("Weather API Error:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeatherByCoords(LAT, LON);
  }, []);
  

  useEffect(() => {
    if (searchCity) {
      fetchWeatherByCity(searchCity);
    }
  }, [searchCity]);
  

  if (loading)
    return (
      <div className="bg-white shadow-lg rounded-2xl p-6 text-center text-gray-600">
        Loading weather...
      </div>
    );

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-4 max-w-sm border border-[#eae7e3]">
      {/* Weather Display */}
      {weather?.main && weather.weather && weather.weather.length > 0 ? (
        <div className="flex flex-col gap-3 text-center">
          {/* Temperature + Icon */}
          <div className="flex items-center gap-4">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className="w-14 h-14 drop-shadow-md"
            />
            <div>
              <p className="text-3xl font-bold text-[#14100c]">
                {Math.round(weather.main.temp)}°C
              </p>
              <p className="text-sm capitalize text-[#625c56]">
                {weather.weather[0].description}
              </p>
              {weather.name && (
                <p className="text-xs text-[#91765a] font-semibold">
                  📍 {weather.name}
                </p>
              )}
            </div>
          </div>

          {/* Feels Like + Wind */}
          <p className="text-sm text-[#625c56] bg-[#f5eee7] px-3 py-2 rounded-lg">
            Feels like{" "}
            <span className="font-semibold">
              {Math.round(weather.main.feels_like)}°C
            </span>
            . {weather.weather[0].description}.{" "}
            {weather.wind && (
              <span>
                {weather.wind.speed < 1
                  ? "Calm wind"
                  : weather.wind.speed < 3
                  ? "Light breeze"
                  : weather.wind.speed < 6
                  ? "Gentle breeze"
                  : "Windy"}
              </span>
            )}
          </p>
        </div>
      ) : (
        <p className="text-sm text-[#d22525] bg-[#f5eee7] px-3 py-2 rounded-lg">Weather information is currently unavailable</p>
      )}

      {/* Search Input */}
      <div className="flex gap-2 w-full">
        <input
          type="text"
          placeholder="Check weather in another city"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-[#ddd] rounded-lg p-2 text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-[#91765a]"
        />
        <button
          onClick={() => setSearchCity(location)}
          className="bg-[#91765a] hover:bg-[#a88f70] text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
        >
          Check
        </button>
      </div>
    </div>
  );
}
