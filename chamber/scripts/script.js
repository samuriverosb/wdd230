const getDate = new Date();
const year = document.querySelector("#year");
year.textContent = getDate.getFullYear();

const date = document.querySelector("#date");
date.textContent = getDate.toLocaleDateString("en-UK", {
  weekday: "long",
  day: "numeric",
  year: "numeric",
  month: "long"
});

const lastModified = document.querySelector("#modification");
lastModified.textContent = new Date(document.lastModified).toLocaleString();

const toggleMenu = () => {
  document.querySelector("#hidden").classList.toggle("show");
}

const hamburger = document.querySelector(".hamburger")
hamburger.onclick = toggleMenu;

const eventDate = document.querySelector(".eventHidden")
const day = getDate.getDay();
if (day == 1 || day == 2) {
  eventDate.classList.toggle("showEvent");
}

const weather = document.querySelector("#weather");

const cityName = document.createElement("h3");
cityName.setAttribute("id", "city-name");
const country = document.createElement("sup");
country.classList.add("country");
const degrees = document.createElement("div");
degrees.classList.add("degrees");
const temp = document.createElement("span");
temp.setAttribute("id", "degrees");
const celsius = document.createElement("span");
celsius.textContent = "°C";
celsius.classList.add("celsius");
const icon = document.createElement("img");
icon.setAttribute("id", "weather-icon");
icon.setAttribute("alt", "weather icon");
degrees.appendChild(temp);
degrees.appendChild(celsius);
degrees.appendChild(icon)
const description = document.createElement("p");
description.setAttribute("id", "description");
const hr = document.createElement("hr");
const windDiv = document.createElement("div");
windDiv.setAttribute("id", "windSpeed");
const windSpeed = document.createElement("p");
windSpeed.textContent = "Wind Speed: ";
const windValue = document.createElement("span");
windSpeed.appendChild(windValue);
windDiv.appendChild(windSpeed);

weather.appendChild(cityName);
weather.appendChild(country);
weather.appendChild(degrees);
weather.appendChild(description);
weather.appendChild(hr);
weather.appendChild(windDiv);

const API_URL = "https://api.openweathermap.org/data/2.5/weather?id=3868121&appid=f6d1be44d84a90316be8e41a8096a413&units=metric"
fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    windValue.textContent = " " + data.wind.speed + " km/h";
    cityName.textContent = data.name;
    temp.textContent = parseInt(data.main.temp);
    description.textContent = data.weather[0].description;
    icon.setAttribute("src", 
      `http://openweathermap.org/img/w/${data.weather[0].icon}.png`  
    )
    country.textContent = data.sys.country;
  })