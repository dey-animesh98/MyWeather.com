import { useState } from "react";

const Weather = () => {
  const api = {
    url: "https://api.openweathermap.org/data/2.5/weather/",
    method: "get",
    key: "63362e88851a1da3fb7a18912571b3cc",
  };

  const iconUrl = "https://openweathermap.org/img/w/";

  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const getInput = (event) => {
    return setInput(event.target.value);
  };

  const updateData = (event) => {
    if (event.key === "Enter" && input === "") {
      setErrorMsg("* Please enter city name");
      setError(true);
    }

    if (event.key === "Enter" && input !== "") {
      setIsLoading(true);
      // setError(true);
      fetch(`${api.url}?q=${input}&units=metrics&APPID=${api.key}`)
        .then((res) => {
          if (!res.ok) {
            throw Error("City not found");
          }
          return res.json();
        })
        .then((data) => {
          setWeather(data);
          setInput("");
          setError(false);
          setIsLoading(false);
          // console.log(data);
        })
        .catch((err) => {
          setError(true);
          setErrorMsg(err.message);
          setIsLoading(false);
          // console.log(err.message);
        });
    }
  };
  return (
    <>
      <section className="main">
        <div className="weather main">
          <div className="local">
            <h3
              className={
                Object.keys(weather).length !== 0 ? "my-weather" : "no-weather"
              }
            >
              MyWeather.com
            </h3>
            <p className="time">{new Date().toLocaleString()}</p>
          </div>
          <div className="city-search">
            <input
              type="text"
              placeholder="Enter city"
              onChange={getInput}
              onKeyPress={updateData}
              value={input}
            />

            {isLoading && <p className="searching">searching....</p>}
          </div>

          {error ? (
            <p className={errorMsg != "" ? "err-msg" : ""}>{errorMsg}</p>
          ) : (
            <div className="details">
              <p className="city">
                {weather.name}, {weather.sys.country}
              </p>

              <p>
                <span> ⬆️{Math.round(weather.main.temp_max - 273)}°C </span>
                <span> ⬇️{Math.round(weather.main.temp_min - 273)}°C</span>
              </p>

              <p className="feels-like">
                Feels like {Math.round(weather.main.feels_like - 273)}°C
              </p>

              <div className="icon">
                <img
                  src={`${iconUrl}${weather.weather[0].icon}.png`}
                  alt={weather.weather[0].description}
                />

                <p>{weather.weather[0].main}</p>
              </div>

              <p>Humidity 💧{weather.main.humidity}% </p>
              <p>Wind 🌬️ {weather.wind.speed}km/h </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default Weather;
