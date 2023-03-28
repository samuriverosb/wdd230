// About us page





const lastModified = document.querySelector("#last-modified");
lastModified.textContent = new Date(document.lastModified).toLocaleString();

const date = new Date();

const year = document.querySelector("#year");
year.textContent = date.getFullYear();

const toggleMenu = () => {
  document.querySelector("#hidden").classList.toggle("show");
}

const hamburger = document.querySelector(".hamburger")
hamburger.onclick = toggleMenu;