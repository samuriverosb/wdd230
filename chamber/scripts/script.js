const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

const date = document.querySelector("#date");
date.textContent = new Date().toLocaleDateString("en-UK", {
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
