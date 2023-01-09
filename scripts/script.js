const date = new Date();
const year = date.getFullYear();
document.querySelector('#year').textContent = year;

const lastModified = new Date(document.lastModified)
const month = lastModified.getMonth();
const day = lastModified.getDay();
const hour = lastModified.getHours();
const minutes = lastModified.getMinutes();
const seconds = lastModified.getSeconds();
const fullTime = `${month + 1}/${day + 1}/${year} ${hour}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`
document.querySelector('#date').textContent = fullTime;