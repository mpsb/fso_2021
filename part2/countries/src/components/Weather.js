import axios from "axios";
import { useState, useEffect } from "react";

const Weather = ({ country, apiUrl }) => {
    const [ countryWeather, setCountryWeather ] = useState({'current': {'temperature': '', 'wind_speed': '', 'wind_dir': '', 'weather_icons': ''}});

    useEffect(() => {
        const eventHandler = response => {
        console.log(response.data);
        setCountryWeather(response.data);
        }

        const promise = axios.get(apiUrl);

        promise.then(eventHandler);
    }, [apiUrl]);
    return(
        <div>
            <h2>Weather in {country.capital}</h2>
        <br></br>
        <p><b>temperature: </b>{countryWeather.current.temperature} Celsius</p>
        <img src={countryWeather.current.weather_icons[0]} alt="weather-logo" />
        <p><b>wind: </b>{countryWeather.current.wind_speed} mph {countryWeather.current.wind_dir}</p>
        </div>
    );
}

export default Weather;