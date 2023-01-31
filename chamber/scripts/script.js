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

const cityName = document.querySelector("#city-name");
const degrees = document.querySelector("#degrees");
const weatherIcon = document.querySelector("#weather-icon");
const description = document.querySelector("#description");

const API_URL = "https://api.openweathermap.org/data/2.5/weather?id=3868121&appid=f6d1be44d84a90316be8e41a8096a413&units=metric"
fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    cityName.textContent = data.name;
    degrees.textContent = parseInt(data.main.temp);
    description.textContent = data.weather[0].description;
    weatherIcon.setAttribute("src", 
      `http://openweathermap.org/img/w/${data.weather[0].icon}.png`  
    )
  })