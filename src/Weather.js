import React from "react";
import axios from "axios";
import LoadingIcons from "react-loading-icons";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C `
    );
  }
  let apiKey = "7633347349ec94a368e4a15d93744b30";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <LoadingIcons.Puff stroke="#FD729B" />;
}
