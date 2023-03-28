const current = document.querySelector("#current-weather");
const forecast = document.querySelector("#forecast");
const drinks = document.querySelector("#total-drinks");
const CURRENT_URL = "https://api.openweathermap.org/data/2.5/weather?id=5334223&appid=f6d1be44d84a90316be8e41a8096a413&units=metric";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast?id=5334223&appid=f6d1be44d84a90316be8e41a8096a413&units=metric";
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const toggleMenu = () => {
  document.querySelector("#hidden").classList.toggle("show");
}

const hamburger = document.querySelector(".hamburger")
hamburger.onclick = toggleMenu;

const city = document.createElement("h3");
city.setAttribute("class", "city");
const temp = document.createElement("h1");
temp.setAttribute("class", "temp");
const icon = document.createElement("img");
icon.setAttribute("id", "weather-icon");
icon.setAttribute("alt", "weather icon");
const condition = document.createElement("p");
const humidity = document.createElement("p");

current.appendChild(city);
current.appendChild(temp);
current.appendChild(icon);
current.appendChild(condition);
current.appendChild(humidity);

fetch(CURRENT_URL)
  .then(res => res.json())
  .then(data => {
    city.textContent = data.name;
    temp.textContent = parseInt(data.main.temp) + "°C";
    icon.setAttribute("src", 
      `http://openweathermap.org/img/w/${data.weather[0].icon}.png`  
    )
    condition.textContent = data.weather[0].main;
    humidity.textContent = data.main.humidity + "% Hum";
  })

const div1 = document.createElement("div");
const date1 = document.createElement("h4");
const temp1 = document.createElement("h2");
const icon1 = document.createElement("img");
icon1.setAttribute("alt", "weather icon");
div1.appendChild(date1);
div1.appendChild(temp1);
div1.appendChild(icon1);

const div2 = document.createElement("div");
const date2 = document.createElement("h4");
const temp2 = document.createElement("h2");
const icon2 = document.createElement("img");
icon2.setAttribute("alt", "weather icon");
div2.appendChild(date2);
div2.appendChild(temp2);
div2.appendChild(icon2);

const div3 = document.createElement("div");
const date3 = document.createElement("h4");
const temp3 = document.createElement("h2");
const icon3 = document.createElement("img");
icon3.setAttribute("alt", "weather icon");
div3.appendChild(date3);
div3.appendChild(temp3);
div3.appendChild(icon3);

forecast.appendChild(div1);
forecast.appendChild(div2);
forecast.appendChild(div3);

fetch(FORECAST_URL)
  .then(res => res.json())
  .then(data => {
    date1.textContent = days[new Date(data.list[4]["dt_txt"]).getDay()];
    date2.textContent = days[new Date(data.list[12]["dt_txt"]).getDay()];
    date3.textContent = days[new Date(data.list[20]["dt_txt"]).getDay()];

    temp1.textContent = parseInt(data.list[4].main.temp) + "°C";
    temp2.textContent = parseInt(data.list[12].main.temp) + "°C";
    temp3.textContent = parseInt(data.list[20].main.temp) + "°C";

    icon1.setAttribute("src", 
      `http://openweathermap.org/img/w/${data.list[4].weather[0].icon}.png`  
    )
    icon2.setAttribute("src", 
      `http://openweathermap.org/img/w/${data.list[12].weather[0].icon}.png`  
    )
    icon3.setAttribute("src", 
      `http://openweathermap.org/img/w/${data.list[20].weather[0].icon}.png`  
    )
  })

const total = document.querySelector("#total-drinks");
const totalDrinks = document.createElement("h1");
total.appendChild(totalDrinks);
const lastModified = document.querySelector("#last-modified");
lastModified.textContent = new Date(document.lastModified).toLocaleString();

const date = new Date();

const year = document.querySelector("#year");
year.textContent = date.getFullYear();

const populateStorage = () => {
  localStorage.setItem("totalDrinks", "0");
}

if(!localStorage.getItem('totalDrinks')) {
  populateStorage();
}

totalDrinks.textContent = localStorage.getItem("totalDrinks");