import React, { useEffect, useState } from "react";
import { Side } from "./components/Side";
import Details from "./components/Details";
import axios from "axios";
import { DarkMode } from "./components/DarkMode";

export default function App() {
  const [place, setPlace] = useState([]);
  const [lon, setLon] = useState(null);
  const [lat, setLat] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [tempC, setTempC] = useState(true);

  function formatDateLabel(dt_txt) {
    const date = new Date(dt_txt);
    const options = { weekday: "short", day: "numeric", month: "short" };
    const formatted = date.toLocaleDateString("en-US", options);
    const [weekday, rest] = formatted.split(", ");
    const [month, day] = rest.split(" ");
    return `${weekday}, ${day} ${month}`;
  }

  useEffect(() => {
    const defaultPlace = {
      id: 1,
      name: "Tokyo",
      lat: 35.6897,
      lon: 139.6922,
      country: "Japan",
      country_code: "JP",
    };
    setPlace(defaultPlace);
  }, []);

  useEffect(() => {
    setLat(place.lat);
    setLon(place.lon);
  }, [place]);

  useEffect(() => {
    if (lat !== null && lon !== null) {
      async function fetchForecast() {
        try {
          const response = await axios.get(`/api/openWeather?lat=${lat}&lon=${lon}`);

          const forecastData = response.data.list;

          const now = new Date();
          const nowUTC = new Date(
            now.getUTCFullYear(),
            now.getUTCMonth(),
            now.getUTCDate(),
            now.getUTCHours(),
            now.getUTCMinutes()
          );

          const todayUTCDate = nowUTC.toISOString().split("T")[0];

          const todayForecasts = forecastData.filter((item) =>
            item.dt_txt.startsWith(todayUTCDate)
          );

          let closestToNow = null;
          let minDiff = Infinity;

          for (const forecast of todayForecasts) {
            const forecastDate = new Date(forecast.dt_txt);
            const diff = forecastDate - nowUTC;
            if (diff >= 0 && diff < minDiff) {
              minDiff = diff;
              closestToNow = forecast;
            }
          }

          const restOfForecasts = forecastData.filter((item) => {
            const date = item.dt_txt.split("T")[0];
            return date !== todayUTCDate && item.dt_txt.includes("12:00:00");
          });

          const finalForecast = [];
          if (closestToNow) finalForecast.push(closestToNow);
          finalForecast.push(...restOfForecasts);

          setForecast(finalForecast);
          console.log(finalForecast);
        } catch (error) {
          console.error("Error al obtener el clima:", error);
        }
      }
      fetchForecast();
    }
  }, [lat, lon]);

  return (
    <>
      <div className="flex flex-col md:flex-row transition-colors duration-500">
        <Side formatDateLabel={formatDateLabel} place={place} setPlace={setPlace} forecast={forecast} tempC={tempC}></Side>
        <Details formatDateLabel={formatDateLabel} forecast={forecast} setTempC={setTempC} tempC={tempC}></Details>
        <DarkMode></DarkMode>
      </div>
    </>
  );
}
