const windChill = document.createElement("p");
windChill.textContent = "Wind Chill:";
const chill = document.createElement("span");
windChill.appendChild(chill);

weather.appendChild(windChill);

const API_URL_IMP = "https://api.openweathermap.org/data/2.5/weather?id=3868121&appid=f6d1be44d84a90316be8e41a8096a413&units=imperial";
fetch(API_URL_IMP)
  .then(res => res.json())
  .then(data => {
    const temp = parseFloat(data.main.temp);
    const wind = parseFloat(data.wind.speed);
    if (temp <= 50 && wind > 3) {
      const calc = 35.74 + (0.6215 * temp) - (35.75 * (wind ** 0.16) + (0.4275 * temp * (wind ** 0.16)))
      chill.textContent = calc;
    }
    else {
      chill.textContent = " N/A"
    }
  })