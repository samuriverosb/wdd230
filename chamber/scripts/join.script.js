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

const datetimeLocal = () => {
  const dt = new Date();
  dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
  return dt.toISOString().slice(0, 16);
}

const datetime = document.querySelector("#datetime-local");
datetime.value = datetimeLocal();