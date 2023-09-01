import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { OPEN_WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${OPEN_WEATHER_API_KEY}&units=metric `
      );
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      setError("Could not fetch weather");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("permission to access location is denied");
        return;
      }
      const deviceLocation = await Location.getCurrentPositionAsync({});
      setLat(deviceLocation.coords.latitude);
      setLong(deviceLocation.coords.longitude);
      await fetchWeatherData();
    })();
  }, [lat, long]);

  return [loading, error, weather];
};
