import React, {  useState } from 'react';
import './WeatherApi.css'
import backButton from '../../utils/ReusableComponents';


export default function WeatherApi() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if(e.key === 'Enter') {
            const myUrl = 'https://api.openweathermap.org/data/2.5/weather';
            const API_KEY = 'f33a484cf794d08d0148764789aaba32'; //Used from github: adrianhajdin/project_weather_pwa

            var url = new URL(myUrl)
            const params= {
                q: query,
                units: 'metric',
                APPID: API_KEY,
            }
            url.search = new URLSearchParams(params).toString();
            fetch(url).then(res => res.json())
                .then(w => {
                    console.table("Heyooo: ", w);
                    setWeather(w);
                    setQuery('');
                })
                .catch(e => console.error(e));            
        }
    }

    return (
        <div className="main-container">
            <input type="text"className="search"placeholder="Search..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
