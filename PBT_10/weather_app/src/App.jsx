import "./App.css";
import SearchBar from "./Components/SearchBar.jsx";
import WeatherCard from "./Components/WeatherCard.jsx";
import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./Components/Loading.jsx";
import History from "./Components/History.jsx";
function App() {
  useEffect(() => {
    sessionStorage.clear();
  }, []);
  const [weather, setWeather] = useState({
    nameCity: "",
    temperature: "",
    weatherCode: "",
  });
  const [load, setLoad] = useState(true);
  return (
    <div className="position-absolute top-50 start-50 main text-center">
      <div className="text-light">
        <h1 className="fw-bold">Weather App</h1>
        <p>Get real-time weather information</p>
      </div>
      <SearchBar setWeather={setWeather} setLoad={setLoad}></SearchBar>
      {load ? (
        <WeatherCard weather={weather}></WeatherCard>
      ) : (
        <Loading></Loading>
      )}
      {sessionStorage.getItem("history") ? <History></History> : ""}
    </div>
  );
}

export default App;
