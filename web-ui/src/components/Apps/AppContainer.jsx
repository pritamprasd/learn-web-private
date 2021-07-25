import React, { useState } from "react";
import "./AppContainer.css";
import AppTile from "./AppTile";
import WeatherApi from "./weather/WeatherApi";
import { backButton } from "../utils/ReusableComponents";
import CardMagic from "./cardmagic/CardMagic";
import GithubCard from "./githubcard/GithubCard";

export default function AppContainer() {
  const [currentApp, setCurrentApp] = useState();

  const apps = [
    { name: "Weather App", app: <WeatherApi /> },
    { name: "Card magic", app: <CardMagic /> },
    { name: "Github Card", app: <GithubCard /> },
  ];

  return (
    <div>
      <button className="back-button" onClick={() => setCurrentApp(false)}>
        {backButton()}
      </button>
      <div className="app-container">
        {!currentApp &&
          apps.map((app) => (
            <AppTile name={app.name} app={app.app} renderapp={setCurrentApp} />
          ))}
      </div>
      {currentApp}
    </div>
  );
}
