import React, { useState } from "react";
import axios from "axios";

export default function WeatherUpdate() {
  function displayWeather() {}

  function handleSubmit(event) {
    event.preventDefault();
    let city = "paris";
    let apiKey = `7633347349ec94a368e4a15d93744b30`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
}
