import "../App.css";
import { useState } from "react";

export default function SearchBar({ setWeather, setLoad }) {
  const [text, setText] = useState("");
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoad(false);

    if (text == "" || /\d/.test(text)) {
      console.log("hi");
      return;
    }
    const responseCity = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${text}`,
    );

    const city = await responseCity.json();
    console.log(city.results[0]);

    const responseWeather = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${
        city.results[0].latitude
      }&longitude=${city.results[0].longitude}&current_weather=true`,
    );
    const weather = await responseWeather.json();
    console.log(weather.current_weather);
    setWeather({
      ...weather,
      nameCity: city.results[0].name,
      temperature: weather.current_weather.temperature,
      weatherCode: weather.current_weather.weathercode,
    });

    const history = JSON.parse(sessionStorage.getItem("history")) || [];
    history.push(city.results[0].name);
    sessionStorage.setItem("history", JSON.stringify(history));
    setLoad(true);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white rounded-4 p-4 d-flex align-items-center search"
      style={{ width: "50vw" }}
    >
      <input
        type="text"
        placeholder="Enter city name..."
        className="w-75 p-2  border  rounded-2 "
        style={{ height: "35px" }}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn w-25 bg-primary ms-3 text-white" type="submit">
        Search
      </button>
    </form>
  );
}
